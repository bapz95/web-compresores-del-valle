import React, { useState, useRef, useEffect } from "react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "Cotización de Compresores",
    message: "",
  });

  // Estado para los checkbox de validación
  const [validFields, setValidFields] = useState({
    name: false,
    email: false,
    phone: false,
  });

  // Estado para el envío
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Cotización de Compresores",
    "mantenimiento y/o reparación de compresores",
    "Repuestos y Accesorios",
    "Instalación de redes neumáticas",
    "Montaje de lavaderos",
  ];

  // --- LÓGICA DE VALIDACIÓN (Para mostrar el chulito) ---
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        // Regex estricto: requiere texto @ texto . extension
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      case "phone":
        // Solo números, entre 10 y 15 dígitos
        return /^[0-9]{10,15}$/.test(value);
      case "name":
        // Que no esté vacío
        return value.trim().length > 0;
      default:
        return false;
    }
  };

  // Handler unificado para validar mientras escribes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validar para mostrar icono verde
    if (name === "name" || name === "email" || name === "phone") {
      setValidFields((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }

    e.target.setCustomValidity("");
  };

  const handleInvalid = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    target.setCustomValidity("");

    if (target.validity.valueMissing) {
      target.setCustomValidity("Por favor, completa este campo");
    } else if (target.name === "email" && target.validity.patternMismatch) {
      target.setCustomValidity(
        "Introduce un correo válido con punto después del @ (ej: nombre@empresa.com)",
      );
    } else if (target.name === "phone" && target.validity.patternMismatch) {
      target.setCustomValidity(
        "Introduce un número de teléfono válido (mínimo 10 dígitos)",
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkovdnjy";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          subject: "Cotización de Compresores",
          message: "",
        });
        setValidFields({ name: false, email: false, phone: false }); // Resetear chulitos
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectOption = (opt: string) => {
    setFormData({ ...formData, subject: opt });
    setIsDropdownOpen(false);
  };

  const mapVentasUrl =
    "https://maps.google.com/maps?q=Calle%2034%20%23%204b-30%2C%20Barrio%20Porvenir%2C%20Cali&t=&z=17&ie=UTF8&iwloc=&output=embed";
  const mapTallerUrl =
    "https://maps.google.com/maps?q=Calle%2034%20%23%204C-16%2C%20Barrio%20Porvenir%2C%20Cali&t=&z=17&ie=UTF8&iwloc=&output=embed";
  const inputStyle =
    "w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-10 focus:ring-2 focus:ring-[#2553A8] font-bold text-slate-700 outline-none transition-all";

  return (
    <div className="max-w-7xl mx-auto px-4 pt-16 pb-20 space-y-24">
      <header className="text-center space-y-6">
        <span className="text-(--brand-yellow) font-black uppercase tracking-[0.3em] text-sm">
          ¿Cómo podemos ayudarte?
        </span>

        <h1 className="text-6xl md:text-8xl font-black text-(--brand-blue) uppercase tracking-tighter leading-none">
          Contacto Compresores Industriales en Cali
        </h1>
        <p className="text-slate-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Venta de compresores industriales, accesorios y repuestos, junto con
          servicio técnico especializado y soporte comercial desde Cali con
          cobertura a nivel nacional.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
        {/* --- FORMULARIO --- */}
        <div className="w-full max-w-xl mx-auto xl:mx-0 bg-white p-10 md:p-12 rounded-[4rem] border border-slate-100 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name_input"
                  className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    type="text"
                    id="name_input"
                    name="name"
                    autoComplete="name"
                    onInvalid={handleInvalid}
                    onChange={handleChange}
                    className={`${inputStyle} ${validFields.name ? "border-green-500" : ""}`}
                    value={formData.name}
                  />
                  {validFields.name && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-in zoom-in spin-in-90 duration-300 pointer-events-none">
                      <span className="material-symbols-outlined font-black text-xl">
                        check_circle
                      </span>
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company_input"
                  className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company_input"
                  name="company"
                  autoComplete="organization"
                  className={inputStyle}
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email_input"
                  className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    type="email"
                    id="email_input"
                    name="email"
                    autoComplete="email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    onInvalid={handleInvalid}
                    onChange={handleChange}
                    className={`${inputStyle} ${validFields.email ? "border-green-500" : ""}`}
                    value={formData.email}
                  />
                  {validFields.email && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-in zoom-in spin-in-90 duration-300 pointer-events-none">
                      <span className="material-symbols-outlined font-black text-xl">
                        check_circle
                      </span>
                    </span>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone_input"
                  className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
                >
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    type="tel"
                    id="phone_input"
                    name="phone"
                    autoComplete="tel"
                    pattern="[0-9]{10,15}"
                    onInvalid={handleInvalid}
                    onChange={handleChange}
                    className={`${inputStyle} ${validFields.phone ? "border-green-500" : ""}`}
                    value={formData.phone}
                    placeholder="Ej: 3124567890"
                  />
                  {validFields.phone && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-in zoom-in spin-in-90 duration-300 pointer-events-none">
                      <span className="material-symbols-outlined font-black text-xl">
                        check_circle
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject_input"
                className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
              >
                Requerimiento
              </label>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  id="subject_input"
                  name="subject"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`${inputStyle} text-left flex items-center justify-between`}
                >
                  <span>{formData.subject}</span>
                  <span
                    className={`material-symbols-outlined font-black transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-4xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="py-2">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => selectOption(opt)}
                          className={`w-full text-left px-8 py-4 text-sm font-bold transition-colors ${formData.subject === opt ? "bg-[#2553A8] text-white" : "text-slate-600 hover:bg-slate-50"}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message_input"
                className="text-[10px] font-black uppercase text-slate-400 tracking-widest pl-2"
              >
                Detalle
              </label>
              <textarea
                rows={4}
                className={inputStyle}
                value={formData.message}
                onChange={handleChange}
                placeholder="Descripción..."
                id="message_input"
                name="message"
                autoComplete="off"
              ></textarea>
            </div>

            <button
              disabled={status === "submitting" || status === "success"}
              className={`w-full text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-200 active:scale-95 uppercase tracking-widest cursor-pointer
                ${
                  status === "success"
                    ? "bg-green-500 hover:bg-green-600"
                    : status === "error"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-(--brand-blue) hover:bg-blue-900"
                }
                ${status === "submitting" ? "opacity-70 cursor-wait" : ""}
              `}
            >
              {status === "submitting"
                ? "ENVIANDO SOLICITUD..."
                : status === "success"
                  ? "¡MENSAJE ENVIADO!"
                  : status === "error"
                    ? "ERROR AL ENVIAR"
                    : "ENVIAR REQUERIMIENTO"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-xs font-bold text-center mt-2 animate-in fade-in">
                Gracias. Hemos recibido tu solicitud correctamente.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-xs font-bold text-center mt-2 animate-in fade-in">
                Hubo un error de conexión. Por favor intenta contactarnos por
                WhatsApp.
              </p>
            )}
          </form>
        </div>

        {/* --- INFO Y SEDES (ESTRUCTURA ORIGINAL) --- */}
        <div className="space-y-12 w-full max-w-xl mx-auto xl:mx-0">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-(--brand-yellow) rounded-full shrink-0"></div>
              <h2 className="text-4xl font-black text-(--brand-blue) uppercase tracking-tight">
                Nuestras Sedes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sede principal */}
              <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 hover:border-[#2553A8] transition-all h-full">
                <h3 className="font-black text-(--brand-blue) text-lg mb-2">
                  SEDE PRINCIPAL
                </h3>
                <p className="text-slate-500 text-xs font-bold mb-1">
                  Calle 34 # 4b-30, Cali
                </p>
                <p className="text-(--brand-blue) font-bold text-sm">
                  +57 312 753 6787
                </p>

                <div className="mt-4 h-48 bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-100 relative group">
                  <iframe
                    title="Ventas"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapVentasUrl}
                    className="transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Sede alternativa */}
              <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 hover:border-[#2553A8] transition-all h-full">
                <h3 className="font-black text-(--brand-blue) text-lg mb-2">
                  SEDE ALTERNA
                </h3>
                <p className="text-slate-500 text-xs font-bold mb-1">
                  Calle 34 # 4C-16, Cali
                </p>
                <p className="text-(--brand-blue) font-bold text-sm">
                  +57 317 467 5905
                </p>

                <div className="mt-4 h-48 bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-100 relative group">
                  <iframe
                    title="Taller"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapTallerUrl}
                    className="transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 bg-slate-900 p-8 rounded-[3rem] text-white">
              <div className="size-16 rounded-2xl bg-(--brand-yellow) flex items-center justify-center text-(--brand-blue) shrink-0">
                <span className="material-symbols-outlined text-4xl">
                  schedule
                </span>
              </div>
              <div className="grow">
                <h3 className="font-black text-(--brand-yellow) uppercase tracking-widest text-lg">
                  Horarios de Atención
                </h3>
                <div className="mt-4 space-y-2 text-white/70 font-medium text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Lunes a Viernes</span>
                    <span className="font-black text-white">
                      7:30 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-black text-white">
                      8:00 AM - 3:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
