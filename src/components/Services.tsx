import React, { useEffect, useState } from "react";
import {
  SERVICES,
  serviceGalleries,
  headerPhotos,
  INITIAL_SERVICE_INDICES,
} from "../data/services/services";

import { CalendarDays, CircleCheck, Search, Wrench } from "lucide-react";
import {
  MdOutlineDescription,
  MdOutlineVerified,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

// ESTRUCTURA DE DATOS PARA GOOGLE (SEO LOCAL)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Servicio Técnico de Compresores Industriales",
  provider: {
    "@type": "LocalBusiness",
    name: "Compresores del Valle",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    telephone: "+573127536787",
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Industriales",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
      position: index + 1,
    })),
  },
};

export const Services: React.FC = () => {
  const [headerIndex, setHeaderIndex] = useState(0);
  const [serviceIndices, setServiceIndices] = useState<Record<string, number>>(
    INITIAL_SERVICE_INDICES,
  );
  // Efecto para leer la URL y hacer scroll
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get("cat");
    if (catId) {
      const element = document.getElementById(catId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 500);
      }
    }
  }, []);

  // Rotación del Header
  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Rotación de tarjetas
  useEffect(() => {
    const interval = setInterval(() => {
      setServiceIndices((prev) => {
        const next = { ...prev };
        Object.keys(serviceGalleries).forEach((id) => {
          next[id] = (prev[id] + 1) % serviceGalleries[id].length;
        });
        return next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />{" "}
      {/* --- HEADER ANIMADO --- */}
      <header className="relative h-[70vh] md:h-[70vh] bg-[#2553A8] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex">
          {/* Panel 1 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-10 -ml-20 border-r-8 border-[#2553A8] group">
            {headerPhotos.mantenimiento.map((img, i) => {
              const imgSrc = typeof img === "string" ? img : img.src;
              return (
                <img
                  key={`h-m-${i}`}
                  src={imgSrc}
                  alt="Mantenimiento de compresores"
                  fetchPriority="high"
                  loading="eager"
                  className={`absolute inset-0 h-full w-full object-cover skew-x-10 transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.4]" : "opacity-0 scale-[1.5]"}`}
                />
              );
            })}
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -skew-x-12 text-white font-black text-[8px] uppercase tracking-[0.3em] opacity-40"></div>
          </div>

          {/* Panel 2 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-10 border-r-8 border-[#2553A8] group">
            {headerPhotos.tuberias.map((src, i) => {
              const imgSrc = typeof src === "string" ? src : src.src;
              return (
                <img
                  key={`h-p-${i}`}
                  src={imgSrc}
                  alt="Instalación de tuberías de aire en polipropileno"
                  fetchPriority="high"
                  loading="eager"
                  className={`absolute inset-0 h-full w-full object-cover skew-x-10 transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.4]" : "opacity-0 scale-[1.5]"}`}
                />
              );
            })}
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -skew-x-12 text-white font-black text-[8px] uppercase tracking-[0.3em] opacity-40"></div>
          </div>

          {/* Panel 3 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-10 -mr-20 group">
            {headerPhotos.lavaderos.map((src, i) => {
              const imgSrc = typeof src === "string" ? src : src.src;
              return (
                <img
                  key={`h-w-${i}`}
                  src={imgSrc}
                  alt="Instalación de lavaderos para carros y motos"
                  fetchPriority="high"
                  loading="eager"
                  className={`absolute inset-0 h-full w-full object-cover skew-x-10  transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.4]" : "opacity-0 scale-[1.5]"}`}
                />
              );
            })}
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -skew-x-12 text-white font-black text-[8px] uppercase tracking-[0.3em] opacity-40"></div>
          </div>
        </div>

        {/* Contenido Central */}
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            Servicio Técnico Especializado en <br />
            <span className="text-(--brand-yellow)">
              compresores industriales
            </span>
          </h1>
          <p className="text-blue-50 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
            Diagnóstico profesional con altos estándares de calidad, eficiencia
            y confiabilidad operativa.
          </p>
        </div>
      </header>
      {/* --- LISTA DE SERVICIOS --- */}
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#2553A8] uppercase tracking-tight">
          Nuestros servicios en Cali y cobertura a nivel nacional
        </h2>
        <div className="h-2 w-24 bg-(--brand-yellow) rounded-full mx-auto"></div>
      </div>
      <section className="max-w-7xl mx-auto px-4 space-y-32">
        {SERVICES.map((service, idx) => {
          const gallery = serviceGalleries[service.id] || [service.imageUrl];
          const currentIndex = serviceIndices[service.id] || 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-20 items-center scroll-mt-40 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-[#2553A8] opacity-10 rounded-[4rem] translate-x-8 translate-y-8 transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>

                {/* Image Gallery Container */}
                <div className="relative z-10 h-125 overflow-hidden rounded-[4rem] shadow-2xl bg-slate-100">
                  {gallery.map((img, i) => {
                    const imgSrc = typeof img === "string" ? img : img.src;
                    return (
                      <img
                        key={`${service.id}-img-${i}`}
                        src={imgSrc}
                        alt={service.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${i === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
                      />
                    );
                  })}

                  {/* Indicator dots */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {gallery.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() =>
                          setServiceIndices((prev) => ({
                            ...prev,
                            [service.id]: i,
                          }))
                        }
                        className="p-3 flex items-center justify-center cursor-pointer"
                        aria-label={`Ver foto ${i + 1}`}
                      >
                        <div
                          className={`h-1.5 rounded-full transition-all ${
                            i === currentIndex
                              ? "w-8 bg-(--brand-yellow)"
                              : "w-2 bg-white/50"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="absolute -bottom-6 -right-6 size-32 bg-(--brand-yellow) rounded-3xl flex items-center justify-center text-[#2553A8] shadow-2xl z-30 group-hover:rotate-12 transition-transform">
                    <service.icon className="size-12 shrink-0" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-[#2553A8] uppercase tracking-tight leading-none">
                    {service.title}
                  </h3>
                  <div className="h-2 w-24 bg-(--brand-yellow) rounded-full"></div>
                </div>
                <p className="text-slate-500 text-xl leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-[#2553A8] transition-colors group/feat"
                    >
                      <CircleCheck className="size-6 text-[#2553A8] transition-transform group-hover/feat:scale-125 shrink-0" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={`https://wa.me/573127536787?text=Hola,%20deseo%20información%20sobre%20el%20servicio:%20${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#2553A8] hover:bg-[#1e4488] text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 uppercase tracking-widest text-sm"
                  >
                    SOLICITAR SERVICIO TÉCNICO{" "}
                    <CalendarDays className="size-6 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* --- PROCESO DE TRABAJO  --- */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-(--brand-yellow)"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6 mb-24">
            <span className="text-(--brand-yellow) font-black uppercase tracking-[0.4em] text-xs">
              Nuestro Estándar de Oro
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter">
              Protocolo de Trabajo
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Realizamos nuestros servicios bajo procedimientos técnicos
              estandarizados, asegurando calidad, trazabilidad y confiabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="absolute top-10 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block"></div>

            {[
              {
                n: "01",
                t: "Diagnóstico",
                d: "Inspección técnica detallada para identificar fallas y oportunidades de mejora.",
                icon: Search,
              },
              {
                n: "02",
                t: "Cotización",
                d: "Propuesta formal y transparente ajustada a su presupuesto y necesidades.",
                icon: MdOutlineDescription,
              },
              {
                n: "03",
                t: "Ejecución",
                d: "Intervención técnica ejecutada bajo procedimientos estandarizados por personal técnico calificado.",
                icon: Wrench,
              },
              {
                n: "04",
                t: "Entrega",
                d: "Verificación rigurosa de funcionamiento y entrega de reporte final.",
                icon: MdOutlineVerified,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 text-center space-y-6 group"
              >
                <div className="size-20 bg-[#2553A8] rounded-3xl mx-auto flex items-center justify-center border-4 border-(--brand-yellow) group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <step.icon className="size-8 text-(--brand-yellow)" />
                </div>
                <div className="space-y-3">
                  <span className="text-(--brand-yellow) font-black text-[10px] uppercase tracking-[0.3em] block">
                    {step.n} PASO
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white leading-tight">
                    {step.t}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-medium">
                    {step.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- GARANTÍA --- */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border-4 border-dashed border-slate-200 text-center space-y-8">
          <div className="size-20 bg-white rounded-full mx-auto flex items-center justify-center text-(--brand-yellow) shadow-lg">
            <MdOutlineWorkspacePremium className="size-12" />
          </div>
          <h3 className="text-3xl font-black text-[#2553A8] uppercase">
            Garantía de Satisfacción Total
          </h3>
          <p className="text-slate-500 text-lg italic">
            "Brindamos garantía en los servicios prestados, respaldando la
            calidad técnica de cada intervención realizada."
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-(--brand-yellow) rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
