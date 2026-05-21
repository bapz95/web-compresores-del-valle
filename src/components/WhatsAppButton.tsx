import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X, ChevronRight, Store } from "lucide-react";

const getAvailabilityColombia = () => {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    weekday: "short",
  });

  const parts = formatter.formatToParts(now);

  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const minute = Number(parts.find((p) => p.type === "minute")?.value);
  const weekday = parts.find((p) => p.type === "weekday")?.value;

  const currentTime = hour * 60 + minute;

  const weekdayStart = 7 * 60 + 30; // 7:30
  const weekdayEnd = 18 * 60; // 18:00
  const saturdayStart = 8 * 60; // 8:00
  const saturdayEnd = 15 * 60; // 15:00

  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const day = dayMap[weekday || ""];

  if (day >= 1 && day <= 5) {
    if (currentTime >= weekdayStart && currentTime <= weekdayEnd) {
      return true;
    }
  }

  if (day === 6) {
    if (currentTime >= saturdayStart && currentTime <= saturdayEnd) {
      return true;
    }
  }

  return false;
};

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAvailable, setIsAvailable] = useState(getAvailabilityColombia());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAvailable(getAvailabilityColombia());
    }, 60000); // actualiza cada minuto

    return () => clearInterval(interval);
  }, []);

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Datos de las líneas
  const lines = [
    {
      name: "Sede Principal",
      phone: "573127536787",
      message: "Hola, me interesa cotizar un equipo...",
      icon: Store,
      color: "text-blue-600",
    },
    {
      name: "Sede Alterna",
      phone: "573174675905",
      message: "Hola, me interesa cotizar un equipo...",
      icon: Store,
      color: "text-orange-500",
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-8 right-6 z-60 flex flex-col items-end gap-4 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* --- MENÚ DESPLEGABLE --- */}
      <div
        className={`
        bg-white rounded-4xl shadow-2xl border border-slate-100 p-2 w-72 origin-bottom-right transition-all duration-300 ease-out
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-10 pointer-events-none"}
      `}
      >
        {/* Cabecera del chat */}
        <div className="bg-[#128c3f] text-white p-4 rounded-t-3xl rounded-b-xl mb-2 text-center">
          <p className="font-bold text-sm">
            👋 ¡Hola! ¿Con qué sede deseas hablar?
          </p>
          <p className="text-[10px] opacity-80 mt-1">
            Solemos responder en minutos
          </p>
        </div>

        {/* Opciones */}
        <div className="flex flex-col gap-1">
          {lines.map((line, index) => (
            <a
              key={index}
              href={`https://wa.me/${line.phone}?text=${encodeURIComponent(line.message)}`}
              aria-label={`Chatear con ${line.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-colors group"
            >
              <div className="size-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">
                <line.icon className={`${line.color} size-5`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black text-slate-700 uppercase tracking-wide group-hover:text-[#2553A8] transition-colors">
                  {line.name}
                </span>
                <span
                  className={`text-[10px] font-medium flex items-center gap-1 ${isAvailable ? "text-green-500" : "text-red-500"}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-500 animate-pulse" : "bg-red-500"}`}
                  ></span>
                  {isAvailable ? "Disponible" : "No disponible"}
                </span>
              </div>
              <ChevronRight size={18} className="text-slate-300 ml-auto" />
            </a>
          ))}
        </div>
      </div>

      {/* --- BOTÓN FLOTANTE PRINCIPAL --- */}
      <button
        onClick={toggleMenu}
        className="pointer-events-auto relative group size-16 bg-(--wa-green) hover:bg-(--wa-green-ping) text-white rounded-4xl shadow-[0_10px_30px_(--wa-green-shadow)] flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp con Compresores del Valle"
        title="Chat de WhatsApp"
      >
        {/* Icono que cambia (WhatsApp o X) */}
        <span
          className={`text-3xl transition-transform duration-300 absolute ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
        >
          <FaWhatsapp className="text-4xl" />
        </span>
        <span
          className={`transition-transform duration-300 absolute ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
        >
          <X size={30} />
        </span>

        {/* Onda de animación (Ping) */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-4xl bg-(--wa-green) animate-ping opacity-30 -z-10"></span>
        )}

        {/* Tooltip (Mensaje flotante a la izquierda) */}
        <div
          className={`absolute right-full mr-4 bg-white text-slate-700 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wide shadow-lg border border-slate-100 whitespace-nowrap transition-all duration-300 ${isOpen ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
        >
          ¿Necesitas ayuda?
          <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white rotate-45 -translate-y-1/2 border-t border-r border-slate-100"></div>
        </div>
      </button>
    </div>
  );
};
