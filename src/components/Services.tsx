import React, { useEffect, useState } from "react";
import { SERVICES, serviceGalleries, headerPhotos, INITIAL_SERVICE_INDICES } from "../data/constants";
import { type ImageSource } from "../data/types";

export const Services: React.FC = () => {
  const [headerIndex, setHeaderIndex] = useState(0);
  const [serviceIndices, setServiceIndices] = useState<Record<string, number>>(INITIAL_SERVICE_INDICES);
  // Efecto para leer la URL y hacer scroll
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const catId = params.get("cat");
    if (catId) {
      const element = document.getElementById(catId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 500); // Un poco más de tiempo para asegurar que la página cargó
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
      {" "}
      {/* pt-20 para compensar el navbar fijo */}
      {/* --- HEADER ANIMADO --- */}
      <header className="relative h-[70vh] md:h-[70vh] bg-[#2553A8] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 flex">
          {/* Panel 1 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-12 -ml-20 border-r-8 border-[#2553A8] group">
            {headerPhotos.mantenimiento.map((img, i) => {
              const imgSrc =
                typeof img === "string" ? img : img.src;
              return (
                <img
                  key={`h-m-${i}`}
                  src={imgSrc}
                  alt="Mantenimiento de compresores"
                  className={`absolute inset-0 h-full w-full object-cover skew-x-12 scale-150 transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.5]" : "opacity-0 scale-[1.6]"}`}
                />
              );
            })}
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -skew-x-12 text-white font-black text-[8px] uppercase tracking-[0.3em] opacity-40"></div>
          </div>

          {/* Panel 2 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-12 border-r-8 border-[#2553A8] group">
            {headerPhotos.tuberias.map((src, i) => {
              const imgSrc =
                typeof src === "string" ? src : src.src;
            return(
              <img
                key={`h-p-${i}`}
                src={imgSrc}
                alt="Instalación de tuberías de aire en polipropileno"
                className={`absolute inset-0 h-full w-full object-cover skew-x-12 scale-150 transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.5]" : "opacity-0 scale-[1.6]"}`}
              />
            );
            })}
            <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -skew-x-12 text-white font-black text-[8px] uppercase tracking-[0.3em] opacity-40"></div>
          </div>

          {/* Panel 3 */}
          <div className="relative flex-1 h-full overflow-hidden -skew-x-12 -mr-20 group">
            {headerPhotos.lavaderos.map((src, i) => {
              const imgSrc =
                typeof src === "string" ? src : src.src;
              return (
              <img
                key={`h-w-${i}`}
                src={imgSrc}
                alt="Instalación de lavaderos para carros y motos"
                className={`absolute inset-0 h-full w-full object-cover skew-x-12 scale-150 transition-all duration-1000 ${i === headerIndex ? "opacity-60 scale-[1.5]" : "opacity-0 scale-[1.6]"}`}
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
                    const imgSrc =
                typeof img === "string" ? img : img.src;
                    return(
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
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${i === currentIndex ? "w-8 bg-(--brand-yellow)" : "w-2 bg-white/50"}`}
                      />
                    ))}
                  </div>

                  <div className="absolute -bottom-6 -right-6 size-32 bg-(--brand-yellow) rounded-3xl flex items-center justify-center text-[#2553A8] shadow-2xl z-30 group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined text-5xl font-black">
                      {service.icon}
                    </span>
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
                      <span className="material-symbols-outlined text-[#2553A8] font-black transition-transform group-hover/feat:scale-125">
                        check_circle
                      </span>
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
                    className="inline-flex items-center gap-4 bg-[#2553A8] hover:bg-[#1e4488] text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 uppercase tracking-widest text-sm"
                  >
                    SOLICITAR SERVICIO TÉCNICO{" "}
                    <span className="material-symbols-outlined font-black">
                      calendar_month
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* --- PROCESO DE TRABAJO (Estático, pero bonito) --- */}
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
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
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
                icon: "search",
              },
              {
                n: "02",
                t: "Cotización",
                d: "Propuesta formal y transparente ajustada a su presupuesto y necesidades.",
                icon: "description",
              },
              {
                n: "03",
                t: "Ejecución",
                d: "Intervención técnica ejecutada bajo procedimientos estandarizados por personal técnico calificado.",
                icon: "engineering",
              },
              {
                n: "04",
                t: "Entrega",
                d: "Verificación rigurosa de funcionamiento y entrega de reporte final.",
                icon: "verified",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 text-center space-y-6 group"
              >
                <div className="size-20 bg-[#2553A8] rounded-3xl mx-auto flex items-center justify-center border-4 border-(--brand-yellow) group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                  <span className="material-symbols-outlined text-3xl text-(--brand-yellow) font-black">
                    {step.icon}
                  </span>
                </div>
                <div className="space-y-3">
                  <span className="text-(--brand-yellow) font-black text-[10px] uppercase tracking-[0.3em] block">
                    {step.n} PASO
                  </span>
                  <h3 className="text-2xl font-black uppercase text-white leading-tight">
                    {step.t}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
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
            <span className="material-symbols-outlined text-5xl font-black">
              workspace_premium
            </span>
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
