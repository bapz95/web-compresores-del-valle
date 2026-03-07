import React, { useState, useEffect, useRef, useMemo } from "react";
import { PRODUCTS } from "../data/constants";
import { Category, SubCategory } from "../data/types";
import { formatCurrency } from "../utils/formatters";

const ITEMS_PER_PAGE = 9;
type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

// --- COMPONENTE SKELETON ---
const ProductSkeleton = ({ viewMode }: { viewMode: "grid" | "list" }) => (
  <div
    className={`bg-white rounded-4xl border border-slate-100 p-4 ${viewMode === "list" ? "flex gap-6 h-48" : "flex flex-col h-95"}`}
  >
    <div
      className={`bg-slate-100 rounded-2xl animate-pulse-fast ${viewMode === "list" ? "w-48 h-full shrink-0" : "w-full h-56 mb-4"}`}
    ></div>
    <div className="flex-1 space-y-3 py-2">
      <div className="h-5 bg-slate-100 rounded w-3/4 animate-pulse-fast"></div>
      <div className="h-3 bg-slate-100 rounded w-full animate-pulse-fast"></div>
      <div className="h-10 bg-slate-100 rounded w-full mt-auto animate-pulse-fast"></div>
    </div>
  </div>
);

export const Products: React.FC = () => {
  // --- ESTADOS ---
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all",
  );
  const [selectedSub, setSelectedSub] = useState<SubCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPromosOnly, setShowPromosOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const [isLoading, setIsLoading] = useState(true);

  // Estados Filtros Avanzados
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(100000000);
  const [selectedHPs, setSelectedHPs] = useState<string[]>([]);

  // Estado para controlar qué categorías están expandidas visualmente (Independiente de la selección)
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});
  const [sectionsOpen, setSectionsOpen] = useState({
    category: true,
    price: true,
    power: true,
  });

  const resultsRef = useRef<HTMLDivElement>(null);

  // --- DATOS COMPUTADOS ---
  const globalMaxPrice = useMemo(
    () => Math.max(...PRODUCTS.map((p) => p.price)),
    [],
  );

  // Extraer y ORDENAR Potencias (HP) numéricamente
  const availableHPs = useMemo(() => {
    if (
      selectedCategory !== Category.COMPRESORES &&
      selectedCategory !== Category.MOTORES
    )
      return [];
    const hps = PRODUCTS.filter((p) => p.category === selectedCategory)
      .map((p) => p.specs["Potencia"] || p.specs["Power"])
      .filter(Boolean);
    const uniqueHPs = [...new Set(hps)];
    // Ordenar: potencia
    return uniqueHPs.sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [selectedCategory]);

  // Scroll suave
  const scrollToResults = () => {
    if (resultsRef.current) {
      const y =
        resultsRef.current.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  // ---style Badget garantia y Marca ---
  const badgeBase =
    "flex items-center gap-1 px-2.5 h-6 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm backdrop-blur-sm";

  // --- EFECTO INICIAL ---
  useEffect(() => {
    const handleNavigation = () => {
      setIsLoading(true);
      const params = new URLSearchParams(window.location.search);

      setSearchQuery(params.get("q") || "");
      const catParam = params.get("cat") as Category;
      const validCat = Object.values(Category).includes(catParam)
        ? catParam
        : "all";

      setSelectedCategory(validCat);
      setSelectedSub(
        Object.values(SubCategory).includes(params.get("sub") as SubCategory)
          ? (params.get("sub") as SubCategory)
          : "all",
      );
      setShowPromosOnly(params.get("filtro") === "ofertas");
      
      // Auto-expandir la categoría seleccionada si existe
      if (validCat !== "all") {
        setExpandedCategories((prev) => ({ ...prev, [validCat]: true }));
      }

      setMaxPriceFilter(globalMaxPrice);
      setSelectedHPs([]);
      setCurrentPage(1);

      setTimeout(() => setIsLoading(false), 500);
    };

    handleNavigation();
    document.addEventListener("astro:page-load", handleNavigation);
    return () =>
      document.removeEventListener("astro:page-load", handleNavigation);
  }, [globalMaxPrice]);

  // --- LÓGICA DE FILTRADO ---
  let processedProducts = PRODUCTS.filter((p) => {
    const matchesCat =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSub = selectedSub === "all" || p.subCategory === selectedSub;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPromo = showPromosOnly ? p.promoPrice !== undefined : true;
    const currentPrice = p.promoPrice || p.price;
    const matchesPrice = currentPrice <= maxPriceFilter;
    const productHP = p.specs["Potencia"] || p.specs["Power"];
    const matchesHP =
      selectedHPs.length === 0 ||
      (productHP && selectedHPs.includes(productHP));

    return (
      matchesCat &&
      matchesSub &&
      matchesSearch &&
      matchesPromo &&
      matchesPrice &&
      matchesHP
    );
  });

  // --- ORDENAMIENTO ---
  if (sortOption === "price-asc")
    processedProducts.sort(
      (a, b) => (a.promoPrice || a.price) - (b.promoPrice || b.price),
    );
  else if (sortOption === "price-desc")
    processedProducts.sort(
      (a, b) => (b.promoPrice || b.price) - (a.promoPrice || a.price),
    );
  else if (sortOption === "name-asc")
    processedProducts.sort((a, b) => a.name.localeCompare(b.name));

  // --- ACTUALIZAR URL  ---
  const updateUrl = (cat: string, sub: string, promo: boolean) => {
    setIsLoading(true);
    const params = new URLSearchParams();
    if (cat !== "all") params.set("cat", cat);
    if (sub !== "all") params.set("sub", sub);
    if (promo) params.set("filtro", "ofertas");

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);

    // !!! IMPORTANTE: DISPARAR EVENTO PARA BREADCRUMBS !!!
    window.dispatchEvent(new Event("url-change"));

    setSelectedCategory(cat as Category | "all");
    setSelectedSub(sub as SubCategory | "all");
    setShowPromosOnly(promo);
    setSelectedHPs([]);
    setCurrentPage(1);

    // Si seleccionamos una categoría, la expandimos
    if (cat !== "all") {
      setExpandedCategories((prev) => ({ ...prev, [cat]: true }));
    }

    setTimeout(() => {
      scrollToResults();
      setIsLoading(false);
    }, 400);
  };

  // Toggle solo visual de subcategorías (Flecha)
  const toggleCategoryExpand = (cat: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Evita seleccionar la categoría al dar click en la flecha
    setExpandedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleHP = (hp: string) => {
    setSelectedHPs((prev) =>
      prev.includes(hp) ? prev.filter((h) => h !== hp) : [...prev, hp],
    );
    setCurrentPage(1);
  };

  // Paginación y Formato
  const totalPages = Math.ceil(processedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = processedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const PageButton = ({ num, active }: { num: number; active: boolean }) => (
    <button
      onClick={() => {
        setIsLoading(true);
        setCurrentPage(num);
        setTimeout(() => {
          scrollToResults();
          setIsLoading(false);
        }, 300);
      }}
      className={`size-10 rounded-xl font-black text-xs transition-all ${active ? "bg-[#2553A8] text-white shadow-lg scale-110" : "bg-white text-slate-400 hover:bg-blue-50 hover:text-[#2553A8] border border-slate-100"}`}
    >
      {num}
    </button>
  );

  const getCategoryCount = (cat: Category) =>
    PRODUCTS.filter((p) => p.category === cat).length;
  const getSubCategoryCount = (cat: Category, sub: SubCategory) =>
    PRODUCTS.filter((p) => p.category === cat && p.subCategory === sub).length;
  const getPromoCount = () =>
    PRODUCTS.filter((p) => p.promoPrice !== undefined).length;

  // PRODUCTOS MÁS BUSCADOS (Ejemplo estático de los primeros 5)
  const mostSearched = PRODUCTS.slice(0, 5);

  return (
    <div className="space-y-12 pb-20 pt-20">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* --- HEADER SEO --- */}
        <header className="border-b border-slate-100 pb-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-(--brand-yellow) font-black uppercase tracking-[0.2em] text-xs">
              Catálogo Técnico 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter leading-none">
              {searchQuery
                ? `Búsqueda: "${searchQuery}"`
                : showPromosOnly
                  ? "Ofertas Especiales"
                  : selectedCategory !== "all"
                    ? selectedCategory
                    : "Catálogo General"}
            </h1>
            <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
              Equipos industriales de alto rendimiento con garantía certificada
              y soporte técnico especializado en todo el Valle del Cauca.
            </p>
          </div>
        </header>

        {/* --- BARRA DE CONFIANZA --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { t: "Garantía Real", i: "verified_user" },
            { t: "Soporte Técnico", i: "engineering" },
            { t: "Envíos Nacionales", i: "local_shipping" },
            { t: "Repuestos Originales", i: "settings" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm justify-center md:justify-start"
            >
              <span className="material-symbols-outlined text-(--brand-yellow)">
                {item.i}
              </span>
              <span className="text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-wide">
                {item.t}
              </span>
            </div>
          ))}
        </div>

        {/* --- CONTENEDOR PRINCIPAL --- */}
        <div
          className="flex flex-col lg:flex-row gap-8 items-start"
          ref={resultsRef}
        >
          {/* --- SIDEBAR --- */}
          <aside className="w-full lg:w-64 shrink-0 space-y-4 select-none">
            <div className="flex items-center gap-2 px-1">
              <span className="material-symbols-outlined text-[#2553A8]">
                tune
              </span>
              <span className="font-black text-[#2553A8] uppercase tracking-widest text-sm">
                Filtros
              </span>
            </div>

            {/* 1. SECCIÓN CATEGORÍA */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() =>
                  setSectionsOpen((p) => ({ ...p, category: !p.category }))
                }
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-700 text-sm">
                  Categoría
                </span>
                <span
                  className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${sectionsOpen.category ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>

              {sectionsOpen.category && (
                <div className="px-4 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
                  {/* Ver Todo */}
                  <div
                    onClick={() => updateUrl("all", "all", false)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`size-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === "all" && !showPromosOnly ? "bg-[#2553A8] border-[#2553A8]" : "bg-white border-slate-300 group-hover:border-[#2553A8]"}`}
                    >
                      {selectedCategory === "all" && !showPromosOnly && (
                        <span className="material-symbols-outlined text-white text-sm font-black">
                          check
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${selectedCategory === "all" && !showPromosOnly ? "text-[#2553A8]" : "text-slate-600"}`}
                    >
                      Ver Todo ({PRODUCTS.length})
                    </span>
                  </div>

                  {/* Ofertas */}
                  <div
                    onClick={() => updateUrl("all", "all", true)}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`size-5 rounded border flex items-center justify-center transition-colors ${showPromosOnly ? "bg-red-500 border-red-500" : "bg-white border-slate-300 group-hover:border-red-500"}`}
                    >
                      {showPromosOnly && (
                        <span className="material-symbols-outlined text-white text-sm font-black">
                          check
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${showPromosOnly ? "text-red-500" : "text-slate-600"}`}
                    >
                      Ofertas
                    </span>
                    <span
                      className={`text-[8px] font-bold ${showPromosOnly ? "text-red-300" : "text-slate-400"}`}
                    >
                      ({getPromoCount()})
                    </span>
                  </div>

                  <div className="h-px bg-slate-100 my-2"></div>

                  {/* Categorías con Flecha Independiente */}
                  {Object.values(Category).map((cat) => {
                    const isSelected = selectedCategory === cat;
                    const isExpanded = expandedCategories[cat]; // Estado visual independiente
                    const hasSubs =
                      cat === Category.COMPRESORES || cat === Category.MOTORES;
                    const subs =
                      cat === Category.COMPRESORES
                        ? [
                            SubCategory.TORNILLO,
                            SubCategory.PISTON,
                            SubCategory.AIRESECO,
                          ]
                        : [
                            SubCategory.ELECTRICOS,
                            SubCategory.GASOLINA,
                            SubCategory.DIESEL,
                          ];

                    return (
                      <div key={cat} className="space-y-2">
                        <div className="flex items-center justify-between group">
                          {/* Clic en texto selecciona */}
                          <div
                            onClick={() => updateUrl(cat, "all", false)}
                            className="flex items-center gap-3 cursor-pointer grow"
                          >
                            <div
                              className={`size-5 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#2553A8] border-[#2553A8]" : "bg-white border-slate-300 group-hover:border-[#2553A8]"}`}
                            >
                              {isSelected && (
                                <span className="material-symbols-outlined text-white text-sm font-black">
                                  check
                                </span>
                              )}
                            </div>
                            <span
                              className={`text-xs font-medium ${isSelected ? "text-[#2553A8]" : "text-slate-600"}`}
                            >
                              {cat}
                            </span>
                            <span
                              className={`text-[8px] font-bold ${isSelected ? "text-[#2553A8]" : "text-slate-400"}`}
                            >
                              ({getCategoryCount(cat)})
                            </span>
                          </div>

                          {/* Clic en flecha SOLO expande/contrae (sin seleccionar) */}
                          {hasSubs && (
                            <button
                              onClick={(e) => toggleCategoryExpand(cat, e)}
                              className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-[#2553A8] transition-colors"
                            >
                              <span
                                className={`material-symbols-outlined text-lg transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                              >
                                expand_more
                              </span>
                            </button>
                          )}
                        </div>

                        {/* Subcategorías */}
                        {hasSubs && isExpanded && (
                          <div className="pl-8 flex flex-col gap-2 border-l-2 border-slate-100 ml-2.5 animate-in slide-in-from-left-2">
                            {subs.map((sub) => (
                              <div
                                key={sub}
                                onClick={() => updateUrl(cat, sub, false)}
                                className="flex items-center gap-2 cursor-pointer group/sub"
                              >
                                <div
                                  className={`size-3 rounded-full border ${selectedSub === sub ? "bg-(--brand-yellow) border-(--brand-yellow)" : "border-slate-300"}`}
                                ></div>
                                <span
                                  className={`text-[10px] ${selectedSub === sub ? "font-bold text-slate-800" : "text-slate-500 group-hover/sub:text-[#2553A8]"}`}
                                >
                                  {sub}
                                </span>
                                <span
                                  className={`text-[8px] font-bold ${selectedSub === sub ? "text-slate-800" : "text-slate-400"}`}
                                >
                                  ({getSubCategoryCount(cat, sub)})
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. SECCIÓN PRECIO */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() =>
                  setSectionsOpen((p) => ({ ...p, price: !p.price }))
                }
                className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-700 text-sm">Precio</span>
                <span
                  className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${sectionsOpen.price ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {sectionsOpen.price && (
                <div className="px-4 pb-6 space-y-4">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>$0</span>
                    <span>{formatCurrency(maxPriceFilter)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={globalMaxPrice}
                    step="100000"
                    value={maxPriceFilter}
                    onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2553A8]"
                  />
                  <p className="text-center text-xs font-black text-[#2553A8] bg-blue-50 py-1 rounded-lg">
                    Máx: {formatCurrency(maxPriceFilter)}
                  </p>
                </div>
              )}
            </div>

            {/* 3. SECCIÓN POTENCIA (Ordenada) */}
            {availableHPs.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4">
                <button
                  onClick={() =>
                    setSectionsOpen((p) => ({ ...p, power: !p.power }))
                  }
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-700 text-sm">
                    Potencia (HP)
                  </span>
                  <span
                    className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${sectionsOpen.power ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                {sectionsOpen.power && (
                  <div className="px-4 pb-4 space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {availableHPs.map((hp) => (
                      <div
                        key={hp}
                        onClick={() => toggleHP(hp)}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <div
                          className={`size-5 rounded border flex items-center justify-center transition-colors ${selectedHPs.includes(hp) ? "bg-[#2553A8] border-[#2553A8]" : "bg-white border-slate-300 group-hover:border-[#2553A8]"}`}
                        >
                          {selectedHPs.includes(hp) && (
                            <span className="material-symbols-outlined text-white text-sm font-black">
                              check
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium ${selectedHPs.includes(hp) ? "text-[#2553A8]" : "text-slate-600"}`}
                        >
                          {hp}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </aside>

          {/* --- PRODUCT GRID --- */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2">
                Mostrando {paginatedProducts.length} de{" "}
                {processedProducts.length} equipos
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase hidden md:block">
                    ORDENAR POR:
                  </span>
                  {/* SELECT CUSTOM DESIGN */}
                  <div className="relative group">
                    <select
                      id="sort"
                      name="sort"
                      value={sortOption}
                      onChange={(e) =>
                        setSortOption(e.target.value as SortOption)
                      }
                      className="appearance-none bg-white border border-slate-200 text-[10px] font-bold text-slate-700 rounded-lg py-2 pl-3 pr-8 focus:ring-1 focus:ring-[#2553A8] focus:border-[#2553A8] cursor-pointer outline-none transition-all uppercase tracking-wide min-w-35"
                    >
                      <option value="default">Relevancia</option>
                      <option value="price-asc">Precio: Menor a Mayor</option>
                      <option value="price-desc">Precio: Mayor a Menor</option>
                      <option value="name-asc">Nombre A-Z</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-[#2553A8]">
                      <span className="material-symbols-outlined text-lg">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vistas */}
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-white text-[#2553A8] shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      grid_view
                    </span>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-all ${viewMode === "list" ? "bg-white text-[#2553A8] shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      view_list
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Botón Limpiar */}
            {(selectedCategory !== "all" ||
              showPromosOnly ||
              maxPriceFilter < globalMaxPrice ||
              selectedHPs.length > 0) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  updateUrl("all", "all", false);
                  setMaxPriceFilter(globalMaxPrice);
                  setSelectedHPs([]);
                }}
                className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 bg-red-50 px-4 py-2 rounded-lg transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-sm">clear</span>{" "}
                Limpiar Filtros
              </button>
            )}
            {/* Grid */}
            {isLoading ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductSkeleton key={i} viewMode={viewMode} />
                ))}
              </div>
            ) : processedProducts.length > 0 ? (
              <>
                <div
                  className={`
                    ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-6"}
                    animate-in fade-in duration-500 slide-in-from-bottom-4
                `}
                >
                  {paginatedProducts.map((product) => {
                    const imgSrc =
                      typeof product.image === "string"
                        ? product.image
                        : product.image.src;
                    const hasPromo = product.promoPrice !== undefined;

                    // --- VISTA LISTA ---
                    if (viewMode === "list") {
                      return (
                        <div
                          key={product.id}
                          className="group bg-white rounded-4xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-60 relative"
                        >
                          <div className="absolute top-4 right-4 z-10 flex md:flex-row flex-col gap-1 items-end">
                            {product.brand && (
                              <div
                                className={`${badgeBase} bg-white/90 border border-slate-200 text-[#2553A8]`}
                              >
                                {product.brand}
                              </div>
                            )}

                            {product.warranty && (
                              <div
                                className={`${badgeBase} bg-green-50 border border-green-200 text-green-700`}
                              >
                                <span className="material-symbols-outlined text-[12px]">
                                  verified
                                </span>
                                {product.warranty}
                              </div>
                            )}
                          </div>
                          <div className="w-full md:w-56 bg-slate-50 p-4 shrink-0 relative flex items-center justify-center">
                            <img
                              src={imgSrc}
                              alt={product.name}
                              className="w-auto h-full max-h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {hasPromo && (
                              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                                Oferta
                              </div>
                            )}
                          </div>
                          <div className="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                                {product.category}
                              </span>
                              <h3 className="font-black text-[#2553A8] text-lg group-hover:text-(--brand-yellow) transition-colors uppercase leading-tight">
                                {product.name}
                              </h3>
                              <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                                {product.description}
                              </p>

                              {/* Specs Oscuros */}
                              <div className="flex flex-wrap gap-4 mt-3 border-t border-slate-50 pt-3">
                                {Object.entries(product.specs)
                                  .slice(0, 4)
                                  .map(([key, val]) => (
                                    <div key={key}>
                                      <span className="text-[7px] font-black text-slate-400 uppercase block">
                                        {key}
                                      </span>
                                      <span className="text-[9px] font-bold text-slate-800">
                                        {val}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div className="space-y-0.5">
                                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">
                                  PRECIO
                                </p>
                                {hasPromo ? (
                                  <div className="flex items-baseline gap-2">
                                    <span className="text-xs text-slate-400 line-through font-bold">
                                      {formatCurrency(product.price)}
                                    </span>
                                    <span className="text-xl font-black text-red-600">
                                      {formatCurrency(product.promoPrice!)}
                                    </span>
                                  </div>
                                ) : (
                                  <p className="text-xl font-black text-[#2553A8]">
                                    {formatCurrency(product.price)}
                                  </p>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <a
                                  href={`https://wa.me/573127536787?text=Info ${product.name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="size-10 rounded-xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-md active:scale-95"
                                  title="Cotizar en WhatsApp"
                                >
                                  <i className="fa-brands fa-whatsapp text-lg"></i>
                                </a>
                                <a
                                  href={`/producto/${product.id}`}
                                  className="bg-(--brand-yellow) px-4 py-2 rounded-xl shadow-md text-[#2553A8] flex items-center gap-2 group-hover:bg-[#d9a404] transition-colors"
                                  title="Ver mas detalles del producto"
                                >
                                  <span className="text-[8px] font-black uppercase tracking-widest">
                                    VER MAS
                                  </span>
                                  <span className="material-symbols-outlined text-xs font-black">
                                    arrow_forward
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    // --- VISTA CUADRÍCULA (LIMPIA) ---
                    return (
                      <div
                        key={product.id}
                        className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1 relative"
                      >
                        {hasPromo && (
                          <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                            Oferta
                          </div>
                        )}

                        <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
                          <img
                            src={imgSrc}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                          />
                          {/* --- ETIQUETA 1: MARCA  --- */}
                          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 items-start">
                            {/* Marca */}
                            {product.brand && (
                              <span
                                className={`${badgeBase} bg-white/90 border border-slate-200 text-[#2553A8]`}
                              >
                                {product.brand}
                              </span>
                            )}
                          </div>

                          {/* --- ETIQUETA 2: OFERTA  --- */}
                          {hasPromo && (
                            <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
                              Oferta
                            </div>
                          )}
                        </div>

                        <div className="p-6 grow flex flex-col justify-between space-y-3">
                          <div>
                            <h3 className="font-black text-[#2553A8] text-base group-hover:text-(--brand-yellow) transition-colors line-clamp-2 leading-tight uppercase mb-2">
                              <a href={`/producto/${product.id}`}>
                                {product.name}
                              </a>
                            </h3>
                            <p className="text-slate-400 text-[10px] line-clamp-2 font-medium leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-50 flex items-center justify-between mt-auto">
                            <div className="space-y-0.5">
                              <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">
                                PRECIO
                              </p>
                              {hasPromo ? (
                                <div className="flex flex-col leading-none">
                                  <span className="text-[10px] text-slate-400 line-through font-bold">
                                    {formatCurrency(product.price)}
                                  </span>
                                  <span className="text-lg font-black text-red-600">
                                    {formatCurrency(product.promoPrice!)}
                                  </span>
                                </div>
                              ) : (
                                <p className="text-lg font-black text-[#2553A8]">
                                  {formatCurrency(product.price)}
                                </p>
                              )}
                            </div>

                            <div className="flex gap-2">
                              <a
                                href={`https://wa.me/573127536787?text=Hola, me interesa: ${product.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="size-10 rounded-xl bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-sm transition-transform active:scale-95"
                                title="Cotizar en WhatsApp"
                              >
                                <i className="fa-brands fa-whatsapp text-lg"></i>
                              </a>
                              <a
                                href={`/producto/${product.id}`}
                                className="bg-(--brand-yellow) px-2 py-2 rounded-xl shadow-md text-[#2553A8] flex items-center gap-2 group-hover:bg-[#d9a404] transition-colors"
                                title="Ver mas detalles del producto"
                              >
                                <span className="text-[8px] font-black uppercase tracking-widest">
                                  VER MAS
                                </span>
                                <span className="material-symbols-outlined text-xs font-black">
                                  arrow_forward
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 py-12 border-t border-slate-100">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        setIsLoading(true);
                        setCurrentPage((prev) => prev - 1);
                        setTimeout(() => {
                          scrollToResults();
                          setIsLoading(false);
                        }, 300);
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-[#2553A8] hover:border-[#2553A8] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined font-black">
                        chevron_left
                      </span>
                    </button>
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <PageButton
                          key={i + 1}
                          num={i + 1}
                          active={currentPage === i + 1}
                        />
                      ))}
                    </div>
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setIsLoading(true);
                        setCurrentPage((prev) => prev + 1);
                        setTimeout(() => {
                          scrollToResults();
                          setIsLoading(false);
                        }, 300);
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-[#2553A8] hover:border-[#2553A8] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined font-black">
                        chevron_right
                      </span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-40 bg-white rounded-[4rem] border-2 border-dashed border-slate-200">
                <span className="material-symbols-outlined text-9xl text-slate-200">
                  search_off
                </span>
                <h3 className="text-xl font-black text-slate-400 uppercase mt-4 tracking-tighter">
                  Sin resultados técnicos
                </h3>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    updateUrl("all", "all", false);
                    setMaxPriceFilter(globalMaxPrice);
                    setSelectedHPs([]);
                  }}
                  className="mt-6 text-[#2553A8] font-black underline text-[10px] uppercase tracking-widest cursor-pointer"
                >
                  REINICIAR FILTROS
                </button>
              </div>
            )}
          </div>
        </div>
        {/* --- SECCIÓN MÁS BUSCADOS --- */}
        <section className="pt-16 border-t border-slate-100">
          <h2 className="text-2xl font-black text-[#2553A8] uppercase tracking-tight mb-8">
            Los más buscados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mostSearched.map((product) => {
              const imgSrc =
                typeof product.image === "string"
                  ? product.image
                  : product.image.src;
              const hasPromo = product.promoPrice !== undefined;
              return (
                <a
                  key={product.id}
                  href={`/producto/${product.id}`}
                  className="group bg-white border border-slate-100 p-4 rounded-2xl hover:shadow-lg transition-all text-center flex flex-col h-full relative overflow-hidden"
                >
                  {/* Etiqueta mini si tiene promo */}
                  {hasPromo && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                      Oferta
                    </div>
                  )}
                  <div className="h-24 flex items-center justify-center mb-3 relative">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="grow">
                    <h4 className="text-[10px] font-bold text-slate-700 uppercase line-clamp-2 group-hover:text-[#2553A8] transition-colors">
                      {product.name}
                    </h4>
                  </div>

                  {/* Lógica de Precios */}
                  <div className="mt-2 pt-2 border-t border-slate-50">
                    {hasPromo ? (
                      <div className="flex flex-col leading-none gap-0.5">
                        <span className="text-[8px] text-slate-400 line-through font-bold">
                          {formatCurrency(product.price)}
                        </span>
                        <span className="text-xs font-black text-red-600">
                          {formatCurrency(product.promoPrice!)}
                        </span>
                      </div>
                    ) : (
                      <p className="text-xs font-black text-[#2553A8]">
                        {formatCurrency(product.price)}
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
