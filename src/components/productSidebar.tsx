import React from "react";
import { PRODUCTS } from "../data/products/products";
import { PRODUCT_STRUCTURE } from "../data/shared/navegacion";
import { Category, SubCategory } from "../data/types";
import { formatCurrency } from "../utils/formatters";
import { Check, ChevronDown, Funnel, Search, X } from "lucide-react";

interface ProductSidebarProps {
  selectedCategory: string;
  selectedSub: string;
  showPromosOnly: boolean;
  maxPriceFilter: number;
  globalMaxPrice: number;
  availableHPs: string[];
  selectedHPs: string[];
  expandedCategories: Record<string, boolean>;
  sectionsOpen: { category: boolean; price: boolean; power: boolean };
  searchQuery: string;
  setSectionsOpen: React.Dispatch<
    React.SetStateAction<{ category: boolean; price: boolean; power: boolean }>
  >;
  setMaxPriceFilter: (val: number) => void;
  toggleHP: (hp: string) => void;
  toggleCategoryExpand: (cat: string, e: React.MouseEvent) => void;
  onUpdateUrl: (cat: string, sub: string, promo: boolean) => void;
  getCategoryCount: (cat: Category) => number;
  getSubCategoryCount: (cat: Category, sub: SubCategory) => number;
  getPromoCount: () => number;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const ProductSidebar: React.FC<ProductSidebarProps> = ({
  selectedCategory,
  selectedSub,
  showPromosOnly,
  maxPriceFilter,
  globalMaxPrice,
  availableHPs,
  selectedHPs,
  expandedCategories,
  sectionsOpen,
  setSectionsOpen,
  setMaxPriceFilter,
  toggleHP,
  toggleCategoryExpand,
  onUpdateUrl,
  getCategoryCount,
  getSubCategoryCount,
  getPromoCount,
  setSearchQuery,
  setCurrentPage,
  searchQuery,
}) => {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-4 select-none">
      <div className="flex items-center gap-2 px-1">
        <Funnel className="size-4 text-[#2553A8] uppercase tracking-widest" />
        <span className="font-black text-[#2553A8] uppercase tracking-widest text-sm">
          Filtros
        </span>
      </div>
      {/* --- BUSCADOR INTERNO --- */}
      <div className="relative shadow-sm group mb-2">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="size-4 text-slate-500 group-focus-within:text-[#2553A8] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full bg-white border border-slate-100 rounded-2xl py-3.5 pl-11 pr-10 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#2553A8] focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            aria-label="Limpiar búsqueda"
            onClick={() => {
              setSearchQuery("");
              setCurrentPage(1);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
      {/* 1. SECCIÓN CATEGORÍA */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <button
          aria-label={
            sectionsOpen.category
              ? "Cerrar filtros de categoría"
              : "Abrir filtros de categoría"
          }
          onClick={() =>
            setSectionsOpen((p) => ({ ...p, category: !p.category }))
          }
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="font-bold text-slate-700 text-sm">Categoría</span>
          <ChevronDown
            className={`transition-transform text-slate-500 size-5 ${sectionsOpen.category ? "rotate-180" : ""}`}
          />
        </button>

        {sectionsOpen.category && (
          <div className="px-4 pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {/* Ver Todo */}
            <div
              onClick={() => onUpdateUrl("all", "all", false)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`size-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === "all" && !showPromosOnly ? "bg-[#2553A8] border-[#2553A8]" : "bg-white border-slate-300 group-hover:border-[#2553A8]"}`}
              >
                {selectedCategory === "all" && !showPromosOnly && (
                  <Check className="size-4 text-white" />
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
              onClick={() => onUpdateUrl("all", "all", true)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`size-5 rounded border flex items-center justify-center transition-colors ${showPromosOnly ? "bg-red-500 border-red-500" : "bg-white border-slate-300 group-hover:border-red-500"}`}
              >
                {showPromosOnly && <Check className="size-4 text-white" />}
              </div>
              <span
                className={`text-xs font-medium ${showPromosOnly ? "text-red-500" : "text-slate-600"}`}
              >
                Ofertas
              </span>
              <span
                className={`text-[8px] font-bold ${showPromosOnly ? "text-red-300" : "text-slate-500"}`}
              >
                ({getPromoCount()})
              </span>
            </div>

            <div className="h-px bg-slate-100 my-2"></div>

            {/* Categorías con Flecha Independiente */}
            {PRODUCT_STRUCTURE.map((item) => {
              const isSelected = selectedCategory === item.name;
              const isExpanded = expandedCategories[item.name];
              const subs = item.subs;
              const hasSubs = subs.length > 0;

              return (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between group">
                    <div
                      onClick={() => onUpdateUrl(item.name, "all", false)}
                      className="flex items-center gap-3 cursor-pointer grow"
                    >
                      <div
                        className={`size-5 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#2553A8] border-[#2553A8]" : "bg-white border-slate-300 group-hover:border-[#2553A8]"}`}
                      >
                        {isSelected && <Check className="size-4 text-white" />}
                      </div>
                      <span
                        className={`text-xs font-medium ${isSelected ? "text-[#2553A8]" : "text-slate-600"}`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-[8px] font-bold ${isSelected ? "text-[#2553A8]" : "text-slate-500"}`}
                      >
                        ({getCategoryCount(item.name)})
                      </span>
                    </div>

                    {hasSubs && (
                      <button
                        aria-label={
                          isExpanded
                            ? `Ocultar subcategorías de ${item.name}`
                            : `Mostrar subcategorías de ${item.name}`
                        }
                        onClick={(e) => toggleCategoryExpand(item.name, e)}
                        className="p-1 rounded-full hover:bg-slate-100 text-slate-500 hover:text-[#2553A8] transition-colors"
                      >
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubs && isExpanded && (
                    <div className="pl-8 flex flex-col gap-2 border-l-2 border-slate-100 ml-2.5 animate-in slide-in-from-left-2">
                      {subs.map((sub) => (
                        <div
                          key={sub}
                          onClick={() => onUpdateUrl(item.name, sub, false)}
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
                            className={`text-[8px] font-bold ${selectedSub === sub ? "text-slate-800" : "text-slate-500"}`}
                          >
                            ({getSubCategoryCount(item.name, sub)})
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
          aria-label={
            sectionsOpen.price
              ? "Cerrar filtro de precio"
              : "Abrir filtro de precio"
          }
          onClick={() => setSectionsOpen((p) => ({ ...p, price: !p.price }))}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="font-bold text-slate-700 text-sm">Precio</span>
          <ChevronDown
            className={`transition-transform text-slate-500 size-5 ${sectionsOpen.price ? "rotate-180" : ""}`}
          />
        </button>
        {sectionsOpen.price && (
          <div className="px-4 pb-6 space-y-4">
            <div className="flex justify-between text-[10px] font-bold text-slate-500">
              <span>$0</span>
              <span>{formatCurrency(maxPriceFilter)}</span>
            </div>
            <label htmlFor="price-range" className="sr-only">
              Filtrar por precio máximo
            </label>

            <input
              id="price-range"
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

      {/* 3. SECCIÓN POTENCIA */}
      {availableHPs.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4">
          <button
            aria-label={
              sectionsOpen.power
                ? "Cerrar filtro de potencia"
                : "Abrir filtro de potencia"
            }
            onClick={() => setSectionsOpen((p) => ({ ...p, power: !p.power }))}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
          >
            <span className="font-bold text-slate-700 text-sm">
              Potencia (HP)
            </span>
            <ChevronDown
              className={`size-5 text-slate-500 transition-transform ${sectionsOpen.power ? "rotate-180" : ""}`}
            />
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
                      <Check className="size-4 text-white" />
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
  );
};
