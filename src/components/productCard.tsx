import React from "react";
import { type Product } from "../data/types";
import { formatCurrency } from "../utils/formatters";

interface ProductCardProps {
  product: Product;
  viewMode: "grid" | "list";
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode,
}) => {
  const imgSrc =
    typeof product.image === "string" ? product.image : product.image.src;

  const hoverImgSrc =
    product.images && product.images.length > 1
      ? typeof product.images[1] === "string"
        ? product.images[1]
        : product.images[1].src
      : null;

  const hasPromo = product.promoPrice !== undefined;
  const badgeBase =
    "flex items-center gap-1 px-2.5 h-6 rounded-md text-[10px] font-bold uppercase tracking-wide shadow-sm backdrop-blur-sm";

  // --- LÓGICA DE PRECIO MÍNIMO (Para variantes tipo Dropdown) ---
  const isDropdown = product.variants && product.variants.length > 0 && product.variantType === "dropdown";
  let displayPrice = product.price;

  if (isDropdown && product.variants) {
    const variantPrices = product.variants
      .map((v) => v.price)
      .filter((p): p is number => p !== undefined);
    if (variantPrices.length > 0) {
      displayPrice = Math.min(...variantPrices);
    }
  }

  // --- COMPONENTE ETIQUETA VARIANTES (H/V) ---
  const VariantBadge = () => {
    // Si NO tiene variantes, o si es de tipo "dropdown" (ej: correas), ocultamos esta etiqueta H|V
    if (!product.variants || product.variants.length === 0 || product.variantType === "dropdown") return null;
    
    return (
      <div
        className="bg-slate-800/90 backdrop-blur-sm text-white text-[8px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm border border-slate-700 w-fit"
        title="Disponible en posición Horizontal y Vertical"
      >
        <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">
          Posición:
        </span>
        <div className="flex items-center gap-1">
          Horizontal
          <span className="material-symbols-outlined text-[8px] text-[#F2B705] font-normal">
            arrow_range
          </span>
          <span className="opacity-50 font-normal">|</span>
          Vertical
          <span className="material-symbols-outlined text-[8px] text-[#F2B705] font-normal rotate-90">
            arrow_range
          </span>
        </div>
      </div>
    );
  };


  // --- VISTA LISTA ---
  if (viewMode === "list") {
    return (
      <div className="group bg-white rounded-4xl md:rounded-4xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-auto relative">
        
        {/* Etiquetas Esquina Superior Derecha (Lista) - Apiladas */}
        <div className="absolute top-4 right-4 z-20 flex md:flex-row flex-col gap-1.5 items-end">
          {product.brand && (
            <div className={`${badgeBase} bg-white/90 border border-slate-200 text-[#2553A8]`}>
              {product.brand}
            </div>
          )}
          {product.warranty && (
            <div className={`${badgeBase} bg-green-50 border border-green-200 text-green-700`}>
              <span className="material-symbols-outlined text-[12px]">verified</span>
              {product.warranty}
            </div>
          )}
        </div>

        <div className="w-full md:w-56 bg-slate-50 p-4 shrink-0 relative flex items-center justify-center overflow-hidden">
          {/* Etiqueta Oferta */}
          {hasPromo && (
            <div className="absolute top-4 left-4 z-20 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
              Oferta
            </div>
          )}

          <img
            src={imgSrc}
            alt={product.name}
            className={`w-auto h-full max-h-48 object-contain mix-blend-multiply transition-all duration-700 ease-in-out ${hoverImgSrc ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
            loading="lazy"
          />

          {hoverImgSrc && (
            <div className="absolute inset-0 p-4 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 flex items-center justify-center pointer-events-none mix-blend-multiply">
              <img
                src={hoverImgSrc}
                alt={`${product.name} vista 2`}
                className="w-auto h-full max-h-48 object-contain mix-blend-multiply scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:duration-[2000ms]"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
              {product.category}
            </span>
            <h3 className="font-black text-[#2553A8] text-lg group-hover:text-[#F2B705] transition-colors uppercase leading-tight">
              <a href={`/producto/${product.id}`}>{product.name}</a>
            </h3>
            <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-3">
               <VariantBadge />
            </div>

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
                {isDropdown ? "PRECIO DESDE" : "PRECIO"}
              </p>
              {hasPromo ? (
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-slate-400 line-through font-bold">
                    {formatCurrency(displayPrice)}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-red-600">
                      {formatCurrency(product.promoPrice!)}
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">
                      Precio no incluye IVA
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-baseline gap-1.5">
                  <p className="text-xl font-black text-[#2553A8]">
                    {formatCurrency(displayPrice)}
                  </p>
                  <span className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">
                    Precio no incluye IVA
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/573127536787?text=Hola,%20me%20interesa%20el%20equipo:%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-xl bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors shadow-md active:scale-95"
                title="Cotizar en WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
              <a
                href={`/producto/${product.id}`}
                className="bg-[#F2B705] px-4 py-2 rounded-xl shadow-md text-[#2553A8] flex items-center gap-2 group-hover:bg-[#d9a404] transition-colors"
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

  // --- VISTA CUADRÍCULA (GRID) ---
  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-1 relative">
      
      {/* Etiqueta Oferta (Derecha) */}
      {hasPromo && (
        <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md animate-pulse">
          Oferta
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
        {/* IMAGEN 1 */}
        <img
          src={imgSrc}
          alt={product.name}
          className={`w-full h-full object-contain mix-blend-multiply transition-all duration-700 ease-in-out ${hoverImgSrc ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
          loading="lazy"
        />

        {/* IMAGEN 2 */}
        {hoverImgSrc && (
          <div className="absolute inset-0 p-6 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 pointer-events-none mix-blend-multiply">
            <img
              src={hoverImgSrc}
              alt={`${product.name} vista 2`}
              className="w-full h-full object-contain mix-blend-multiply scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:duration-[2000ms]"
              loading="lazy"
            />
          </div>
        )}

        {/* Etiqueta Izquierda: Solo Marca */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 items-start">
          {product.brand && (
            <span
              className={`${badgeBase} bg-white/90 border border-slate-200 text-[#2553A8]`}
            >
              {product.brand}
            </span>
          )}
        </div>
      </div>

      <div className="p-6 grow flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-black text-[#2553A8] text-base group-hover:text-[#F2B705] transition-colors line-clamp-2 leading-tight uppercase mb-2">
            <a href={`/producto/${product.id}`}>{product.name}</a>
          </h3>
          <p className="text-slate-400 text-[10px] line-clamp-2 font-medium leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="mt-1">
            <VariantBadge />
        </div>

        <div className="pt-2 border-t border-slate-50 flex items-center justify-between mt-auto">
          <div className="space-y-0.5">
            <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest">
              {isDropdown ? "PRECIO DESDE" : "PRECIO"}
            </p>
            {hasPromo ? (
              <div className="flex flex-col leading-none">
                <span className="text-[10px] text-slate-400 line-through font-bold">
                  {formatCurrency(displayPrice)}
                </span>
                <span className="text-lg font-black text-red-600 block mt-0.5">
                  {formatCurrency(product.promoPrice!)}
                </span>
                <span className="text-[7px] text-slate-400 font-medium block mt-0.5 uppercase tracking-wider">
                  Precio no incluye IVA
                </span>
              </div>
            ) : (
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black text-[#2553A8] block">
                  {formatCurrency(displayPrice)}
                </span>
                <span className="text-[7px] text-slate-400 font-medium block mt-0.5 uppercase tracking-wider">
                  Precio no incluye IVA
                </span>
              </div>
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
              className="bg-[#F2B705] px-2 py-2 rounded-xl shadow-md text-[#2553A8] flex items-center gap-2 group-hover:bg-[#d9a404] transition-colors"
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
};