import React, { useRef, useState } from "react";
import { PRODUCTS } from "../data/products/products";
import { search_keywords } from "../data/search/search";
import { formatCurrency } from "../utils/formatters";
import { getLevenshteinDistance, removeAccents } from "../utils/searchUtils";
import { useProductFilters, type SortOption } from "../hooks/useProductFilters";
import { ProductCard } from "./productCard";
import { ProductSidebar } from "./productSidebar";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SearchX,
  Settings,
  ShieldCheck,
  Wrench,
  X,
  Funnel,
} from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineViewList } from "react-icons/md";

const ITEMS_PER_PAGE = 12;
const currentYear = new Date().getFullYear();

// --- COMPONENTE SKELETON  ---
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
  const resultsRef = useRef<HTMLDivElement>(null);
  
  // ESTADO PARA EL MENÚ MÓVIL
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // 1.  (Hook)
  const filters = useProductFilters(ITEMS_PER_PAGE);

  // Scroll suave al cambiar de página o filtro
  const scrollToResults = () => {
    if (resultsRef.current) {
      const y =
        resultsRef.current.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filters.paginatedProducts.map((prod, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://tusitio.com/producto/${prod.id}`,
      name: prod.name,
      image: typeof prod.image === "string" ? prod.image : prod.image.src,
    })),
  };
  
  // Wrapper para la función updateUrl que incluye el callback de scroll
  const handleUpdateUrl = (cat: string, sub: string, promo: boolean) => {
    filters.updateUrl(cat, sub, promo, scrollToResults);
  };

  const mostSearched = PRODUCTS.slice(0, 5);

  const PageButton = ({ num, active }: { num: number; active: boolean }) => (
    <button
      onClick={() => {
        filters.setIsLoading(true);
        filters.setCurrentPage(num);
        setTimeout(() => {
          scrollToResults();
          filters.setIsLoading(false);
        }, 300);
      }}
      className={`size-10 rounded-xl font-black text-xs transition-all ${active ? "bg-[#2553A8] text-white shadow-lg scale-110" : "bg-white text-slate-500 hover:bg-blue-50 hover:text-[#2553A8] border border-slate-100"}`}
    >
      {num}
    </button>
  );

  return (
    <div className="space-y-12 pb-20 pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* --- HEADER SEO --- */}
        <header className="border-b border-slate-100 pb-6">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.2em] text-xs">
              Catálogo Técnico {currentYear}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter leading-none">
              {filters.searchQuery
                ? `Búsqueda: "${filters.searchQuery}"`
                : filters.showPromosOnly
                  ? "Ofertas Especiales"
                  : filters.selectedCategory !== "all"
                    ? filters.selectedCategory
                    : "Catálogo General"}
            </h1>
            <p className="text-slate-500 text-sm font-medium max-w-2xl leading-relaxed">
              Equipos industriales de alto rendimiento con garantía certificada
              y soporte técnico especializado en todo el Valle del Cauca y
              Colombia.
            </p>
          </div>
        </header>

        {/* --- BARRA DE CONFIANZA --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { t: "Garantía Real", i: ShieldCheck },
            { t: "Soporte Técnico", i: Wrench },
            { t: "Envíos Nacionales", i: FaShippingFast },
            { t: "Repuestos Originales", i: Settings },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm justify-center md:justify-start"
            >
              <item.i className="size-5 text-(--brand-yellow)" />
              <span className="text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-wide">
                {item.t}
              </span>
            </div>
          ))}
        </div>

        {/* --- CONTENEDOR PRINCIPAL (Filtros + Resultados) --- */}
        <div
          className="flex flex-col lg:flex-row gap-8 items-start relative"
          ref={resultsRef}
        >
          {/* FONDO OSCURO PARA MÓVILES (Se activa al abrir los filtros) */}
          {isMobileFiltersOpen && (
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
          )}

          {/* 2. SIDEBAR (Cajón lateral en móvil, normal en PC) */}
          <div className={`fixed inset-y-0 left-0 z-[110] w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64 lg:bg-transparent lg:shadow-none lg:z-0 shrink-0 h-full overflow-y-auto custom-scrollbar lg:h-auto lg:overflow-visible p-6 lg:p-0 ${
            isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
            {/* Header del menú en móviles con botón cerrar */}
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <span className="font-black text-[#2553A8] uppercase tracking-widest text-sm">Filtros</span>
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 text-slate-400 hover:text-red-500 bg-slate-50 hover:bg-red-50 rounded-full transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            <ProductSidebar {...filters} onUpdateUrl={handleUpdateUrl} />
          </div>

          {/* --- PRODUCT GRID --- */}
          <div className="flex-1 w-full min-w-0 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
              
              {/* BOTÓN FILTROS (Solo visible en móviles/tablets) */}
              <button
                onClick={() => setIsMobileFiltersOpen(true)}
                className="w-full sm:w-auto lg:hidden flex items-center justify-center gap-2 bg-blue-50 text-[#2553A8] hover:bg-[#2553A8] hover:text-white px-4 py-3 sm:py-2 rounded-xl font-black text-[10px] uppercase tracking-widest border border-blue-100 transition-all shadow-sm"
              >
                <Funnel className="size-4" />
                Filtros Avanzados
              </button>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest pl-2 hidden sm:block">
                Mostrando {filters.paginatedProducts.length} de{" "}
                {filters.processedProducts.length} equipos
              </p>

              <div className="flex w-full sm:w-auto items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-slate-500 uppercase hidden md:block">
                    ORDENAR POR:
                  </span>
                  <div className="relative group">
                    <select
                      id="ordenar-productos"
                      aria-label="ordenar productos"
                      value={filters.sortOption}
                      onChange={(e) =>
                        filters.setSortOption(e.target.value as SortOption)
                      }
                      className="appearance-none bg-white border border-slate-200 text-[10px] font-bold text-slate-700 rounded-lg py-2 pl-3 pr-8 focus:ring-1 focus:ring-[#2553A8] focus:border-[#2553A8] cursor-pointer outline-none transition-all uppercase tracking-wide min-w-35"
                    >
                      <option value="default">Relevancia</option>
                      <option value="price-asc">Precio: Menor a Mayor</option>
                      <option value="price-desc">Precio: Mayor a Menor</option>
                      <option value="name-asc">Nombre A-Z</option>
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 group-hover:text-[#2553A8]">
                      <ChevronDown className="size-5" />
                    </div>
                  </div>
                </div>

                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
                  <button
                    aria-label="Vista en cuadrícula"
                    onClick={() => filters.setViewMode("grid")}
                    className={`p-1.5 rounded-lg transition-all ${filters.viewMode === "grid" ? "bg-white text-[#2553A8] shadow-sm" : "text-slate-500 hover:text-slate-600"}`}
                  >
                    <LayoutGrid className="size-5" />
                  </button>
                  <button
                    aria-label="Vista en lista"
                    onClick={() => filters.setViewMode("list")}
                    className={`p-1.5 rounded-lg transition-all ${filters.viewMode === "list" ? "bg-white text-[#2553A8] shadow-sm" : "text-slate-500 hover:text-slate-600"}`}
                  >
                    <MdOutlineViewList className="size-7" />
                  </button>
                </div>
              </div>
            </div>

            {/* Botón Limpiar Global */}
            {(filters.selectedCategory !== "all" ||
              filters.showPromosOnly ||
              filters.maxPriceFilter < filters.globalMaxPrice ||
              filters.selectedHPs.length > 0) && (
              <button
                aria-label="Limpiar todos los filtros"
                onClick={() => {
                  filters.setSearchQuery("");
                  handleUpdateUrl("all", "all", false);
                  filters.setMaxPriceFilter(filters.globalMaxPrice);
                  filters.setSelectedHPs([]);
                  filters.setCurrentPage(1);
                }}
                className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 bg-red-50 px-4 py-2 rounded-lg transition-colors shrink-0"
              >
                <X className="size-4" /> Limpiar Filtros
              </button>
            )}

            {/* 3. TARJETAS (Grid de Resultados) */}
            {filters.isLoading ? (
              <div
                className={
                  filters.viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductSkeleton key={i} viewMode={filters.viewMode} />
                ))}
              </div>
            ) : filters.processedProducts.length > 0 ? (
              <>
                <div
                  className={`animate-in fade-in duration-500 slide-in-from-bottom-4 ${filters.viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-6"}`}
                >
                  {filters.paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      viewMode={filters.viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {filters.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 py-12 border-t border-slate-100">
                    <button
                      aria-label="Página anterior"
                      disabled={filters.currentPage === 1}
                      onClick={() => {
                        filters.setIsLoading(true);
                        filters.setCurrentPage((prev) => prev - 1);
                        setTimeout(() => {
                          scrollToResults();
                          filters.setIsLoading(false);
                        }, 300);
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-100 text-slate-500 hover:text-[#2553A8] hover:border-[#2553A8] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <div className="flex flex-wrap justify-center gap-2 max-w-full">
                      {Array.from({ length: filters.totalPages }, (_, i) => (
                        <PageButton
                          key={i + 1}
                          num={i + 1}
                          active={filters.currentPage === i + 1}
                        />
                      ))}
                    </div>
                    <button
                      aria-label="Página siguiente"
                      disabled={filters.currentPage === filters.totalPages}
                      onClick={() => {
                        filters.setIsLoading(true);
                        filters.setCurrentPage((prev) => prev + 1);
                        setTimeout(() => {
                          scrollToResults();
                          filters.setIsLoading(false);
                        }, 300);
                      }}
                      className="p-3 rounded-xl bg-white border border-slate-100 text-slate-500 hover:text-[#2553A8] hover:border-[#2553A8] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-40 bg-white rounded-[4rem] border-2 border-dashed border-slate-200 flex flex-col items-center">
                <SearchX className="size-32 text-slate-200" />
                <h2 className="text-xl font-black text-slate-500 uppercase mt-4 tracking-tighter">
                  Sin resultados técnicos
                </h2>

                {filters.searchQuery.length > 2 &&
                  (() => {
                    const query = removeAccents(filters.searchQuery);
                    let bestCorrection: string | null = null;

                    search_keywords.forEach((key) => {
                      const distance = getLevenshteinDistance(
                        query,
                        removeAccents(key),
                      );
                      if (distance > 0 && distance <= 2) bestCorrection = key;
                    });

                    if (bestCorrection) {
                      return (
                        <div className="mt-6 bg-yellow-50 text-[#2553A8] px-6 py-3 rounded-2xl border border-yellow-200 font-bold text-sm animate-in zoom-in duration-300">
                          ¿Quisiste decir:{" "}
                          <button
                            aria-label="Seleccionar corrección de búsqueda"
                            onClick={() => {
                              filters.setSearchQuery(bestCorrection!);
                              filters.setCurrentPage(1);
                            }}
                            className="underline text-red-600 font-black hover:text-red-700"
                          >
                            "{bestCorrection}"
                          </button>
                          ?
                        </div>
                      );
                    }
                    return null;
                  })()}

                <button
                  aria-label="Limpiar todos los filtros"
                  onClick={() => {
                    filters.setSearchQuery("");
                    handleUpdateUrl("all", "all", false);
                    filters.setMaxPriceFilter(filters.globalMaxPrice);
                    filters.setSelectedHPs([]);
                  }}
                  className="mt-8 text-[#2553A8] font-black underline text-[10px] uppercase tracking-widest cursor-pointer"
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
              const hoverImgSrc =
                product.images && product.images.length > 1
                  ? typeof product.images[1] === "string"
                    ? product.images[1]
                    : product.images[1].src
                  : null;
              const hasPromo = product.promoPrice !== undefined;
              return (
                <a
                  key={product.id}
                  href={`/producto/${product.id}`}
                  className="group bg-white border border-slate-100 p-4 rounded-2xl hover:shadow-lg transition-all text-center flex flex-col h-full relative overflow-hidden"
                >
                  {hasPromo && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[7px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-20">
                      Oferta
                    </div>
                  )}

                  <div className="h-24 flex items-center justify-center mb-3 relative overflow-hidden">
                    {/* IMAGEN 1 */}
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className={`max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-700 ease-in-out ${hoverImgSrc ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
                      loading="lazy"
                    />

                    {/* IMAGEN 2  */}
                    {hoverImgSrc && (
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center pointer-events-none mix-blend-multiply">
                        <img
                          src={hoverImgSrc}
                          alt={`${product.name} vista 2`}
                          className="max-h-full max-w-full object-contain mix-blend-multiply scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:duration-[2000ms]"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grow">
                    <h3 className="text-[10px] font-bold text-slate-700 uppercase line-clamp-2 group-hover:text-[#2553A8] transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-50">
                    {hasPromo ? (
                      <div className="flex flex-col leading-none gap-0.5">
                        <span className="text-[8px] text-slate-500 line-through font-bold">
                          {formatCurrency(product.price!)}
                        </span>
                        <span className="text-xs font-black text-red-600">
                          {formatCurrency(product.promoPrice!)}
                        </span>
                      </div>
                    ) : (
                      <p className="text-xs font-black text-[#2553A8]">
                        {formatCurrency(product.price!)}
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