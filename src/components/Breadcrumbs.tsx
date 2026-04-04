import React, { useState, useEffect } from "react";
import { PRODUCTS } from "../data/constants";

interface Crumb {
  label: string;
  path: string | null;
  icon?: string;
}

export const Breadcrumbs: React.FC = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Crumb[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const calculateBreadcrumbs = () => {
    const pathname = window.location.pathname;
    const search = window.location.search;

    // Si estamos en home y no hay búsqueda, ocultar
    if (pathname === "/" && !search) {
      setIsVisible(false);
      return;
    }

    const queryParams = new URLSearchParams(search);
    const catParam = queryParams.get("cat");
    const subParam = queryParams.get("sub");
    const qParam = queryParams.get("q");

    // Limpiar segmentos vacíos
    const pathnames = pathname.split("/").filter((x) => x);
    const crumbs: Crumb[] = [];

    // Nivel 0: Inicio
    crumbs.push({ label: "Inicio", path: "/", icon: "home" });

    // Lógica de Rutas
    if (pathnames[0] === "productos" || pathnames[0] === "producto") {
      // 1. Obtenemos el posible ID o Slug de la URL
      const productId = pathnames[1];
      // 2. Buscamos directamente el producto (funciona con números "14" o texto "aerografo-ecologico")
      const product = productId
        ? PRODUCTS.find((p) => p.id === productId)
        : undefined;

      // CASO A: Es un Producto (Se encontró en la base de datos)
      if (product) {
        crumbs.push({ label: "Productos", path: "/productos" });

        crumbs.push({
          label: product.category,
          path: `/productos?cat=${encodeURIComponent(product.category)}`,
        });

        if (product.subCategory) {
          crumbs.push({
            label: product.subCategory,
            path: `/productos?cat=${encodeURIComponent(product.category)}&sub=${encodeURIComponent(product.subCategory)}`,
          });
        }

        crumbs.push({ label: product.name, path: null });
      }
      // CASO B: Es el Catálogo General (Filtros en la URL)
      else {
  const isFiltered = catParam || subParam || qParam;
  crumbs.push({ label: 'Productos', path: isFiltered ? '/productos' : null });

  // 1. Lógica de Categoría
  let effectiveCat = catParam;
  // Si no hay cat en URL pero sí sub, buscamos qué categoría le corresponde en los datos
  if (!effectiveCat && subParam) {
    const found = PRODUCTS.find(p => p.subCategory === subParam);
    if (found) effectiveCat = found.category;
  }

  if (effectiveCat && effectiveCat !== 'all') {
    // Si hay algo después de la categoría (sub o búsqueda), la categoría lleva link
    const hasNextLevel = subParam || qParam;
    crumbs.push({ 
      label: effectiveCat, 
      path: hasNextLevel ? `/productos?cat=${encodeURIComponent(effectiveCat)}` : null 
    });
  }

  // 2. Lógica de Subcategoría
  if (subParam && subParam !== 'all') {
    crumbs.push({ 
      label: subParam, 
      path: qParam ? `/productos?cat=${encodeURIComponent(effectiveCat || '')}&sub=${encodeURIComponent(subParam)}` : null 
    });
  }

  // 3. Lógica de Búsqueda
  if (qParam) {
    crumbs.push({ label: `Búsqueda: ${qParam}`, path: null });
  }
}
    }
    // Caso: Páginas Estáticas
    else if (pathnames.length > 0) {
      const rawLabel = decodeURIComponent(pathnames[0]);
      const formattedLabel =
        rawLabel.charAt(0).toUpperCase() + rawLabel.slice(1);
      crumbs.push({ label: formattedLabel, path: null });
    }

    setBreadcrumbs(crumbs);
    setIsVisible(true);
  };

  useEffect(() => {
    // 1. Calcular al cargar
    calculateBreadcrumbs();

    // 2. Escuchar navegación de Astro (Cambio de página real)
    document.addEventListener("astro:page-load", calculateBreadcrumbs);

    // 3. Escuchar evento personalizado 'url-change' (Para filtros internos en React)
    window.addEventListener("url-change", calculateBreadcrumbs);

    // 4. Escuchar botón atrás/adelante del navegador
    window.addEventListener("popstate", calculateBreadcrumbs);

    return () => {
      document.removeEventListener("astro:page-load", calculateBreadcrumbs);
      window.removeEventListener("url-change", calculateBreadcrumbs);
      window.removeEventListener("popstate", calculateBreadcrumbs);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <nav className="bg-white border-b border-slate-50 py-3 px-4 shadow-sm relative z-40 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] overflow-x-auto no-scrollbar scroll-smooth">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={index} className="flex items-center shrink-0">
              {index > 0 && (
                <span className="text-slate-300 shrink-0 mx-1">/</span>
              )}

              {!crumb.path || isLast ? (
                <span className="text-[#2553A8] flex items-center gap-1 shrink-0 animate-in fade-in slide-in-from-left-1 duration-300">
                  {crumb.icon && (
                    <span className="material-symbols-outlined text-[12px]">
                      {crumb.icon}
                    </span>
                  )}
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.path}
                  className="text-slate-400 hover:text-[#2553A8] transition-colors flex items-center gap-1 shrink-0"
                >
                  {crumb.icon && (
                    <span className="material-symbols-outlined text-[12px]">
                      {crumb.icon}
                    </span>
                  )}
                  {crumb.label}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
