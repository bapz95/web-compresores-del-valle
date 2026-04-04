import { useState, useEffect, useMemo } from "react";
import { PRODUCTS } from "../data/constants";
import { Category, SubCategory } from "../data/types";
import { removeAccents } from "../utils/searchUtils"; 

export type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";
export type ViewMode = "grid" | "list";

export const useProductFilters = (itemsPerPage: number) => {
  // --- 1. ESTADOS ---
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedSub, setSelectedSub] = useState<SubCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const[showPromosOnly, setShowPromosOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const[sortOption, setSortOption] = useState<SortOption>("default");
  const [isLoading, setIsLoading] = useState(true);

  // Filtros Avanzados
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(100000000);
  const [selectedHPs, setSelectedHPs] = useState<string[]>([]);
  const[expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [sectionsOpen, setSectionsOpen] = useState({ category: true, price: true, power: true });

  // --- 2. CÁLCULOS GLOBALES ---
  const globalMaxPrice = useMemo(() => Math.max(...PRODUCTS.map((p) => p.price)),[]);

  //Para el filtro de POTENCIA
  const availableHPs = useMemo(() => {
    // Categorias que tienen Potencia
    const categoriesWithHP = [
      Category.COMPRESORES,
      Category.MOTORES,
      Category.CABEZOTES, 
    ];

    // 1. Condición para OCULTAR el filtro de HP.
    if (selectedCategory !== "all" && !categoriesWithHP.includes(selectedCategory as Category)) {
      return [];
    }
    // 2. Filtramos los productos por Categoría Y Subcategoría
    const targetProducts = PRODUCTS.filter((p) => {
      // Validar Categoría
      const matchesCat = selectedCategory === "all" 
        ? categoriesWithHP.includes(p.category) 
        : p.category === selectedCategory;

      // Validar Subcategoría (LA MAGIA OCURRE AQUÍ)
      const matchesSub = selectedSub === "all" 
        ? true 
        : p.subCategory === selectedSub;

      return matchesCat && matchesSub;
    });

    // 3. Extraer los productos que tienene en specs Potencia se definen dos por si en specs se coloca diferente
    const hps = targetProducts
      .map((p) => 
        p.specs?.["Potencia"] || 
        p.specs?.["potencia"] 
      )
      .filter(Boolean) as string[]; 

    // 4. Limpiar duplicados y ordenar numéricamente 
    const uniqueHPs = [...new Set(hps)];
    return uniqueHPs.sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [selectedCategory, selectedSub]); 


  // --- 3. SINCRONIZACIÓN DE URL ---
  useEffect(() => {
    const handleNavigation = () => {
      setIsLoading(true);
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q") || "";
      
      setSearchQuery(q);
      const catParam = params.get("cat") as Category;
      const validCat = Object.values(Category).includes(catParam) ? catParam : "all";

      setSelectedCategory(validCat);
      const subParam = params.get("sub") as SubCategory;
      setSelectedSub(
        Object.values(SubCategory).includes(subParam)
          ? subParam
          : "all",
      );
      setShowPromosOnly(params.get("filtro") === "ofertas");

      if (validCat !== "all") {
        setExpandedCategories((prev) => ({ ...prev, [validCat]: true }));
      }

      setMaxPriceFilter(globalMaxPrice);
      setSelectedHPs([]);
      setCurrentPage(1);

      setTimeout(() => setIsLoading(false), 500);
    };

    handleNavigation();
    // Escuchar todos los posibles cambios de URL
    window.removeEventListener("popstate", handleNavigation);
    window.removeEventListener("url-change", handleNavigation);
    document.addEventListener("astro:page-load", handleNavigation);
    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("url-change", handleNavigation);
      document.removeEventListener("astro:page-load", handleNavigation);}
  }, [globalMaxPrice]);

  // --- 4. FILTRADO Y ORDENAMIENTO ---
  let processedProducts = PRODUCTS.filter((p) => {
    const query = removeAccents(searchQuery);
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSub = selectedSub === "all" || p.subCategory === selectedSub;
    const matchesSearch =
      removeAccents(p.name).includes(query) ||
      removeAccents(p.brand).includes(query);
    const matchesPromo = showPromosOnly ? p.promoPrice !== undefined : true;
    const currentPrice = p.promoPrice || p.price;
    const matchesPrice = currentPrice <= maxPriceFilter;
    const productHP = p.specs["Potencia"] || p.specs["Power"];
    const matchesHP = selectedHPs.length === 0 || (productHP && selectedHPs.includes(productHP));

    return matchesCat && matchesSub && matchesSearch && matchesPromo && matchesPrice && matchesHP;
  });

  if (sortOption === "price-asc") {
    processedProducts.sort((a, b) => (a.promoPrice || a.price) - (b.promoPrice || b.price));
  } else if (sortOption === "price-desc") {
    processedProducts.sort((a, b) => (b.promoPrice || b.price) - (a.promoPrice || a.price));
  } else if (sortOption === "name-asc") {
    processedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = processedProducts.slice(startIndex, startIndex + itemsPerPage);

  // --- 5. FUNCIONES AUXILIARES Y CONTADORES ---
  const getCategoryCount = (cat: Category) => PRODUCTS.filter((p) => p.category === cat).length;
  const getSubCategoryCount = (cat: Category, sub: SubCategory) => PRODUCTS.filter((p) => p.category === cat && p.subCategory === sub).length;
  const getPromoCount = () => PRODUCTS.filter((p) => p.promoPrice !== undefined).length;

  const updateUrl = (cat: string, sub: string, promo: boolean, onScrollCallback: () => void) => {
    setIsLoading(true);
    const params = new URLSearchParams();
    if (cat !== "all") params.set("cat", cat);
    if (sub !== "all") params.set("sub", sub);
    if (promo) params.set("filtro", "ofertas");

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
    window.dispatchEvent(new Event("url-change"));

    setSelectedCategory(cat as Category | "all");
    setSelectedSub(sub as SubCategory | "all");
    setShowPromosOnly(promo);
    setSelectedHPs([]);
    setCurrentPage(1);

    if (cat !== "all") setExpandedCategories((prev) => ({ ...prev, [cat]: true }));

    setTimeout(() => {
      onScrollCallback();
      setIsLoading(false);
    }, 400);
  };

  const toggleCategoryExpand = (cat: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleHP = (hp: string) => {
    setSelectedHPs((prev) => prev.includes(hp) ? prev.filter((h) => h !== hp) : [...prev, hp]);
    setCurrentPage(1);
  };

  // Devolvemos todo empaquetado para usarlo en la UI
  return {
    selectedCategory, selectedSub, searchQuery, setSearchQuery,
    showPromosOnly, currentPage, setCurrentPage, viewMode, setViewMode,
    sortOption, setSortOption, isLoading, setIsLoading,
    maxPriceFilter, setMaxPriceFilter, selectedHPs, setSelectedHPs,
    expandedCategories, sectionsOpen, setSectionsOpen,
    globalMaxPrice, availableHPs, processedProducts, paginatedProducts, totalPages,
    updateUrl, toggleCategoryExpand, toggleHP,
    getCategoryCount, getSubCategoryCount, getPromoCount
  };
};