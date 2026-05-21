import React, { useState, useEffect, useRef } from "react";
import { PRODUCTS } from "../data/products/products";
import {
  complementaryCategories,
  compressorTypes,
  successStories,
  realClients,
  slides,
  sectors,
  whyChooseUsFeatures,
  BRAND_BADGES,
} from "../data/home/home";
import { SERVICES } from "../data/services/services";
import { formatCurrency } from "../utils/formatters";
import { type ImageSource } from "../data/types";
import { getImage } from "../data/shared/images";
import compresoresHome from "../assets/home/seccion-complementarios/compresores-juntos-home.webp";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  UnfoldHorizontal,
} from "lucide-react";

// --- COMPONENTE COLLAGE INTERACTIVO 3D POR QUÉ ELEGIRNOS---

const CollageInteractivo: React.FC = () => {
  const collageImages = [
    {
      image: getImage("home/seccion-elegirnos/Equipo_trabajo.webp"),
      alt: "Equipo de trabajo de Compresores del Valle",
    },
    {
      image: getImage("nosotros/Empresa/compresores_del_valle_fachada.webp"),
      alt: "Fachada de Compresores del Valle",
    },
    {
      image: getImage(
        "home/seccion-elegirnos/montaje-compresor-pulmon-secador.webp",
      ),
      alt: "Montaje industrial de compresor de tornillo con pulmón y secador",
    },
  ];

  const [positions, setPositions] = useState([0, 1, 2]);

  // Lógica híbrida para las insignias (Sellos PNG)
  const getBadgeSrc = (badge: any) => {
    if (!badge) return "";
    return typeof badge === "string" ? badge : badge.src;
  };

  const expSrc = getBadgeSrc(BRAND_BADGES?.experiencia);
  const garSrc = getBadgeSrc(BRAND_BADGES?.garantia);

  const handleSwap = (clickedImgIndex: number) => {
    const clickedCurrentPos = positions[clickedImgIndex];
    if (clickedCurrentPos === 1) return;

    setPositions((prevPositions) => {
      const newPos = [...prevPositions];
      const currentCenterImgIndex = prevPositions.findIndex((p) => p === 1);
      newPos[currentCenterImgIndex] = clickedCurrentPos;
      newPos[clickedImgIndex] = 1;
      return newPos;
    });
  };

  const getTransformClasses = (pos: number) => {
    if (pos === 0)
      return "translate-x-[-30%] md:translate-x-[-55%] rotate-[-12deg] z-10 scale-90 brightness-75 cursor-pointer hover:-translate-y-4 hover:brightness-95";
    if (pos === 1)
      return "translate-x-0 rotate-0 z-30 scale-110 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] brightness-100";
    if (pos === 2)
      return "translate-x-[30%] md:translate-x-[55%] rotate-[12deg] z-10 scale-90 brightness-75 cursor-pointer hover:-translate-y-4 hover:brightness-95";
    return "";
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center select-none mt-8">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>

      {collageImages.map((img, idx) => {
        const currentPos = positions[idx];
        return (
          <div
            key={idx}
            onClick={() => handleSwap(idx)}
            className={`absolute w-44 md:w-60 aspect-[3/4] bg-white p-1 md:p-2 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${getTransformClasses(currentPos)}`}
          >
            <div className="w-full h-full bg-slate-50 rounded-xl md:rounded-[1.5rem] overflow-hidden relative flex items-center justify-center border border-slate-100">
              <img
                src={typeof img.image === "string" ? img.image : img.image.src}
                alt={img.alt}
                loading="lazy"
              />
            </div>

            {/* SELLO EXPERIENCIA (Arriba Izquierda, Inclinado) */}
            {currentPos === 1 && expSrc && (
              <img
                src={expSrc}
                alt="Experiencia CDV"
                loading="lazy"
                className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 md:w-32 z-40 -rotate-12 drop-shadow-xl animate-in zoom-in duration-500 pointer-events-none"
              />
            )}

            {/* SELLO GARANTÍA (Arriba Derecha, Atrás) */}
            {currentPos === 2 && garSrc && (
              <img
                src={garSrc}
                alt="Garantía"
                loading="lazy"
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 md:w-28 z-20 rotate-6 drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity animate-in fade-in duration-500 pointer-events-none"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

// --- COMPONENTE ANTES/DESPUÉS ---
const BeforeAfterSlider: React.FC<{
  before: ImageSource;
  after: ImageSource;
}> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeSrc = typeof before === "string" ? before : before.src;
  const afterSrc = typeof after === "string" ? after : after.src;

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 rounded-[3rem] overflow-hidden cursor-ew-resize select-none border-8 border-white shadow-2xl bg-slate-200 group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={beforeSrc}
          alt="Antes"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 right-8 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest border border-white/20">
          Antes
        </div>
      </div>
      <div
        className="absolute inset-0 w-full h-full z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt="Después"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-8 left-8 z-30 bg-(--brand-yellow) text-[#013189] text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
          Después
        </div>
      </div>
      <div
        className="absolute inset-y-0 w-1.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.5)] z-40 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-[#2553A8] rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white">
          <UnfoldHorizontal className="size-10" />
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  // Lógica de Promociones: Filtrar los que tienen promoPrice
  const promoProducts = PRODUCTS.filter(
    (p) => p.promoPrice !== undefined,
  ).slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);
  const [expandedDesc, setExpandedDesc] = useState(false);
  const nextStory = () =>
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  const prevStory = () =>
    setCurrentStory((prev) =>
      prev === 0 ? successStories.length - 1 : prev - 1,
    );

  return (
    <div className="space-y-24 pb-20">
      <h1 className="sr-only">
        Compresores del Valle: Venta, Mantenimiento y Reparación de Compresores
        Industriales en Cali y el Valle del Cauca
      </h1>
      {/* 1. Hero Slider */}
      <section className="relative h-[70vh] md:h-[65vh] min-h-130 md:min-h-140 max-h-180 overflow-hidden bg-slate-900">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          const imgSrc =
            typeof slide.image === "string" ? slide.image : slide.image.src;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={imgSrc}
                  alt={slide.title}
                  fetchPriority="high"
                  className={`w-full h-full object-cover transition-transform duration-2000 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Gradiente (Quieto) */}
              <div className="absolute inset-0 bg-linear-to-t from-[#2553A8] via-[#2553A8]/50 to-black/30"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12 space-y-6 md:space-y-8">
                {/* Subtítulo animado suavemente hacia arriba */}
                <div
                  className={`transition-all duration-1000 delay-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  <span className="inline-flex items-center px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-[#F2B705] text-[#2553A8] text-[10px] md:text-xs font-black uppercase tracking-widest animate-pulse">
                    {slide.subtitle}
                  </span>
                </div>
                <h2
                  className={`text-4xl sm:text-6xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase drop-shadow-2xl max-w-5xl transition-all duration-1000 delay-500 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {slide.title}
                </h2>

                <p
                  className={`text-white/90 max-w-xl md:max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-medium transition-all duration-1000 delay-700 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {slide.description}
                </p>

                <div
                  className={`flex flex-wrap justify-center gap-4 md:gap-6 transition-all duration-1000 delay-1000 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {/* Botones Dinámicos */}
                  <a
                    href={slide.primaryCta.link}
                    className="bg-(--brand-yellow) hover:bg-(--hover-yellow) text-[#013189] font-black py-4 px-8 md:py-5 md:px-12 rounded-2xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95 uppercase tracking-widest text-xs md:text-sm"
                  >
                    {slide.primaryCta.text}
                  </a>

                  <a
                    href={slide.secondaryCta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-black py-4 px-8 md:py-5 md:px-12 rounded-2xl transition-all uppercase tracking-widest text-xs md:text-sm"
                  >
                    {slide.secondaryCta.text}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
          <button
            aria-label="Ver banner anterior"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1,
              )
            }
            className="pointer-events-auto size-10 md:size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#F2B705] hover:text-[#2553A8] transition-all flex items-center justify-center group"
          >
            <ChevronLeft className="size-5 md:size-8 font-black group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            aria-label="Ver banner siguiente"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="pointer-events-auto size-10 md:size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#F2B705] hover:text-[#2553A8] transition-all flex items-center justify-center group"
          >
            <ChevronRight className="size-5 md:size-8 font-black group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. Stats Counter */}
      <section className="max-w-4xl mx-auto px-8">
        <div className="bg-white rounded-4xl shadow-2xl border border-slate-100 -mt-35 relative z-30 py-1.5 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black text-[#2553A8]">
              25+
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">
              Años de Trayectoria
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-[#2553A8]">
              500+
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">
              Empresas Aliadas
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-[#2553A8]">
              1.2k +
            </p>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">
              Equipos Instalados
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PROMOCIONES (Solo se muestra si hay productos con promoPrice) */}
      {promoProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="space-y-4">
              <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-sm">
                Ofertas del Mes
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter">
                Oportunidades Únicas
              </h2>
              <div className="h-1.5 w-24 bg-red-500 rounded-full"></div>
            </div>
            <a
              href="/productos?filtro=ofertas"
              className="group flex items-center gap-2 text-[#2553A8] font-black text-sm uppercase tracking-widest hover:text-(--brand-yellow) transition-colors"
            >
              Ver todas las ofertas{" "}
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {promoProducts.map((product) => {
              // --- LÓGICA DE HOVER DE IMÁGENES  ---
              const mainImgSrc =
                typeof product.image === "string"
                  ? product.image
                  : product.image.src;

              const hoverImgSrc =
                product.images && product.images.length > 1
                  ? typeof product.images[1] === "string"
                    ? product.images[1]
                    : product.images[1].src
                  : null;

              return (
                <a
                  key={product.id}
                  href={`/producto/${product.id}`}
                  className="group bg-white rounded-3xl border border-slate-100 hover:border-red-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col relative"
                >
                  {/* Etiqueta Flotante */}
                  <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {product.promoLabel || "¡Oferta!"}
                  </div>

                  {/* CONTENEDOR DE IMAGEN CON EFECTO HOVER */}
                  <div className="aspect-square bg-slate-50 relative overflow-hidden p-6">
                    {/* IMAGEN 1 */}
                    <img
                      src={mainImgSrc}
                      alt={product.name}
                      className={`w-full h-full object-contain mix-blend-multiply transition-all duration-700 ease-in-out ${hoverImgSrc ? "group-hover:opacity-0" : "group-hover:scale-110"}`}
                      loading="lazy"
                    />

                    {/* IMAGEN 2 (Solo aparece si existe) */}
                    {hoverImgSrc && (
                      <div className="absolute inset-0 p-6 opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 pointer-events-none mix-blend-multiply">
                        <img
                          src={hoverImgSrc}
                          alt={`${product.name} vista 2`}
                          className="w-full h-full object-contain mix-blend-multiply scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.08] group-hover:duration-2000"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col grow space-y-3">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-slate-800 leading-tight group-hover:text-[#2553A8] transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="mt-auto pt-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-500 line-through font-bold">
                          {formatCurrency(product.price ? product.price : 0)}
                        </span>
                        <span className="text-xl font-black text-red-600">
                          {formatCurrency(product.promoPrice!)}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}
      {/* 4. SECCIÓN CATEGORIAS PRINCIPALES */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-sm">
            Tipos de compresores
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter">
            Tenemos una solución para cada necesidad
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            En Compresores del Valle contamos con la más amplia gama de{" "}
            <span className="font-bold text-[#2553A8]">
              compresores de pistón, tornillo y libres de aceite
            </span>
            . Diseñados para talleres, industrias y aplicaciones exigentes.
          </p>
          <div className="h-1.5 w-24 bg-(--brand-yellow) mx-auto rounded-full mt-6"></div>
        </div>

        {/* Grid de Tarjetas Horizontales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {compressorTypes.map((type, idx) => {
            const imgSrc =
              typeof type.image === "string" ? type.image : type.image.src;
            return (
              <a
                key={idx}
                href={type.link}
                className="group flex flex-col sm:flex-row bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Lado Izquierdo: Imagen */}
                <div className="w-full sm:w-5/12 bg-slate-50 p-6 flex items-center justify-center relative overflow-hidden shrink-0">
                  <img
                    src={imgSrc}
                    alt={type.title}
                    loading="lazy"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Lado Derecho: Contenido */}
                <div className="w-full sm:w-7/12 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-[#2553A8] uppercase tracking-tight mb-3 group-hover:text-(--brand-yellow) transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 bg-(--brand-yellow) text-[#013189] font-black text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-xl group-hover:bg-[#d9a404] transition-colors shadow-md">
                      VER CATEGORÍA
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 4.5. SECCIÓN PRODUCTOS COMPLEMENTARIOS */}
      <section className="max-w-7xl mx-auto px-4 space-y-16 py-12">
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-sm">
            Productos Complementarios
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter">
            Todo lo que tu sistema de aire necesita
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Más allá del compresor, asegura la eficiencia y calidad de tu
            operación. Tenemos{" "}
            <span className="text-[#2553A8] font-bold">
              repuestos, tanques, motores, herramientas y accesorios{" "}
            </span>{" "}
            para un sistema completo y sin fallas.
          </p>
          <div className="h-1.5 w-24 bg-(--brand-yellow) mx-auto rounded-full mt-4"></div>
        </div>

        {/* Layout Dividido */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Lado Izquierdo */}
          <div className="w-full lg:w-5/12 grid grid-cols-2 gap-4">
            {complementaryCategories.map((cat, idx) => {
              const imgSrc =
                typeof cat.image === "string" ? cat.image : cat.image.src;

              return (
                <a
                  key={idx}
                  href={cat.link}
                  className="group bg-white rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-(--brand-yellow) transition-all duration-300 p-4 sm:p-6 flex flex-col items-center justify-center text-center gap-3 h-full min-h-40"
                >
                  <div className="h-16 sm:h-20 w-full flex items-center justify-center shrink-0">
                    <img
                      src={imgSrc}
                      alt=""
                      loading="lazy"
                      className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-[10px] sm:text-xs font-black text-[#2553A8] uppercase tracking-wide leading-tight group-hover:text-(--hover-yellow) transition-colors">
                    {cat.title}
                  </h3>
                </a>
              );
            })}
          </div>
          <div className="w-full lg:w-7/12 relative flex items-center justify-center bg-slate-50/50 rounded-[3rem] p-8 md:p-12 border border-slate-100 min-h-100 lg:min-h-125 overflow-hidden group">
            {/* Fondo decorativo (Círculo sutil) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
            <img
              src={compresoresHome.src}
              alt="Equipos complementarios Compresores del Valle"
              loading="lazy"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 relative z-10 mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* 5. Services Overview */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-sm">
            Soluciones Integrales
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#2553A8] uppercase tracking-tighter">
            Ecosistema de Servicios
          </h2>
          <div className="h-1.5 w-24 bg-(--brand-yellow) mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:border-[#2553A8] hover:bg-white hover:shadow-2xl transition-all group flex flex-col"
            >
              <div className="size-16 bg-white rounded-2xl flex items-center justify-center text-[#2553A8] shadow-sm mb-8 group-hover:bg-[#2553A8] group-hover:text-white transition-colors">
                <service.icon className="size-10" />
              </div>
              <h3 className="text-2xl font-black text-[#2553A8] uppercase mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 font-medium mb-8 grow leading-relaxed">
                {service.description}
              </p>
              <a
                href="/servicios"
                className="inline-flex items-center gap-2 text-[#2553A8] font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform"
              >
                Ver detalles técnicos <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="bg-slate-900 py-12 relative overflow-hidden text-white">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-(--brand-yellow) font-black uppercase tracking-[0.4em] text-xs italic">
                Evidencia Técnica
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Casos de <br />
                <span className="text-(--brand-yellow)">Transformación</span>
              </h2>
              <div className="h-2 w-32 bg-(--brand-yellow) rounded-full"></div>
            </div>

            <div className="flex gap-4">
              <button
                aria-label="Proyecto anterior"
                onClick={() => {
                  prevStory();
                  setExpandedDesc(false);
                }}
                className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-(--brand-yellow) hover:text-[#2553A8] transition-all"
              >
                <ArrowLeft className="size-8" />
              </button>
              <button
                aria-label="Siguiente proyecto"
                onClick={() => {
                  nextStory();
                  setExpandedDesc(false);
                }}
                className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-(--brand-yellow) hover:text-[#2553A8] transition-all shadow-2xl"
              >
                <ArrowRight className="size-8" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              {successStories.map((story, i) => (
                <div
                  key={i}
                  className={`${i === currentStory ? "block" : "hidden"} animate-in fade-in zoom-in-95 duration-700`}
                >
                  <BeforeAfterSlider
                    before={story.before}
                    after={story.after}
                  />
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 space-y-8">
              {successStories.map((story, i) => (
                <div
                  key={`info-${i}`}
                  className={`${i === currentStory ? "block" : "hidden"} space-y-6 animate-in slide-in-from-right-10 duration-700`}
                >
                  <div className="inline-block bg-(--brand-yellow) text-[#013189] font-black px-4 py-1 rounded text-[10px] uppercase">
                    PROYECTO 0{i + 1}
                  </div>
                  <h3 className="text-4xl md:text-4xl font-black uppercase leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-(--brand-yellow) font-bold text-xl">
                    {story.subtitle}
                  </p>

                  {/* --- LÓGICA DE VER MÁS / VER MENOS --- */}
                  <div className="space-y-2">
                    <p
                      className={`text-white/90 text-sm md:text-base leading-relaxed transition-all duration-300 ${expandedDesc ? "" : "line-clamp-3"}`}
                    >
                      {story.description}
                    </p>
                    <button
                      onClick={() => setExpandedDesc(!expandedDesc)}
                      className="text-(--brand-yellow) text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1 opacity-80 hover:opacity-100"
                    >
                      {expandedDesc ? "Ocultar descripción" : "Ver más..."}
                      <ChevronDown
                        className={`size-4 transition-transform ${expandedDesc ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  <div className="pt-4 flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                        Resultado
                      </span>
                      <span className="text-2xl font-black text-green-400">
                        100% OPERATIVO
                      </span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                        Garantía
                      </span>
                      <span className="text-2xl font-black">3 MESES</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 pt-8">
                {successStories.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ver proyecto ${i + 1}`}
                    onClick={() => {
                      setCurrentStory(i);
                      setExpandedDesc(false);
                    }}
                    className={`h-1.5 transition-all rounded-full ${i === currentStory ? "w-12 bg-(--brand-yellow)" : "w-4 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. POR QUÉ ELEGIRNOS (Textos inmersos y Flip Vertical 3D) --- */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* --- COLUMNA IZQUIERDA (Íconos 1 y 2) --- */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-8 order-2 lg:order-1">
              {whyChooseUsFeatures.slice(0, 2).map((feat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white lg:bg-transparent lg:cursor-pointer lg:[perspective:1000px] rounded-3xl p-4 lg:p-0 border border-slate-100 lg:border-none shadow-sm lg:shadow-none mb-4 lg:mb-0 lg:h-56"
                >
                  {/* MOBILE VIEW: Estático y limpio */}
                  <div className="flex lg:hidden flex-row items-center gap-4">
                    <div className="size-16 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-[#2553A8]">
                      <feat.icon className="size-10" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-black text-[#2553A8] uppercase text-[11px] tracking-widest mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-relaxed font-medium">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block relative w-full h-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] lg:group-hover:[transform:rotateX(180deg)]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white rounded-3xl border border-slate-100 shadow-sm [backface-visibility:hidden]">
                      <feat.icon
                        className="size-10 text-[#2553A8] mb-4 drop-shadow-sm"
                        style={{ fontSize: "60px" }}
                      />
                      <h3 className="font-black text-slate-700 uppercase text-xs tracking-widest px-2 text-center">
                        {feat.title}
                      </h3>
                    </div>

                    {/* DORSO: Título y Descripción */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-3xl border border-[#2553A8]/20 [backface-visibility:hidden] [transform:rotateX(180deg)]">
                      <h3 className="font-black text-[#2553A8] uppercase text-xs tracking-widest mb-3 leading-tight text-center">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium text-center">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- COLUMNA CENTRAL (Textos inmersos + Collage) --- */}
            <div className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2">
              <div className="text-center space-y-3 mb-4 md:mb-8 px-4">
                <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  Por qué elegirnos
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#2553A8] uppercase tracking-tighter">
                  TU ESPECIALISTA EN COMPRESORES
                </h2>
                <p className="text-slate-500 font-medium text-sm max-w-lg mx-auto leading-relaxed">
                  Miles de equipos operando a nivel nacional. Respaldados por{" "}
                  <strong className="text-[#2553A8]">
                    más de 25 años de experiencia{" "}
                  </strong>{" "}
                  y consolidados como una empresa lider en el sector.
                </p>
              </div>

              {/* Collage 3D */}
              <div className="w-full transform scale-90 md:scale-100">
                <CollageInteractivo />
              </div>
            </div>

            {/* --- COLUMNA DERECHA (Íconos 3 y 4) --- */}
            <div className="lg:col-span-3 flex flex-col gap-4 lg:gap-8 order-3">
              {whyChooseUsFeatures.slice(2, 4).map((feat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white lg:bg-transparent lg:cursor-pointer lg:[perspective:1000px] rounded-3xl p-4 lg:p-0 border border-slate-100 lg:border-none shadow-sm lg:shadow-none mb-4 lg:mb-0 lg:h-56"
                >
                  {/* MOBILE VIEW */}
                  <div className="flex lg:hidden flex-row items-center gap-4">
                    <div className="size-16 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-[#2553A8]">
                      <feat.icon className="size-10" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-black text-[#2553A8] uppercase text-[11px] tracking-widest mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-[10px] leading-relaxed font-medium">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP VIEW (Flip Hacia Arriba) */}
                  <div className="hidden lg:block relative w-full h-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d] lg:group-hover:[transform:rotateX(180deg)]">
                    {/* FRENTE */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-white rounded-3xl border border-slate-100 shadow-sm [backface-visibility:hidden]">
                      <feat.icon
                        className="size-10 text-[#2553A8] mb-4 drop-shadow-sm"
                        style={{ fontSize: "60px" }}
                      />
                      <h3 className="font-black text-slate-700 uppercase text-xs tracking-widest px-2 text-center">
                        {feat.title}
                      </h3>
                    </div>

                    {/* DORSO */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white shadow-2xl rounded-3xl border border-[#2553A8]/20 [backface-visibility:hidden] [transform:rotateX(180deg)]">
                      <h3 className="font-black text-[#2553A8] uppercase text-xs tracking-widest mb-3 leading-tight text-center">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-[11px] leading-relaxed font-medium text-center">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Sectors and Clients */}
      <section className="space-y-24 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4">
            <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-xs">
              Mercados Atendidos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#2553A8] uppercase tracking-tighter">
              NUESTROS SECTORES
            </h2>
            <div className="h-1.5 w-24 bg-(--brand-yellow) mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all"
              >
                <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#2553A8] group-hover:bg-[#2553A8] group-hover:text-white transition-all shrink-0">
                  <sector.icon className="size-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-[#2553A8] uppercase leading-tight">
                    {sector.name}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm">
                    {sector.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border-y border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-4 space-y-12">
            <div className="text-center space-y-2">
              <span className="bg-yellow-100 text-[#013189] px-3 py-1 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">
                Confianza Industrial
              </span>
              <h2 className="text-3xl font-black text-[#2553A8] uppercase tracking-tighter">
                Algunos de nuestros clientes
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
              {realClients.map((client, i) => {
                const logoSrc =
                  typeof client.logo === "string"
                    ? client.logo
                    : client.logo.src;
                return (
                  <div
                    key={i}
                    className="group bg-white p-4 h-24 rounded-2xl border border-slate-100 flex items-center justify-center transition-all hover:shadow-lg hover:border-(--brand-yellow)"
                  >
                    <img
                      src={logoSrc}
                      alt={client.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industrial Footer CTA */}
      <section className="px-4 max-w-7xl mx-auto">
        <div className="bg-[#2553A8] rounded-[4rem] p-16 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            POTENCIA TU OPERACIÓN HOY
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Únete a las cientos de empresas en el Valle que confían en nuestro
            trabajo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+573127536787"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--brand-yellow) hover:bg-[#D9A404] text-[#2553A8] font-black py-5 px-12 rounded-2xl text-xl shadow-lg active:scale-95 transition-all"
            >
              LLAMAR AHORA
            </a>
            <a
              href="/contacto"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-black py-5 px-12 rounded-2xl text-xl backdrop-blur-md"
            >
              SEDES Y HORARIOS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
