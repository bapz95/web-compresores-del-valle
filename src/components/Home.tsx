import React, { useState, useEffect, useRef } from "react";
import { SERVICES, PRODUCTS } from "../data/constants";
import { formatCurrency } from "../utils/formatters";
//clientes
import Alfredo_M from "../assets/home/clientes/Alfredo-martinez.webp";
import cubik from "../assets/home/clientes/cubik.webp";
import ingenio_ML from "../assets/home/clientes/ingenio-maria-luisa.webp";
import instaltek from "../assets/home/clientes/instaltek.webp";
import intermodal from "../assets/home/clientes/intermodal.webp";
import proestibas from "../assets/home/clientes/proestibas.webp";
import riopaila from "../assets/home/clientes/riopaila.webp";
import vallegres from "../assets/home/clientes/vallegres.webp";

// --- COMPONENTE ANTES/DESPUÉS ---
const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({
  before,
  after,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="relative aspect-video rounded-[3rem] overflow-hidden cursor-ew-resize select-none border-8 border-white shadow-2xl bg-slate-200 group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <div className="absolute inset-0 w-full h-full">
        <img src={before} alt="Antes" className="w-full h-full object-cover" />
        <div className="absolute top-8 right-8 z-10 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest border border-white/20">
          Estado Inicial
        </div>
      </div>
      <div
        className="absolute inset-0 w-full h-full z-20"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={after} alt="Después" className="w-full h-full object-cover" />
        <div className="absolute top-8 left-8 z-30 bg-(--brand-yellow) text-[#2553A8] text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-xl">
          Restauración CDV
        </div>
      </div>
      <div
        className="absolute inset-y-0 w-1.5 bg-white shadow-[0_0_30px_rgba(0,0,0,0.5)] z-40 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 bg-[#2553A8] rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white">
          <span className="material-symbols-outlined text-white font-black text-3xl rotate-90">
            unfold_more
          </span>
        </div>
      </div>
    </div>
  );
};

// --- DATOS ---
const successStories = [
  {
    title: "Overhaul de Cabezote de Pistón",
    subtitle: "Restauración de compresión y estética industrial",
    description:
      "Equipo con 5 años de abandono. Se realizó limpieza por ultrasonido, rectificación de válvulas y pintura térmica.",
    before:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800",
    after:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Modernización de Red de Aire",
    subtitle: "Eliminación de fugas y caída de presión",
    description:
      "Sustitución de tubería de hierro galvanizado oxidado por sistema de polipropileno termofusionado de alta eficiencia.",
    before:
      "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?auto=format&fit=crop&q=80&w=800",
    after:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Restauración de Motor Eléctrico",
    subtitle: "Mantenimiento preventivo IE3",
    description:
      "Bobinado completo y cambio de rodamientos SKF para un motor de 50HP en sector azucarero.",
    before:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    after:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
];

const slides = [
  {
    title: "Venta de Compresores Industriales de Alto Rendimiento",
    subtitle: "Soluciones en Aire Comprimido",
    description:
      "Comercializamos compresores de aire industriales, secadores, filtros y sistemas de aire comprimido diseñados para operación continua, alto rendimiento en entornos industriales.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    primaryCta: {
      text: "VER CATÁLOGO",
      link: "/productos",
    },
    secondaryCta: {
      text: "COTIZAR EQUIPO",
      link: "https://wa.me/573127536787?text=Hola,%20me%20interesa%20cotizar%20un%20equipo",
    },
  },
  {
    title: "Soporte Técnico Especializado",
    subtitle: "Mantenimiento y Reparación de compresores industriales",
    description:
      "Diagnóstico, mantenimiento preventivo y correctivo, y reparación de compresores industriales para garantizar lacontinuidad operativa.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600",
    primaryCta: {
      text: "VER SERVICIOS TÉCNICOS",
      link: "/servicios",
    },
    secondaryCta: {
      text: "SOLICITAR SERVICIO",
      link: "https://wa.me/573127536787?text=Hola,%20me%20interesa%20solicitar%20un%20servicio",
    },
  },
  {
    title: "Soporte industrial confiable para su operación",
    subtitle: "Más de 25 años respaldando la industria",
    description:
      "Acompañamos a la industria con soporte técnico confiable, repuestos certificados y atención especializada para garantizar la continuidad de sus procesos productivos.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1600",
    primaryCta: {
      text: "CONOCE NUESTRA EMPRESA",
      link: "/nosotros",
    },
    secondaryCta: {
      text: "HABLAR CON UN ASESOR",
      link: "https://wa.me/573127536787?text=Hola,%20me%20interesa%20cotizar%20un%20equipo",
    },
  },
];

