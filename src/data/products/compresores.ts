import { getImage } from "../shared/images";
import { Category, SubCategory, type Product } from "../types";

export const COMPRESORES: Product[] = [
  {
    id: "compresor-monofasico-1hp",
    name: "Compresor Monofásico 1 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo de uso industrial  es perfecto para alimentar herramientas neumáticas como pistolas de pintura de baja presion, infladores, sopletes de limpieza y equipos de mantenimiento en talleres, hogares o pequeños negocios. Su funcionamiento monofásico permite conectarlo fácilmente a la red eléctrica convencional, haciéndolo práctico y versátil.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-monofasico-1hp.webp",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-monofasico-1hp.webp"),
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-atras.webp",
      ),
    ],
    specs: {
      Potencia: "1 HP",
      Cabezote: "1065",
      Cilindros: "1(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "3 CFM",
      Motor: "WEG Brasilero 110/220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "10 GL/38 L",
      "Presión Minima": "80 PSI",
      "Presión Maxima": "100 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },
  {
    id: "compresor-monofasico-1hp-sencillo",
    name: "Compresor Monofásico 1 HP sencillo",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo de uso industrial  es perfecto para alimentar herramientas neumáticas como pistolas de pintura de baja presion, infladores, sopletes de limpieza y equipos de mantenimiento en talleres, hogares o pequeños negocios. Su funcionamiento monofásico permite conectarlo fácilmente a la red eléctrica convencional, haciéndolo práctico y versátil.",
    price: 1300000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-monofasico-1hp-sencillo.webp",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-sencillo.webp",
      ),
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-sencillo-atras.webp",
      ),
    ],
    specs: {
      Potencia: "1 HP",
      Cabezote: "1065",
      Cilindros: "1(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "3 CFM",
      Motor: "IRVINE 110/220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "10 GL/38 L",
      "Presión Minima": "80 PSI",
      "Presión Maxima": "100 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-gasolina-1hp",
    name: "Compresor Gasolina 1 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.DIESEL_GASOLINA,
    brand: "",
    description:
      "Este equipo de uso industrial, equipado con un potente motor a gasolina de 6.5 HP, está diseñado para ofrecer máxima autonomía en lugares sin acceso a energía eléctrica. Este compresor garantiza un flujo de aire constante para alimentar herramientas neumáticas, equipos de pintura y tareas de mantenimiento en fincas, obras civiles o unidades móviles de servicio. Es la solución robusta y versátil para quienes necesitan potencia garantizada en cualquier lugar.",
    price: 3200000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/diesel-gasolina/compresor-diesel-gasolina-1hp.webp",
    ),
    images: [
      getImage(
        "productos/compresores/diesel-gasolina/compresor-diesel-gasolina-1hp.webp",
      ),
    ],
    specs: {
      Potencia: "1 HP",
      Cabezote: "1065",
      Cilindros: "1(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "3 CFM",
      Motor: "Forte Gasolina 6.5 HP",
      "Capacidad del tanque": "15 GL/57 L",
      "Presión Minima": "80 PSI",
      "Presión Maxima": "120 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-monofasico-1.5hp",
    name: "Compresor Monofásico 1.5 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "CDV",
    description:
      "Este compresor de 1.5 HP esta diseñado para el uso industrial, es perfecto para operar herramientas neumáticas como pistolas de pintura (aerógrafo) , llaves de impacto livianas, infladores, sopletes de limpieza, maquinas de confeccion y equipos de mantenimiento general",
    price: 2500000,
    warranty: "1 año",
    image: getImage("productos/compresores/piston/compresor-1.5hp-h.webp"),
    images: [
      getImage("productos/compresores/piston/compresor-1.5hp-h.webp"),
      getImage("productos/compresores/piston/compresor-1.5hp-atras-h.webp"),
    ],
    variantType: "toggle",
    specs: {
      Potencia: "1.5 HP",
      Cabezote: "2051 Reforzado",
      Cilindros: "2(51 mm)",
      "RPM Cabezote": "800",
      "Desplazamiento del Cabezote": "5.5 CFM",
      Motor: "WEG Brasilero 110/220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "28 GL/106 L",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "130 PSI",
      "Tipo de Trabajo": "Industrial",
    },
    variants: [
      {
        name: "Horizontal",
        image: getImage("productos/compresores/piston/compresor-1.5hp-h.webp"),
        images: [
          getImage("productos/compresores/piston/compresor-1.5hp-h.webp"),
          getImage("productos/compresores/piston/compresor-1.5hp-atras-h.webp"),
        ],
      },
      {
        name: "Vertical",
        image: getImage("productos/compresores/piston/compresor-1.5hp-h.webp"),
        images: [
          getImage("productos/compresores/piston/compresor-1.5hp-v.webp"),
          getImage("productos/compresores/piston/compresor-1.5hp-atras-v.webp"),
        ],
      },
    ],
  },

  {
    id: "compresor-gasolina-2hp",
    name: "Compresor Gasolina 2 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.DIESEL_GASOLINA,
    brand: "",
    description:
      "Este equipo de uso industrial, equipado con un potente motor a gasolina de 6.5 HP, está diseñado para ofrecer máxima autonomía en lugares sin acceso a energía eléctrica. Este compresor garantiza un flujo de aire constante para alimentar herramientas neumáticas, equipos de pintura y tareas de mantenimiento en fincas, obras civiles o unidades móviles de servicio. Es la solución robusta y versátil para quienes necesitan potencia garantizada en cualquier lugar.",
    price: 4800000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/diesel-gasolina/compresor-diesel-gasolina-2hp.webp",
    ),
    images: [
      getImage(
        "productos/compresores/diesel-gasolina/compresor-diesel-gasolina-2hp.webp",
      ),
    ],
    specs: {
      Potencia: "2 HP",
      Cabezote: "2065",
      Cilindros: "2(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "9 CFM",
      Motor: "Forte Gasolina 6.5 HP",
      "Capacidad del tanque": "35 GL/132 L",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-monofasico-2hp-tipo-chequera",
    name: "Compresor Monofásico 2 HP Tipo chequera",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Es un equipo versátil y potente, ideal para trabajos de nivel medio a exigente, ideal para utilizar herramientas neumáticas como: Grapadoras, puntilladoras, taladros neumáticos, pistola impacto 1/2, aplicación de pintura automotriz, trabajos de confección y carpintería",
    price: 3700000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera.webp",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera.webp",
      ),
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera-atras.webp",
      ),
    ],
    specs: {
      Potencia: "2 HP",
      Cabezote: "Fusheng tipo chequera VA-65",
      Cilindros: "2(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "9.5 CFM",
      Motor: "WEG Brasilero 110/220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "35 GL/132 L",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-monofasico-2hp-reforzado",
    name: "Compresor Monofásico 2 HP Reforzado",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Es un equipo versátil y potente, ideal para trabajos de nivel medio a exigente, ideal para utilizar herramientas neumáticas como: Grapadoras, puntilladoras, taladros neumáticos, pistola impacto 1/2, aplicación de pintura automotriz, trabajos de confección y carpintería",
    price: 3100000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-monofasico-2hp-reforzado.webp",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-reforzado.webp",
      ),
    ],
    specs: {
      Potencia: "2 HP",
      Cabezote: "2065R",
      Cilindros: "2(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "9 CFM",
      Motor: "WEG Brasilero 110/220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "35 GL/132 L",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-trifasico-3hp-reforzado",
    name: "Compresor Trifásico 3 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Un compresor de 3 HP  es el estándar de oro para talleres profesionales pequeños y medianos. Es el paso intermedio perfecto entre un equipo casero y uno industrial pesado. Es ideal para operar herramientas que requieren un flujo constante pero no excesivo, como: PISTOLAS DE IMPACTOS, LIJADORAS ORBITALES, PUNTILLADORAS, PISTOLAS DE PINTURA HVLP.",
    price: 5500000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-trifasico-3hp.webp",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-trifasico-3hp.webp"),
      getImage(
        "productos/compresores/piston/compresor-trifasico-3hp-atras.webp",
      ),
    ],
    specs: {
      Potencia: "3 HP",
      Cabezote: "3065R",
      Cilindros: "3(65 mm)",
      "RPM Cabezote": "900",
      "Desplazamiento del Cabezote": "12 CFM",
      Motor: "WEG Brasilero 220/440 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "45 GL",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },
  {
    id: "compresor-bifasico-5hp-reforzado",
    name: "Compresor Bifásico 5 HP Reforzado",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Es un equipo versátil y potente, ideal para trabajos de nivel medio a exigente, ideal para utilizar herramientas neumáticas como: Grapadoras, puntilladoras, taladros neumáticos, pistola impacto 1/2, aplicación de pintura automotriz, trabajos de confección y carpintería",
    price: 8300000,
    warranty: "1 Año",
    image: getImage("productos/compresores/piston/compresor-bifasico-5hp.webp"),
    images: [
      getImage("productos/compresores/piston/compresor-bifasico-5hp.webp"),
    ],
    specs: {
      Potencia: "5 HP",
      Cabezote: "2080R",
      Cilindros: "2(80 mm)",
      "RPM Cabezote": "800",
      "Desplazamiento del Cabezote": "17 CFM",
      Motor: "WEG Brasilero Bifásico 220 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "65 GL",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },
  {
    id: "compresor-trifasico-5hp-reforzado",
    name: "Compresor Trifásico 5 HP Reforzado",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo es fundamental en entornos que requieren un flujo de aire constante y potente para accionar diversas herramientas y procesos. Ideal para pistolas de pulverización de pintura que requieren una presión estable para acabados profesionales en autos o muebles. Se usa para el inflado de neumáticos, limpieza de piezas con aire a presión y operación de rampas o desmontadoras.",
    price: 7000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-trifasico-5hp-reforzado.webp",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-trifasico-5hp-reforzado.webp",
      ),
      getImage(
        "productos/compresores/piston/compresor-trifasico-5hp-reforzado-atras.webp",
      ),
    ],
    specs: {
      Potencia: "5 HP",
      Cabezote: "2080R",
      Cilindros: "2(80 mm)",
      "RPM Cabezote": "800",
      "Desplazamiento del Cabezote": "17 CFM",
      Motor: "WEG Brasilero Trifásico 220/440 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "65 GL",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "150 PSI",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-trifasico-7.5hp",
    name: "Compresor Trifásico 7.5 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo es fundamental en entornos que requieren un flujo de aire constante y potente para accionar diversas herramientas y procesos. Ideal para pistolas de pulverización de pintura que requieren una presión estable para acabados profesionales en autos o muebles. Se usa para el inflado de neumáticos, limpieza de piezas con aire a presión y operación de rampas o desmontadoras, entre otros.",
    price: 9000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-trifasico-7-5hp.webp",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-trifasico-7-5hp.webp"),
      getImage(
        "productos/compresores/piston/compresor-trifasico-7-5hp-atras.webp",
      ),
    ],
    specs: {
      Potencia: "7.5 HP",
      Cabezote: "TA-80",
      Cilindros: "3(80 mm)",
      "RPM Cabezote": "800",
      "Desplazamiento del Cabezote": "28 CFM",
      Motor: "WEG Brasilero Trifásico 220/440 V",
      "RPM Motor": "3600",
      "Capacidad del tanque": "80 GL",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "160 PSI",
      "Protector de Motor": "Sí",
      "Tipo de Trabajo": "Industrial",
    },
  },

  {
    id: "compresor-trifasico-10hp",
    name: "Compresor Trifásico 10 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo es fundamental en entornos que requieren un flujo de aire constante y potente para accionar diversas herramientas y procesos. Ideal para pistolas de pulverización de pintura que requieren una presión estable para acabados profesionales en autos o muebles. Se usa para el inflado de neumáticos, limpieza de piezas con aire a presión y operación de rampas o desmontadoras, entre otros.",
    price: 18000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-trifasico-10hp.webp",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-trifasico-10hp.webp"),
    ],
    specs: {
      Potencia: "10 HP",
      Cabezote: "2105",
      Cilindros: "2(105 mm) 2(55 mm)",
      "RPM Cabezote": "800",
      "Desplazamiento del Cabezote": "40 CFM",
      Motor: "WEG Brasilero Trifásico 220/440 V",
      "RPM Motor": "1800",
      "Capacidad del tanque": "120 GL",
      "Presión Minima": "100 PSI",
      "Presión Maxima": "200 PSI",
      "Protector de Motor": "Sí",
      "Tipo de Trabajo": "Industrial",
    },
  },

  // Compresores de Tornillo
  //TODO precio
  {
    id: "compresor-tornillo-5hp",
    name: "Compresor de Tornillo 5.5 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "",
    description:
      "Este sistema industrial optimiza el espacio de trabajo al integrar un compresor de tornillo de alto desempeño, un secador refrigerativo y un tanque pulmón en una sola unidad compacta. Su diseño con cabina acústica reduce drásticamente los niveles de ruido, permitiendo su instalación cerca de los puestos de trabajo, mientras que su tecnología de tornillo garantiza un ciclo de trabajo continuo del 100%. Es la solución ideal para entregar aire limpio, seco y constante sin las interrupciones ni el desgaste de los sistemas tradicionales.",
    price: 19000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/tornillo/compresor-tornillo-5hp.webp",
    ),
    images: [
      getImage("productos/compresores/tornillo/compresor-tornillo-5hp.webp"),
      getImage(
        "productos/compresores/tornillo/compresor-tornillo-5hp-atras.webp",
      ),
    ],
    specs: {
      Potencia: "5.5 HP / 4.1 kW",
      CFM: "25",
      Voltaje: "220 trifásico",
      "L/min": "705",
      "DB(A)": "60",
      Bar: "8",
      "Capacidad pulmon": "55 gl",
    },
  },
  //TODO precio
  {
    id: "compresor-tornillo-10hp",
    name: "Compresor de Tornillo 10 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "",
    description:
      "Este compresor de tornillo de alto desempeño de 10 HP ofrece una solución potente y eficiente para talleres e industrias. Su diseño compacto con cabina acústica reduce drásticamente los niveles de ruido, permitiendo su instalación cerca de los puestos de trabajo sin alterar el entorno laboral. Gracias a su avanzada tecnología de tornillo rotativo, el equipo garantiza un ciclo de trabajo continuo del 100%, entregando un flujo de aire constante y confiable con un desgaste mecánico mínimo en comparación con los sistemas de pistón tradicionales.",
    price: 18200000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/tornillo/compresor-tornillo-10hp.webp",
    ),
    images: [
      getImage("productos/compresores/tornillo/compresor-tornillo-10hp.webp"),
    ],
    specs: {
      Potencia: "10 HP / 7.5 kW",
      CFM: "40",
      Voltaje: "220 trifásico",
      "L/min": "1300",
      "DB(A)": "65",
      Bar: "8",
    },
  },
  {
    id: "compresor-tornillo-15hp",
    name: "Compresor de Tornillo 15 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "",
    description:
      "Este compresor de tornillo de alto desempeño de 15 HP ofrece una solución potente y eficiente para talleres e industrias. Su diseño compacto con cabina acústica reduce drásticamente los niveles de ruido, permitiendo su instalación cerca de los puestos de trabajo sin alterar el entorno laboral. Gracias a su avanzada tecnología de tornillo rotativo, el equipo garantiza un ciclo de trabajo continuo del 100%, entregando un flujo de aire constante y confiable con un desgaste mecánico mínimo en comparación con los sistemas de pistón tradicionales.",
    price: 22200000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/tornillo/compresor-tornillo-15hp.webp",
    ),
    images: [
      getImage("productos/compresores/tornillo/compresor-tornillo-15hp.webp"),
    ],
    specs: {
      Potencia: "15 HP / 11.2 kW",
      CFM: "63",
      Voltaje: "220 trifásico",
      "L/min": "1700",
      "DB(A)": "67",
      Bar: "8",
    },
  },
  {
    id: "compresor-tornillo-30hp",
    name: "Compresor de Tornillo 30 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "",
    description:
      "Diseñado para las exigencias de la gran industria, este compresor de tornillo rotativo de 30 HP ofrece un suministro de aire comprimido masivo, de alta eficiencia y confiabilidad superior. Es la unidad central perfecta para integrarse a redes de distribución existentes en plantas de producción continua. Su cabina acústica reforzada aísla eficazmente el ruido operativo a pesar de su gran potencia, mientras que su ingeniería de tornillo garantiza un ciclo de trabajo continuo del 100%, eliminando pérdidas de presión y paradas innecesarias en procesos críticos donde el aire nunca puede faltar.",
    price: 31000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/tornillo/compresor-tornillo-30hp.webp",
    ),
    images: [
      getImage("productos/compresores/tornillo/compresor-tornillo-30hp.webp"),
    ],
    specs: {
      Potencia: "30 HP / 22.4 kW",
      CFM: "130",
      Voltaje: "220 trifásico",
      "L/min": "3500",
      "DB(A)": "70",
      Bar: "8",
    },
  },

  // Compresores de Aire Seco (Libres de Aceite)

  {
    id: "compresor-aire-seco-o.7hp",
    name: "Compresor libre de aceite (aire seco)",
    category: Category.COMPRESORES,
    subCategory: SubCategory.AIRESECO,
    brand: "",
    description:
      "El compresor libre de aceite de 0.7 HP es un equipo potente y confiable, diseñado para ofrecer un suministro de aire limpio, libre de humedad y de alto rendimiento. Es ideal para trabajos que requieren precisión y calidad, evitando la corrosión en herramientas y garantizando acabados profesionales. Ideal para usos en Equipos odontológicos, médicos, Laboratorios, electrónica y limpieza de equipos delicados.",
    price: 850000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/aire-seco/compresor-aireseco-1hp.webp",
    ),
    images: [
      getImage("productos/compresores/aire-seco/compresor-aireseco-1hp.webp"),
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-1hp-frente.webp",
      ),
    ],
    specs: {
      Potencia: "0.7 HP",
      "Tipo de Aire": "Seco (Libre de aceite / Oil-free)",
      Voltaje: "110V / 60Hz",
      "Presión Máxima": "115 PSI",
      "Caudal de Aire (CFM)": "3.2 CFM",
      "capacidad tanque": "6 litros",
    },
  },
  {
    id: "compresor-aire-seco-1hp",
    name: "Compresor libre de aceite (aire seco) 1 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.AIRESECO,
    brand: "",
    description:
      "El compresor libre de aceite de 1 HP es un equipo potente y confiable, diseñado para ofrecer un suministro de aire limpio, libre de humedad y de alto rendimiento. Es ideal para trabajos que requieren precisión y calidad, evitando la corrosión en herramientas y garantizando acabados profesionales. Ideal para usos en Equipos odontológicos, médicos, Laboratorios, electrónica y limpieza de equipos delicados.",
    price: 1300000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/aire-seco/compresor-aireseco-1hp-tanque-grande.webp",
    ),
    images: [
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-1hp-tanque-grande.webp",
      ),
    ],
    specs: {
      Potencia: "1 HP",
      "Tipo de Aire": "Seco (Libre de aceite / Oil-free)",
      Voltaje: "110V / 60Hz monofásico",
      "Presión Máxima": "115 - 120 PSI",
      "Caudal Máximo": "4.5 CFM",
      "capacidad tanque": "10 litros",
    },
  },

  {
    id: "compresor-aire-seco-2hp",
    name: "Compresor libre de aceite (aire seco) 2 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.AIRESECO,
    brand: "",
    description:
      "El compresor libre de aceite de 2 HP es un equipo potente y confiable, diseñado para ofrecer un suministro de aire limpio, libre de humedad y de alto rendimiento. Es ideal para trabajos que requieren precisión y calidad, evitando la corrosión en herramientas y garantizando acabados profesionales. Ideal para usos en Equipos odontológicos, médicos, Laboratorios, electrónica y limpieza de equipos delicados.",
    price: 3500000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/aire-seco/compresor-aireseco-2hp.webp",
    ),
    images: [
      getImage("productos/compresores/aire-seco/compresor-aireseco-2hp.webp"),
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-2hp-costado.webp",
      ),
    ],
    specs: {
      Potencia: "2 HP",
      "Tipo de Aire": "Seco (Libre de aceite / Oil-free)",
      Voltaje: "110V / 60Hz (Monofásico)",
      "Presión Máxima": "115 - 120 PSI (8 BAR)",
      "Caudal de Aire (CFM)": "7.29 - 9 CFM",
      "capacidad tanque": "100 litros",
    },
  },   
];
