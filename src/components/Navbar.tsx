import React, { useState, useEffect, useRef } from "react";
import {
  SITE_MENU,
} from "../data/shared/navegacion";
import { search_keywords } from "../data/search/search";
import { Category, SubCategory } from "../data/types";
import type { LightProduct } from "../data/products/types";
import mapBG from "../assets/branding/map.webp";
import logo from "../assets/branding/logoCompresores1.webp";
import { removeAccents, getLevenshteinDistance } from "../utils/searchUtils";
import {
  ChevronDown,
  ArrowRight,
  SearchX,
  Folder,
  FolderTree,
  Search,
  X,
  Menu,
} from "lucide-react";

interface NavbarProps {
  searchData: LightProduct[];
}

type SearchResult = {
  type: "product" | "category" | "subcategory";
  label: string;
  data: any;
};

// --- COMPONENTE PARA RESALTAR TEXTO ---
const HighlightText = ({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) => {
  if (!highlight.trim()) return <>{text}</>;
  const words = removeAccents(highlight)
    .split(" ")
    .filter((w) => w.length > 0);

  // Expresión regular para separar el texto por las palabras buscadas
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = words.includes(removeAccents(part));
        return isMatch ? (
          <strong key={i} className="text-[#2553A8] font-black">
            {part}
          </strong>
        ) : (
          <span key={i} className="text-slate-600">
            {part}
          </span>
        );
      })}
    </>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ searchData }) => {
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

  // --- EFECTO PARA DETECTAR LA RUTA ACTIVA ---
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
  useEffect(() => {
    if (searchQuery.length > 1) {
      const query = removeAccents(searchQuery);
      const results: SearchResult[] = [];

      // 1. Buscar Categorías
      Object.values(Category).forEach((cat) => {
        if (removeAccents(cat).includes(query)) {
          results.push({ type: "category", label: cat, data: cat });
        }
      });

      // 2. Buscar Subcategorías
      Object.values(SubCategory).forEach((sub) => {
        if (removeAccents(sub).includes(query)) {
          // Buscamos el primer producto que pertenezca a esta subcategoría para saber su categoría padre
          const referenceProduct = searchData.find((p) => p.subCategory === sub);

          // Si encontramos un producto, usamos su categoría. Si no, queda vacío.
          const parentCat = referenceProduct ? referenceProduct.category : "";

          results.push({
            type: "subcategory",
            label: sub,
            data: { sub: sub, cat: parentCat },
          });
        }
      });

      // 3. Buscar Productos
      const queryWords = query.split(" ").filter((w) => w.length > 0);
      const allProductMatches = searchData.filter((p) => {
        const searchableText = removeAccents(`${p.name} ${p.brand}`);
        return queryWords.every((word) => searchableText.includes(word));
      });

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
  }, [searchQuery]);

  // --- MANEJADOR DE CLIC EN RESULTADOS ---
  const handleSearchSubmit = (e: React.FormEvent, item?: SearchResult) => {
    e.preventDefault();
    if (item) {
      if (item.type === "product") {
        const p = item.data as LightProduct;
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
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70 bg-no-repeat bg-center [background-size:100%_100%] md:[background-size:75%_100%]"
        style={{ backgroundImage: `url(${mapBG.src})` }}
      />

      <div className="flex flex-col relative z-10">
        {/* BARRA SUPERIOR*/}
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
                <Search className="text-gray-400" />
              </div>

              <input
                id="search-input"
                aria-label="Buscar productos y repuestos"
                name="search"
                type="text"
                placeholder="Buscar productos ..."
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
                  <X className="size-5" />
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
                          ) : item.type === "category" ? (
                            <Folder className="size-5 text-slate-400" />
                          ) : (
                            <FolderTree className="size-5 text-slate-400" />
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
                          <span className="text-sm truncate group-hover:text-[#2553A8] transition-colors">
                            <HighlightText
                              text={item.label}
                              highlight={searchQuery}
                            />
                          </span>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center gap-2">
                      <SearchX className="size-8 text-slate-300" />
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
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors md:hidden"
          >
            {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
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
                Productos <ChevronDown className="size-5" />
              </a>

              {activeMenu === "productos" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-0 w-200 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="absolute -top-1.25 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 transform"></div>
                  <div className="bg-white rounded-xl shadow-2xl p-8 grid grid-cols-3 gap-x-8 gap-y-6 border-t-4 border-[#FFD600]">
                    {SITE_MENU.productos.map((cat, i) => (
                      <div key={i} className="flex flex-col">
                        <button
                          onClick={() => navigateToCategory(cat.name)}
                          className="group/btn text-left font-black text-[#2553A8] mb-2 text-xs uppercase flex items-center gap-1"
                        >
                          <ArrowRight className="size-4 text-[#FFD600] transition-transform group-hover/btn:translate-x-1 shrink-0" />
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
                Servicios <ChevronDown className="size-5" />
              </a>

              {activeMenu === "servicios" && (
                <div className="absolute top-full left-0 pt-0 w-72 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col gap-3 border-t-4 border-[#FFD600] mt-2">
                    {SITE_MENU.servicios.map((ser, i) => (
                      <a
                        key={i}
                        href={`/servicios?cat=${ser.id}`}
                        onClick={(e) => handleServiceClick(e, ser.id)}
                        className="group/serv flex items-center gap-2 text-xs font-black text-[#2553A8] uppercase transition-colors"
                      >
                        <ArrowRight className="size-4 text-[#FFD600] transition-transform group-hover/serv:translate-x-1 shrink-0" />
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
                <ChevronDown
                  className={`size-5 transition-transform ${expandedMobile === "prod" ? "rotate-180" : ""}`}
                />
              </button>
              {expandedMobile === "prod" && (
                <div className="pl-4 pb-2 space-y-2 bg-gray-50 rounded-b-lg">
                  <a
                    href="/productos"
                    className="block py-2 text-xs font-black text-[#2553A8] uppercase"
                  >
                    Ver todo
                  </a>
                  {SITE_MENU.productos.map((cat, i) => (
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
                <ChevronDown
                  className={`size-5 transition-transform ${expandedMobile === "serv" ? "rotate-180" : ""}`}
                />
              </button>
              {expandedMobile === "serv" && (
                <div className="pl-4 pb-2 space-y-2 bg-gray-50 rounded-b-lg">
                  {SITE_MENU.servicios.map((ser, i) => (
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