const sectors = [
  {
    name: "Sector Azucarero",
    icon: "agriculture",
    desc: "Ingenios y Molienda",
  },
  {
    name: "Alimentos y Bebidas",
    icon: "bakery_dining",
    desc: "Plantas de Producción",
  },
  {
    name: "Farmacéutica",
    icon: "medical_services",
    desc: "Aire de Alta Pureza",
  },
  {
    name: "Automotriz",
    icon: "precision_manufacturing",
    desc: "Ensamblaje y Pintura",
  },
  { name: "Metalmecánica", icon: "construction", desc: "Corte y Soldadura" },
  { name: "Logística", icon: "inventory_2", desc: "Empaque y Distribución" },
];

const realClients = [
  { name: "Alfredo Martinez", logo: Alfredo_M },
  { name: "Cubik", logo: cubik },
  { name: "Ingenio María Luisa", logo: ingenio_ML },
  { name: "Instaltek", logo: instaltek },
  { name: "Intermodal", logo: intermodal },
  { name: "Pro Estibas", logo: proestibas },
  { name: "Río Paila", logo: riopaila },
  { name: "Vallegres", logo: vallegres },
];

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
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Gradiente (Quieto) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2553A8] via-[#2553A8]/50 to-black/30"></div>

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
                    className="bg-(--brand-yellow) hover:bg-[#D9A404] text-[#2553A8] font-black py-4 px-8 md:py-5 md:px-12 rounded-2xl transition-all shadow-xl shadow-yellow-500/20 active:scale-95 uppercase tracking-widest text-xs md:text-sm"
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

        {/* Navigation Arrows (Se mantienen igual) */}
        <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1,
              )
            }
            className="pointer-events-auto size-10 md:size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#F2B705] hover:text-[#2553A8] transition-all flex items-center justify-center group"
          >
            <span className="material-symbols-outlined font-black text-xl md:text-3xl group-hover:-translate-x-1 transition-transform">
              chevron_left
            </span>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="pointer-events-auto size-10 md:size-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-[#F2B705] hover:text-[#2553A8] transition-all flex items-center justify-center group"
          >
            <span className="material-symbols-outlined font-black text-xl md:text-3xl group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
        </div>
      </section>

      {/* 2. Stats Counter */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 -mt-32 relative z-30 p-10 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-6xl font-black text-[#2553A8]">
              25+
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
              Años de Trayectoria
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-black text-[#2553A8]">
              500+
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
              Empresas Aliadas
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-6xl font-black text-[#2553A8]">
              1.2k +
            </p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">
              Equipos Instalados
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN DE PROMOCIONES (Solo se muestra si hay productos con promoPrice) */}
      {promoProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-sm animate-pulse">
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
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {promoProducts.map((product) => {
              // Manejo de imagen híbrida (IMPORTANTE PARA EVITAR ERRORES)
              const imgSrc =
                typeof product.image === "string"
                  ? product.image
                  : product.image.src;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-3xl border border-slate-100 hover:border-red-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col relative"
                >
                  {/* Etiqueta Flotante */}
                  <div className="absolute top-4 right-4 z-10 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    ¡Oferta!
                  </div>

                  <div className="aspect-square bg-slate-50 relative overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={product.name}
                      className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow space-y-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-slate-800 leading-tight group-hover:text-[#2553A8] transition-colors line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="mt-auto pt-2">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 line-through font-bold">
                          ${formatCurrency(product.price)}
                        </span>
                        <span className="text-xl font-black text-red-600">
                          ${formatCurrency(product.promoPrice!)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
      {/* 4. Services Overview */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-(--brand-yellow) font-black uppercase tracking-[0.3em] text-sm">
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
                <span className="material-symbols-outlined text-4xl font-black">
                  {service.icon}
                </span>
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
                Ver detalles técnicos{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUCCESS STORIES */}
      <section className="bg-slate-900 py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <span className="text-(--brand-yellow) font-black uppercase tracking-[0.4em] text-xs italic">
                Evidencia Técnica
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Casos de <br />
                <span className="text-(--brand-yellow)">Transformación</span>
              </h2>
              <div className="h-2 w-32 bg-(--brand-yellow) rounded-full"></div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevStory}
                className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-(--brand-yellow) hover:text-[#2553A8] transition-all"
              >
                <span className="material-symbols-outlined font-black text-3xl">
                  arrow_back
                </span>
              </button>
              <button
                onClick={nextStory}
                className="size-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-(--brand-yellow) hover:text-[#2553A8] transition-all shadow-2xl"
              >
                <span className="material-symbols-outlined font-black text-3xl">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
                  <div className="inline-block bg-(--brand-yellow) text-[#2553A8] font-black px-4 py-1 rounded text-[10px] uppercase">
                    PROYECTO 0{i + 1}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-(--brand-yellow) font-bold text-xl">
                    {story.subtitle}
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {story.description}
                  </p>

                  <div className="pt-4 flex items-center gap-8">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">
                        Resultado
                      </span>
                      <span className="text-2xl font-black text-green-400">
                        100% OPERATIVO
                      </span>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">
                        Garantía
                      </span>
                      <span className="text-2xl font-black">12 MESES</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 pt-8">
                {successStories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentStory(i)}
                    className={`h-1.5 transition-all rounded-full ${i === currentStory ? "w-12 bg-(--brand-yellow)" : "w-4 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Experience Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-(--brand-yellow)/10 rounded-[4rem] translate-x-6 translate-y-6"></div>
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
              className="rounded-[4rem] shadow-2xl relative z-10 w-full object-cover h-125"
              alt="Planta de Compresores"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black text-[#2553A8] leading-tight uppercase">
              EXPERIENCIA QUE <br />
              <span className="text-(--brand-yellow)">TRANSFORMA</span>{" "}
              INDUSTRIAS
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              En Compresores del Valle S.A.S. entendemos que cada segundo de
              operación cuenta. Por eso, más que vender equipos, brindamos
              soluciones técnicas en aire comprimido que aseguran la continuidad
              operativa y la confiabilidad de su planta.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: "verified",
                  t: "Soporte técnico especializado en aire comprimido industrial",
                },
                { icon: "speed", t: "Respuesta Técnica en menos de 4 horas" },
                {
                  icon: "engineering",
                  t: "Mantenimiento preventivo y correctivo industrial",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-bold"
                >
                  <span className="material-symbols-outlined text-(--brand-yellow) text-3xl font-black">
                    {item.icon}
                  </span>
                  {item.t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Sectors and Clients */}
      <section className="space-y-24 py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center space-y-4">
            <span className="text-(--brand-yellow) font-black uppercase tracking-[0.3em] text-xs">
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
                  <span className="material-symbols-outlined text-6xl font-black">
                    {sector.icon}
                  </span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-[#2553A8] uppercase leading-tight">
                    {sector.name}
                  </h4>
                  <p className="text-slate-400 font-medium text-sm">
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
              <span className="text-(--brand-yellow) font-black uppercase tracking-[0.3em] text-[10px]">
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
                      className="max-h-full max-w-full object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industrial Footer CTA */}
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
              href="https://wa.me/573127536787"
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
