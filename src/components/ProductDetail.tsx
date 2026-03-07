import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { PRODUCTS } from "../data/constants";
import { type Product } from "../data/types";

export const ProductDetail: React.FC = () => {
  // --- ESTADOS ---
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Estado para los acordeones
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Estados para la Lupa
  const [zoomStyle, setZoomStyle] = useState({
    transformOrigin: "center center",
    transform: "scale(1)",
  });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const loadProduct = () => {
      setLoading(true);
      // Lógica para obtener ID de la URL
      const pathSegments = window.location.pathname.split("/").filter(Boolean);
      const productId = pathSegments[pathSegments.length - 1];

      const found = PRODUCTS.find((p) => p.id === productId);

      if (found) {
        setProduct(found);
        setSelectedImgIndex(0);
        // Productos relacionados (misma categoría, excluyendo actual)
        const related = PRODUCTS.filter(
          (p) => p.category === found.category && p.id !== found.id,
        ).slice(0, 4);
        setRelatedProducts(related);
      } else {
        console.error("Producto no encontrado con ID:", productId);
      }
      setLoading(false);
    };

    loadProduct();
    document.addEventListener("astro:page-load", loadProduct);
    return () => document.removeEventListener("astro:page-load", loadProduct);
  }, []);

  // --- LÓGICA DE LUPA ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const { left, top, width, height } =
      imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(2)" });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  // --- LÓGICA COMPARTIR ---
  const handleShare = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.name,
          text: `Mira este equipo en Compresores del Valle: ${product.name}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error al compartir", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (loading)
    return (
      <div className="min-h-screen pt-40 text-center text-slate-400 font-bold animate-pulse">
        Cargando equipo...
      </div>
    );
  if (!product) return null;

  // Helpers
  const getImgSrc = (img: any) => {
    if (!img) return "";
    return typeof img === "string" ? img : img.src;
  };

  const mainImageSrc = getImgSrc(product.image);
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images.map(getImgSrc)
      : [mainImageSrc];
  const currentImageSrc = galleryImages[selectedImgIndex];

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(val);

  const hasPromo = product.promoPrice !== undefined;

  return (
    <div className="bg-white min-h-screen pb-20 pt-28 md:pt-18 relative z-0">
      
      {/* --- MODAL ZOOM (Portal fuera del Layout) --- */}
      {isZoomOpen &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-99999 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300 cursor-zoom-out"
            onClick={() => setIsZoomOpen(false)}
          >
            <button
              className="fixed top-6 right-6 z-100000 text-white hover:text-(--brand-yellow) transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomOpen(false);
              }}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <div className="relative w-full h-full flex items-center justify-center max-w-7xl max-h-[90vh]">
              <img
                src={currentImageSrc}
                alt="Zoom Fullscreen"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 select-none cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>,
          document.body
        )}

      <main className="max-w-7xl mx-auto px-4 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- COLUMNA IZQUIERDA: GALERÍA --- */}
          <div className="space-y-6 lg:sticky lg:top-36 h-fit">
            <div
              ref={imageContainerRef}
              className="relative aspect-square bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-lg group cursor-crosshair flex items-center justify-center p-8"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsZoomOpen(true)}
            >
              {/* Etiquetas Izquierda */}
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2 pointer-events-none">
                  {hasPromo && (
                    <div className="bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg w-fit animate-pulse">
                      Oferta
                    </div>
                  )}
                  {product.brand && (
                    <div className="bg-white/90 backdrop-blur border border-slate-200 text-[#2553A8] text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-lg w-fit">
                      {product.brand}
                    </div>
                  )}
              </div>

              <img
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-200 ease-out pointer-events-none"
                src={currentImageSrc}
                style={zoomStyle}
              />
              
              {/* Lupa Derecha */}
              <div
                className="absolute top-6 right-6 p-3 bg-white text-[#2553A8] rounded-2xl shadow-md border border-slate-100 cursor-pointer hover:scale-110 transition-transform z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomOpen(true);
                }}
              >
                <span className="material-symbols-outlined text-xl">zoom_in</span>
              </div>
            </div>

            {/* Miniaturas */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIndex(idx)}
                    className={`aspect-square rounded-2xl border-2 overflow-hidden bg-slate-50 p-2 transition-all ${
                      selectedImgIndex === idx
                        ? "border-[#2553A8] ring-2 ring-blue-100 scale-95 opacity-100"
                        : "border-transparent hover:border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-contain mix-blend-multiply"
                      alt={`Vista ${idx + 1}`}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* --- COLUMNA DERECHA: INFO COMPLETA --- */}
          <div className="flex flex-col space-y-8">
            
            {/* Header + Compartir */}
            <div className="space-y-4 border-b border-slate-100 pb-8">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <span className="bg-blue-50 text-[#2553A8] px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                      {product.category}
                    </span>
                    {product.warranty && (
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">verified</span>{" "}
                        {product.warranty}
                    </span>
                    )}
                 </div>
                 <button 
                    onClick={handleShare} 
                    className="text-slate-400 hover:text-[#2553A8] transition-colors p-2 rounded-full hover:bg-slate-50" 
                    title="Compartir"
                 >
                    <span className="material-symbols-outlined text-xl">share</span>
                 </button>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-[#2553A8] leading-tight uppercase tracking-tighter">
                {product.name}
              </h1>
              
              <div className="pt-2">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Precio de Venta
                </p>
                {hasPromo ? (
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-black text-red-600 leading-none">
                      {formatCurrency(product.promoPrice!)}
                    </p>
                    <p className="text-xl font-bold text-slate-400 line-through mb-1.5">
                      {formatCurrency(product.price)}
                    </p>
                  </div>
                ) : (
                  <p className="text-5xl font-black text-[#2553A8] leading-none">
                    {formatCurrency(product.price)}
                  </p>
                )}
                
                {/* Micro-Garantías */}
                <div className="flex flex-wrap gap-4 mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Envío Nacional</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-green-500 text-sm">check_circle</span> Asesoría Técnica</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Botones CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/573127536787?text=Hola,%20cotización%20del%20equipo:%20${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-(--wa-green) hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-200 transition-all active:scale-95 group"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <div className="text-left">
                  <span className="block text-[10px] font-bold opacity-90 uppercase tracking-wider">
                    Cotizar Ahora
                  </span>
                  <span className="block text-sm font-black">Vía WhatsApp</span>
                </div>
              </a>
              <div className="bg-slate-50 border border-slate-200 text-slate-600 py-4 px-6 rounded-2xl flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[#2553A8]">
                  support_agent
                </span>
                <div className="text-left">
                  <span className="block text-[10px] font-bold opacity-70 uppercase tracking-wider">
                    Soporte
                  </span>
                  <span className="block text-sm font-black">
                    +57 312 753 6787
                  </span>
                </div>
              </div>
            </div>

            {/* ESPECIFICACIONES (Visibles) */}
            <div className="space-y-4 pt-6">
                <h3 className="text-sm font-black text-[#2553A8] uppercase tracking-widest flex items-center gap-2">
                  <span className="material-symbols-outlined">settings</span> Especificaciones Técnicas
                </h3>
                <div className="bg-white border border-slate-100 rounded-4xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-slate-50">
                      {Object.entries(product.specs).map(([key, val], idx) => (
                        <tr
                          key={key}
                          className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <th className="px-6 py-4 font-bold text-slate-500 uppercase tracking-wide text-xs w-1/3 text-left bg-slate-50/80">
                            {key}
                          </th>
                          <td className="px-6 py-4 text-slate-800 font-bold">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </div>

            {/* ACORDEONES (Pago y Envío) */}
            <div className="border-t border-slate-100 pt-6 space-y-2">
                
                {/* 1. Medios de Pago */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button onClick={() => toggleSection('payments')} className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                        <span className="text-xs font-black text-[#2553A8] uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined">payments</span> Medios de Pago
                        </span>
                        <span className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${openSection === 'payments' ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                    {openSection === 'payments' && (
                        <div className="p-4 bg-white text-sm text-slate-600 animate-in slide-in-from-top-2">
                            <p className="font-medium">Aceptamos múltiples formas de pago para su comodidad:</p>
                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                <li>Transferencia <strong>Bancolombia</strong>.</li>
                                <li><strong>Nequi / Daviplata</strong>.</li>
                                <li>Efectivo en nuestras sedes físicas.</li>
                                <li>Facturación Electrónica para empresas.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* 2. Entrega y Despachos */}
                <div className="border border-slate-100 rounded-2xl overflow-hidden">
                    <button onClick={() => toggleSection('shipping')} className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                        <span className="text-xs font-black text-[#2553A8] uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined">local_shipping</span> Entrega y Despachos
                        </span>
                        <span className={`material-symbols-outlined text-slate-400 text-sm transition-transform ${openSection === 'shipping' ? 'rotate-180' : ''}`}>expand_more</span>
                    </button>
                    {openSection === 'shipping' && (
                        <div className="p-4 bg-white text-sm text-slate-600 animate-in slide-in-from-top-2">
                            <div className="space-y-3">
                                <div>
                                    <p className="font-bold text-slate-800">📍 Recogida en Tienda:</p>
                                    <p>Disponible para entrega inmediata en nuestra Sede Principal (Cali), sujeto a stock.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">🚚 Envíos Nacionales:</p>
                                    <p>Realizamos despachos a todo el país mediante transportadora.</p>
                                    <p className="text-(--brand-yellow) font-bold mt-1 bg-yellow-50 p-2 rounded-lg text-xs border border-yellow-100">
                                        NOTA: El costo del flete es contra entrega (paga el cliente al recibir).
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

          </div>
        </div>

        {/* --- RELACIONADOS (Intacto) --- */}
        {relatedProducts.length > 0 && (
          <section className="pt-16 border-t border-slate-100 space-y-10">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-black text-[#2553A8] uppercase tracking-tighter">
                Equipos Similares
              </h2>
              <a href="/productos" className="text-xs font-bold text-slate-400 hover:text-[#2553A8] flex items-center gap-1">
                Ver catálogo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => {
                const img = getImgSrc(p.image);
                return (
                  <a key={p.id} href={`/producto/${p.id}`} className="group bg-white p-5 rounded-[2.5rem] border border-slate-100 hover:border-[#F2B705] hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden p-4 mb-4 relative">
                      <img src={img} loading="lazy" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                      {p.promoPrice && <span className="absolute top-3 right-3 bg-red-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full">OFERTA</span>}
                    </div>
                    <h3 className="text-xs font-black text-[#2553A8] group-hover:text-(--brand-yellow) uppercase leading-tight line-clamp-2">{p.name}</h3>
                    <p className="text-sm font-bold text-slate-700 mt-auto pt-2">{formatCurrency(p.promoPrice || p.price)}</p>
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};