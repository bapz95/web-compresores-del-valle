import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS, SERVICES, search_keywords } from "../data/constants";
import { type Product, Category, SubCategory } from "../data/types";
import mapBG from "../assets/branding/map.png";
import logo from "../assets/branding/logoCompresores1.png";
import { removeAccents, getLevenshteinDistance } from "../utils/searchUtils";

type SearchResult = {
  type: "product" | "category" | "subcategory";
  label: string;
  data: any;
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [combinedResults, setCombinedResults] = useState<SearchResult[]>([]);
  const [totalMatches, setTotalMatches] = useState(0);
  const [correction, setCorrection] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //  Detectar Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // --- EFECTO PARA ESCUCHAR EL SCROLL ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- EFECTO PARA DETECTAR LA RUTA ACTIVA EN ASTRO ---
  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname);
    updatePath();
    document.addEventListener("astro:page-load", updatePath);
    return () => document.removeEventListener("astro:page-load", updatePath);
  }, []);

  const isActive = (path: string, exact = false) => {
    if (exact) return currentPath === path;
    return currentPath.startsWith(path);
  };

  // --- RESTO DE EFECTOS ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- EFECTO DEL BUSCADOR  ---
  // --- EFECTO DEL BUSCADOR (OPTIMIZADO) ---
  useEffect(() => {
    if (searchQuery.length > 1) {
      const query = removeAccents(searchQuery);
      const results: SearchResult[] =[];

      // 1. Buscar Categorías
      Object.values(Category).forEach((cat) => {
        if (removeAccents(cat).includes(query)) {
          results.push({ type: "category", label: cat, data: cat });
        }
      });

      // 2. Buscar Subcategorías (Con relación padre-hijo blindada)
      Object.values(SubCategory).forEach((sub) => {
        if (removeAccents(sub).includes(query)) {
          // Definimos manualmente el papá para no fallar nunca
          let parentCat = "";
          if ([SubCategory.TORNILLO, SubCategory.PISTON, SubCategory.AIRESECO].includes(sub)) {
            parentCat = Category.COMPRESORES;
          } else if ([SubCategory.ELECTRICOS, SubCategory.GASOLINA, SubCategory.DIESEL].includes(sub)) {
            parentCat = Category.MOTORES;
          }
          
          results.push({ 
            type: "subcategory", 
            label: sub, 
            data: { sub: sub, cat: parentCat } 
          });
        }
      });

      // 3. Buscar Productos
      const allProductMatches = PRODUCTS.filter(
        (p) =>
          removeAccents(p.name).includes(query) ||
          removeAccents(p.brand).includes(query)

      );

      setTotalMatches(allProductMatches.length);

      allProductMatches.slice(0, 4).forEach((p) => {
        results.push({ type: "product", label: p.name, data: p });
      });

      setCombinedResults(results);

      // 4. Lógica "¿Quisiste decir...?"
      if (results.length === 0) {
        let bestCorrection: string | null = null;
        query.split(" ").forEach((word) => {
          if (word.length < 4) return;
          search_keywords.forEach((key) => {
            const distance = getLevenshteinDistance(word, removeAccents(key));
            if (distance > 0 && distance <= 2) bestCorrection = key;
          });
        });
        setCorrection(bestCorrection);
      } else {
        setCorrection(null);
      }
      setShowSuggestions(true);
    } else {
      setCombinedResults([]);
      setTotalMatches(0);
      setCorrection(null);
      setShowSuggestions(false);
    }
  },[searchQuery]);

  // --- MANEJADOR DE CLIC EN RESULTADOS ---
  const handleSearchSubmit = (e: React.FormEvent, item?: SearchResult) => {
    e.preventDefault();
    if (item) {
      if (item.type === "product") {
        const p = item.data as Product;
        window.location.href = `/productos?cat=${encodeURIComponent(p.category)}${p.subCategory ? `&sub=${encodeURIComponent(p.subCategory)}` : ""}&q=${encodeURIComponent(p.name)}`;
      }
      if (item.type === "category") {
        window.location.href = `/productos?cat=${encodeURIComponent(item.data)}`;
      }
      if (item.type === "subcategory") {
        window.location.href = `/productos?cat=${encodeURIComponent(item.data.cat)}&sub=${encodeURIComponent(item.data.sub)}`;
      }
    } else if (searchQuery.trim()) {
      window.location.href = `/productos?q=${encodeURIComponent(searchQuery.trim())}`;
    }
    setSearchQuery("");
    setShowSuggestions(false);
    setIsOpen(false);
    setActiveMenu(null);
  };

  const menuStructure = {
    productos: [
      {
        name: Category.COMPRESORES,
        subs: [SubCategory.TORNILLO, SubCategory.PISTON, SubCategory.AIRESECO],
      },
      { name: Category.CABEZOTES },
      {
        name: Category.MOTORES,
        subs: [
          SubCategory.ELECTRICOS,
          SubCategory.GASOLINA,
          SubCategory.DIESEL,
        ],
      },
      { name: Category.TANQUES_ESPUMADORAS },
      { name: Category.REPUESTOS_ACCESORIOS },
      { name: Category.PISTOLAS_AEROGRAFOS },
      { name: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA },
    ],
    servicios: SERVICES.map((s) => ({ id: s.id, name: s.title })),
  };

  const navigateToCategory = (cat: string, sub?: string) => {
    let url = `/productos?cat=${encodeURIComponent(cat)}`;
    if (sub) url += `&sub=${encodeURIComponent(sub)}`;
    window.location.href = url;
    setActiveMenu(null);
    setIsOpen(false);
  };

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    serviceId: string,
  ) => {
    if (window.location.pathname === "/servicios") {
      e.preventDefault();
      const element = document.getElementById(serviceId);
      if (element) {
        const offset = 200;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState({}, "", `/servicios?cat=${serviceId}`);
      }
      setActiveMenu(null);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300 border-b border-gray-200 bg-[#2553A8]">
      {/* Marca de agua */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-70">
        <img
          src={mapBG.src}
          alt="Mapa de fondo"
          className="w-[150%] md:w-[75%] h-full"
        />
      </div>

      <div className="flex flex-col relative z-10">
        {/* BARRA SUPERIOR*/}
        {/* En móvil  (max-h-20), en PC (md:max-h-0) */}
        <div
          className={`flex items-center gap-4 px-4 max-w-7xl mx-auto w-full transition-all duration-500 ${
            isScrolled
              ? "py-2 max-h-20 md:max-h-0 md:py-0 md:opacity-0 md:border-transparent overflow-hidden pointer-events-none"
              : "py-4 md:py-6 max-h-[800px] opacity-100 border-b border-white/10 overflow-visible"
          }`}
        >
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={logo.src}
              alt="Compresores del Valle"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "w-12 h-12" : "w-20 h-20 md:w-24 md:h-24"
              }`}
            />
          </a>

          {/* Buscador */}
          <div
            className="flex-1 relative group max-w-2xl mx-auto"
            ref={searchRef}
          >
            <form
              onSubmit={(e) => handleSearchSubmit(e)}
              className="relative z-20"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400">
                  search
                </span>
              </div>

              <input
                id="search-input"
                name="search"
                type="text"
                placeholder="Buscar productos, modelos, SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-10 py-3 bg-white/80 border border-gray-300 rounded-lg leading-5 text-[#2553A8] placeholder-gray-400/50 focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:ring-opacity-50 sm:text-sm transition-all duration-300 shadow-sm opacity-95 focus:opacity-100"
              />

              {/* LA "X" PARA BORRAR */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowSuggestions(false);
                  }}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">
                    close
                  </span>
                </button>
              )}
            </form>

            {/* Sugerencias */}
            {showSuggestions && searchQuery.length > 1 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-100 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Resultados Sugeridos
                  </span>
                  <span className="text-[10px] font-black text-[#2553A8] bg-blue-50 px-2 py-0.5 rounded-full">
                    {totalMatches} COINCIDENCIAS
                  </span>
                </div>
                {correction && (
                  <div className="p-3 bg-yellow-50 border-b border-yellow-100 text-[10px] font-bold text-yellow-700 uppercase">
                    ¿Quisiste decir:{" "}
                    <button
                      onClick={() => setSearchQuery(correction)}
                      className="underline text-[#2553A8]"
                    >
                      "{correction}"
                    </button>
                    ?
                  </div>
                )}
                <div className="max-h-80 overflow-y-auto">
                  {combinedResults.length > 0 ? (
                    combinedResults.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => handleSearchSubmit(e, item)}
                        className="w-full flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-none group"
                      >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden shadow-sm">
                          {item.type === "product" ? (
                            <img
                              src={
                                typeof item.data.image === "string"
                                  ? item.data.image
                                  : item.data.image?.src
                              }
                              alt=""
                              className="w-8 h-8 object-contain"
                            />
                          ) : (
                            <span className="material-symbols-outlined text-slate-400 text-lg">
                              {item.type === "category"
                                ? "category"
                                : "settings_input_component"}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col overflow-hidden">
                          <span
                            className={`text-[8px] font-black w-fit px-1.5 py-0.5 rounded uppercase mb-0.5 tracking-wide
                                            ${item.type === "category" ? "bg-[#2553A8] text-white" : item.type === "subcategory" ? "bg-[#FFD600] text-[#2553A8]" : "bg-slate-100 text-slate-500"}`}
                          >
                            {item.type === "category"
                              ? "Categoría"
                              : item.type === "subcategory"
                                ? "Subcategoría"
                                : "Producto"}
                          </span>
                          <span className="text-sm font-bold text-slate-800 truncate group-hover:text-[#2553A8] transition-colors">
                            {item.label}
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-slate-300 text-3xl">
                        search_off
                      </span>
                      <span className="text-xs text-slate-500 font-bold uppercase">
                        No encontramos coincidencias
                      </span>
                    </div>
                  )}
                </div>
                {/* --- BOTÓN VER TODOS LOS RESULTADOS --- */}
                {totalMatches > 0 && (
                  <div className="border-t border-slate-100 p-2 bg-slate-50 rounded-b-xl">
                    <button
                      type="button"
                      onClick={(e) => handleSearchSubmit(e)}
                      className="w-full bg-blue-100/50 hover:bg-[#2553A8] text-[#2553A8] hover:text-white transition-colors py-3 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      Ver todos los productos ({totalMatches})
                      <span className="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors md:hidden"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* NAVEGACIÓN DESKTOP CON ESTADOS ACTIVOS */}
        <div
          className={`hidden md:flex justify-center bg-black/10 backdrop-blur-sm transition-all duration-500 ${isScrolled ? "shadow-md border-transparent" : "border-t border-white/10"}`}
        >
          <nav className="flex items-center gap-8 h-12">
            {/* Inicio */}
            <a
              href="/"
              className={`font-bold text-sm uppercase transition-colors h-full flex items-center 
                   ${isActive("/", true) ? "text-[#FFD600] border-b-2 border-[#FFD600]" : "text-white/90 hover:text-[#FFD600]"}`}
            >
              Inicio
            </a>

            {/* Dropdown Productos */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveMenu("productos")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href="/productos"
                className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors py-2 cursor-pointer h-full
                       ${isActive("/productos") || activeMenu === "productos" ? "text-[#FFD600]" : "text-white/90 hover:text-[#FFD600]"}
                       ${isActive("/productos") ? "border-b-2 border-[#FFD600]" : ""}`}
              >
                Productos{" "}
                <span className="material-symbols-outlined text-lg">
                  keyboard_arrow_down
                </span>
              </a>

              {activeMenu === "productos" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-200 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 transform"></div>
                  <div className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-3 gap-x-8 gap-y-6 border-t-4 border-[#FFD600]">
                    {menuStructure.productos.map((cat, i) => (
                      <div key={i} className="flex flex-col">
                        <button
                          onClick={() => navigateToCategory(cat.name)}
                          className="group/btn text-left font-black text-[#2553A8] mb-2 text-xs uppercase flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-sm text-[#FFD600] transition-transform group-hover/btn:translate-x-1">
                            arrow_forward
                          </span>
                          <span className="group-hover/btn:underline">
                            {cat.name}
                          </span>
                        </button>

                        {cat.subs && (
                          <div className="flex flex-col pl-5 border-l border-slate-100 ml-1.5 space-y-1">
                            {cat.subs.map((sub) => (
                              <button
                                key={sub}
                                onClick={() =>
                                  navigateToCategory(cat.name, sub)
                                }
                                className="text-left text-[11px] font-bold text-gray-500 hover:text-[#2553A8] hover:translate-x-1 transition-all"
                              >
                                {sub}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Servicios */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveMenu("servicios")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <a
                href="/servicios"
                className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors py-2 cursor-pointer h-full
                       ${isActive("/servicios") || activeMenu === "servicios" ? "text-[#FFD600]" : "text-white/90 hover:text-[#FFD600]"}
                       ${isActive("/servicios") ? "border-b-2 border-[#FFD600]" : ""}`}
              >
                Servicios{" "}
                <span className="material-symbols-outlined text-lg">
                  keyboard_arrow_down
                </span>
              </a>

              {activeMenu === "servicios" && (
                <div className="absolute top-full left-0 pt-0 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-3 border-t-4 border-[#FFD600] mt-2">
                    {menuStructure.servicios.map((ser, i) => (
                      <a
                        key={i}
                        href={`/servicios?cat=${ser.id}`}
                        onClick={(e) => handleServiceClick(e, ser.id)}
                        className="group/serv flex items-center gap-2 text-xs font-black text-[#2553A8] uppercase transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm text-[#FFD600] transition-transform group-hover/serv:translate-x-1">
                          arrow_forward
                        </span>
                        <span className="group-hover/serv:underline">
                          {ser.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/nosotros"
              className={`font-bold text-sm uppercase transition-colors h-full flex items-center
                   ${isActive("/nosotros") ? "text-[#FFD600] border-b-2 border-[#FFD600]" : "text-white/90 hover:text-[#FFD600]"}`}
            >
              Nosotros
            </a>

            <a
              href="/contacto"
              className={`font-bold text-sm uppercase transition-colors h-full flex items-center
                   ${isActive("/contacto") ? "text-[#FFD600] border-b-2 border-[#FFD600]" : "text-white/90 hover:text-[#FFD600]"}`}
            >
              Contacto
            </a>
          </nav>
        </div>

        {/* Menú Móvil */}
        <div
          className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[90vh]" : "max-h-0"}`}
        >
          <nav className="flex flex-col p-4 gap-2">
            <a
              href="/"
              className="p-3 text-[#2553A8] font-black uppercase text-sm bg-blue-50 rounded-lg"
            >
              Inicio
            </a>
            <div>
              <button
                onClick={() =>
                  setExpandedMobile(expandedMobile === "prod" ? null : "prod")
                }
                className="w-full flex justify-between items-center p-3 text-gray-700 font-bold uppercase text-sm rounded-lg hover:bg-gray-50"
              >
                Productos{" "}
                <span
                  className={`material-symbols-outlined transition-transform ${expandedMobile === "prod" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {expandedMobile === "prod" && (
                <div className="pl-4 pb-2 space-y-2 bg-gray-50 rounded-b-lg">
                  <a
                    href="/productos"
                    className="block py-2 text-xs font-black text-[#2553A8] uppercase"
                  >
                    Ver todo
                  </a>
                  {menuStructure.productos.map((cat, i) => (
                    <div key={i}>
                      <button
                        onClick={() => navigateToCategory(cat.name)}
                        className="block w-full text-left py-1 text-xs font-bold text-gray-600"
                      >
                        {cat.name}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() =>
                  setExpandedMobile(expandedMobile === "serv" ? null : "serv")
                }
                className="w-full flex justify-between items-center p-3 text-gray-700 font-bold uppercase text-sm rounded-lg hover:bg-gray-50"
              >
                Servicios{" "}
                <span
                  className={`material-symbols-outlined transition-transform ${expandedMobile === "serv" ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {expandedMobile === "serv" && (
                <div className="pl-4 pb-2 space-y-2 bg-gray-50 rounded-b-lg">
                  {menuStructure.servicios.map((ser, i) => (
                    <a
                      key={i}
                      href={`/servicios?cat=${ser.id}`}
                      onClick={(e) => handleServiceClick(e, ser.id)}
                      className="block py-1 text-xs font-bold text-gray-600"
                    >
                      {ser.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/nosotros"
              className="p-3 text-gray-700 font-bold uppercase text-sm rounded-lg hover:bg-gray-50"
            >
              Nosotros
            </a>
            <a
              href="/contacto"
              className="p-3 text-gray-700 font-bold uppercase text-sm rounded-lg hover:bg-gray-50"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
