import { getImage } from "../shared/images";
import { Category, type Product } from "../types";
export const PISTOLAS_AEROGRAFOS: Product[] = [
    {
    id: "pistola-profesional-aerografica-sagola-3300gto-car",
    name: "Pistola profesional aerografica sagola 3300GTO CAR",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "La Pistola para Pintar de Gravedad Sagola 3300 GTO ofrece una combinación excepcional de calidad, precisión y versatilidad. Diseñada para cumplir con los estándares más exigentes de la industria, esta pistola integra tecnología EPA y HVLP, garantizando una alta eficiencia en la aplicación de pintura con mínima emisión de disolventes.",
    price: 2000000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car.webp",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-descripcion-partes.webp",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-vaso.webp",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-regulador.webp",
      ),
    ],
    specs: {
      "Presión de trabajo recomendada": "20 - 30 PSI",
      "Presión Máxima de trabajo recomendada HVLP": "26 PSI",
      "Consumo de aire": "GTO TECH (10 CFM) - GTO HVLP (12.7 CFM)",
      "Capacidad del vaso": "650 ml",
      Conexión: "1/4",
      "Distancia de aplicación máxima recomendada GTO Tech": "15 - 20 cm",
      "Distancia de aplicación máxima recomendada GTO HVLP": "12 - 15 cm",
      "Tamaño de boquilla": "1.4 mm",
      "Tamaño de abanico": "290 - 300 mm",
    },
  },
  {
    id: "pistola-sagola-3300gto-epa-succion",
    name: "Pistola sagola 3300GTO EPA Succión",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "La pistola Sagola 3300 GTO con boquilla EPA es una herramienta extremadamente versátil diseñada para cubrir tres sectores principales: industria, madera y decoración. Se destaca por su alta eficiencia de transferencia (superior al 65%), lo que permite un ahorro significativo de pintura cumpliendo con normativas ambientales",
    price: 1600000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion.webp",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion-detras.webp",
      ),
    ],
    specs: {
      "Presión de trabajo recomendada": "29 - 43.5 PSI",
      "Consumo de aire": "43.5 CFM",
      "Capacidad del vaso": "650 ml",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.6 mm",
    },
  },
  {
    id: "Pistola-gravedad-sagola-classic-lux",
    name: "Pistola de gravedad sagola Classic Lux",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "Pistola de alta presión de máxima versatilidad, diseñada para aplicar desde acabados finos hasta imprimaciones y masillas con total precisión. Es la herramienta ideal para obtener resultados profesionales en proyectos de carpintería, ebanistería y pintura automotriz.",
    price: 650000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux.webp",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux-partes.webp",
      ),
    ],
    specs: {
      "Diametro de Boquilla": "1.4 mm, 1.6 mm, 1.8 mm, 2.5 mm",
      "Capacidad del vaso": "650 ml con antigoteo",
      "Presión Recomendada": "50 PSI",
      "Consumo de aire": "8.5 CFM",
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "pistola-gravedad-sagola-junior",
    name: "Pistola de gravedad Sagola Junior G",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "Pistola semi-alta, opción perfecta para trabajos de retoque y acabados finos que requieren precisión y economía. Su principal ventaja es el bajo consumo de aire (115 - 125 L/min), lo que la hace ideal para usar con compresores pequeños de 1.5 HP sin perder eficiencia.",
    price: 310000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-gravedad-sagola-junior.webp",
    ),
    specs: {
      "Diametro de Boquilla": "1.4 mm, 1.6 mm, 1.8 mm",
      "Capacidad del vaso": "600 ml",
      "Presión Máxima Recomendada": "2 bar",
      "Consumo de aire": "115 - 125 L/min",
      Conexión: "1/4 NPT",
      "Tamaño del abanico": "230 - 265 mm",
    },
  },
  {
    id: "aerografo-alta-w77",
    name: "Aerógrafo de alta W-77",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Aerógrafo de alto rendimiento con atomización fina, ideal para cubrir superficies grandes con una pulverización excelente. Su diseño ergonómico facilita el manejo operativo y el mantenimiento, incluyendo un micrómetro con escala para ajustes de máxima precisión.",
    price: 180000,

    image: getImage("productos/pistolas-aerografos/aerografo-alta-w77.webp"),
    specs: {
      "Presión optima de trabajo": "45 - 60 PSI",
      "Consumo de aire": "5.5 - 6.5 CFM",
      "Capacidad del vaso": "400 cc",
      Conexión: "1/4 NPT",
      "Diametro de boquilla": "1.5 mm",
    },
  },
  {
    id: "aerografo-alta-w71",
    name: "Aerógrafo de alta W-71",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Aerógrafo de alta presión con acabado cromado, diseñado para el recubrimiento preciso de superficies pequeñas. Su versatilidad lo hace ideal para industria automotriz, ebanistería y marquetería.",
    price: 120000,

    image: getImage("productos/pistolas-aerografos/aerografo-alta-w71.webp"),
    specs: {
      "Presión Mínima": "43 PSI",
      "Presión Máxima": "58 PSI",
      "Capacidad del vaso": "400 cc",
      Conexión: "1/4 NPT",
      "Diametro de boquilla": "1.5 mm",
    },
  },
  {
    id: "pistola-baja-472-rr",
    name: "Psitola de baja 472 RR",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "RR",
    description:
      "Psitola de baja diseñada para aplicaciones multiuso, consiguiendo siempre la mejor calidad de acabado incluso con productos de alta viscosidad.",
    price: 80000,

    image: getImage("productos/pistolas-aerografos/pistola-baja-472-rr.webp"),
    specs: {
      "Presión Máxima": "3.5 bar",
      "Presión recomendada de trabajo": "1 - 2 bar",
      "Capacidad del vaso": "1000 cc",
      Contiene: "Boquilla punto y abanico",
    },
  },
  {
    id: "pistola-baja-sagola-472",
    name: "Psitola de baja sagola 472",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "Psitola de baja diseñada para aplicaciones multiuso, consiguiendo siempre la mejor calidad de acabado incluso con productos de alta viscosidad.",
    price: 260000,

    image: getImage(
      "productos/pistolas-aerografos/pistola-baja-sagola-472.webp",
    ),
    specs: {
      "Presión Máxima": "3.5 bar",
      "Presión recomendada de trabajo": "1 - 2 bar",
      "Capacidad del vaso": "600 cc",
      Contiene: "Boquilla punto y abanico",
    },
  },
  {
    id: "aerografo-tipo-lapicero-metalico",
    name: "Aerógrafo Tipo Lapicero Metálico",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Aerógrafo de pulverización ideal para aplicaciones precisas y trabajos de detalle. Cuenta con sistema de succión que permite un acabado uniforme y control sencillo mediante palanca. Incluye regulador de presión y manguera de 180 cm para mayor comodidad y movilidad durante el trabajo.",
    price: 180000,
    image: getImage(
      "productos/pistolas-aerografos/aerografo-tipo-lapicero-metalico.webp",
    ),
    specs: {
      "Tipo de pintura": "Acrilico",
      "Material del aerógrafo": "Aluminio y Bronce",
      "Sistema de pulverización": "Succión",
      "Capacidad del vaso": "23 ml",
    },
  },
  {
    id: "aerografo-tipo-lapicero-plastico",
    name: "Aerógrafo Tipo Lapicero Plástico",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Aerógrafo de pulverización ideal para aplicaciones precisas y trabajos de detalle. Cuenta con sistema de succión que permite un acabado uniforme y control sencillo mediante palanca. Incluye regulador de presión y manguera de 180 cm para mayor comodidad y movilidad durante el trabajo.",
    price: 70000,
    image: getImage(
      "productos/pistolas-aerografos/aerografo-tipo-lapicero-plastico.webp",
    ),
    specs: {
      "Tipo de pintura": "Acrilico",
      "Material del aerógrafo": "Aluminio y Bronce",
      "Sistema de pulverización": "Succión",
      "Capacidad del vaso": "23 ml",
    },
  },
  {
    id: "aerografo-f75-wufu",
    name: "Aerógrafo F-75 WUFU",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Aerógrafo de baja, diseñado para usos generales con una velocidad óptima de aplicación. Es compatible con materiales de baja viscosidad, adaptándose perfectamente tanto a pinturas de base agua como a solventes.",
    price: 120000,
    image: getImage("productos/pistolas-aerografos/aerografo-f-75.webp"),
    images: [getImage("productos/pistolas-aerografos/aerografo-f-75.webp")],
    specs: {
      "Presión optima de trabajo": "36 - 50 PSI",
      "Diametro de boquilla": "1.5 mm",
      "Tamaño de abanico": "18 - 25 cm",
      "Capacidad del vaso": "400 ml",
      "Consumo de aire": "2 - 6 CFM",
      "Entrada de aire": "1/4 NPT",
    },
  },
  {
    id: "aerografo-f75-discover",
    name: "Aerógrafo F-75 DISCOVER",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Discover",
    description:
      "Aerógrafo de baja, diseñado para usos generales con una velocidad óptima de aplicación. Es compatible con materiales de baja viscosidad, adaptándose perfectamente tanto a pinturas de base agua como a solventes.",
    price: 100000,
    image: getImage(
      "productos/pistolas-aerografos/aerografo-f75-discover.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-f75-discover.webp"),
    ],
    specs: {
      "Presión optima de trabajo": "36 - 50 PSI",
      "Diametro de boquilla": "1.5 mm",
      "Tamaño de abanico": "18 - 25 cm",
      "Capacidad del vaso": "400 ml",
      "Consumo de aire": "2 - 6 CFM",
      "Entrada de aire": "1/4 NPT",
    },
  },
  {
    id: "aerografo-f75-truper",
    name: "Aerógrafo F-75 TRUPER",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "truper",
    description:
      "Aerógrafo de baja, diseñado para usos generales con una velocidad óptima de aplicación. Es compatible con materiales de baja viscosidad, adaptándose perfectamente tanto a pinturas de base agua como a solventes.",
    price: 100000,
    image: getImage("productos/pistolas-aerografos/aerografo-f75-truper.webp"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-f75-truper.webp"),
      getImage("productos/pistolas-aerografos/aerografo-f75-truper-vaso.webp"),
    ],
    specs: {
      "Presión optima de trabajo": "36 - 50 PSI",
      "Diametro de boquilla": "1.5 mm",
      "Tamaño de abanico": "18 - 25 cm",
      "Capacidad del vaso": "400 ml",
      "Consumo de aire": "2 - 6 CFM",
      "Entrada de aire": "1/4 NPT",
    },
  },
  {
    id: "aerografo-ecologico",
    name: "Aerógrafo Ecológico",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Aerógrafo de alta presión ideal para acabados finos y detallados. Especial para industria automotriz, marquetería y carpintería.",
    price: 200000,
    image: getImage("productos/pistolas-aerografos/aerografo-ecologico.webp"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-ecologico.webp"),
    ],
    specs: {
      "Presión MAX": "43 PSI",
      "Capacidad del vaso": "1000 ml",
      "Entrada de aire": "1/4 NPT",
      "Diametro de boquilla": "1.4 mm",
      "Consumo de aire (CFM)": "14.5",
    },
  },
  {
    id: "aerografo-hvlp-h827",
    name: "Aerógrafo HVLP H-827",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Aerógrafo de alta, cuerpo de aluminio liviano y alta calidad, ideal para aplicaciones en madera, metal, plásticos y cerámica. Ofrece pulverización uniforme y controles ajustables para mayor precisión en trabajos automotrices, industriales y de carpintería.",
    price: 160000,
    image: getImage("productos/pistolas-aerografos/aerografo-hvlp-h-827.webp"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-hvlp-h-827.webp"),
    ],
    specs: {
      "Presión MAX": "43 PSI",
      "Capacidad del vaso": "600 ml",
      "Entrada de aire": "1/4 NPT",
      "Diametro de boquilla": "1.4 mm",
      "Consumo de aire (CFM)": "14.5",
    },
  },
  {
    id: "aerografo-k3",
    name: "Aerógrafo K-3",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "El aerógrafo de gravedad mini de baja presión K-3 Se puede utilizar para varias aplicaciones como pintura, revestimiento y acabado. Ideal para utilizar pintura vehicular, muebles y estructuras pequeñas y medianas.",
    price: 85000,
    image: getImage("productos/pistolas-aerografos/aerografo-k3.webp"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-k3.webp"),
      getImage("productos/pistolas-aerografos/aerografo-k3-partes.webp"),
    ],
    specs: {
      "Presión de aire sugerida": "30 PSI",
      "Consumo de aire": "2.4 CFM",
      "Capacidad del vaso": "100 ml",
      Conexión: "1/4",
      "Tamaño de boquilla (punto)": "0.5 mm",
      "Amplitud de boquilla (punto)": "0.5 - 1.0 mm",
    },
  },
  {
    id: "aerografo-f2",
    name: "Aerógrafo F-2",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "El aerógrafo de gravedad mini de baja presión F-2 es ideal para áreas de pintura pequeñas y requiere alta calidad de acabado, como modelismo, decoración de pasteles, maquillaje artístico y más.",
    price: 85000,
    image: getImage("productos/pistolas-aerografos/aerografo-f2.webp"),
    images: [getImage("productos/pistolas-aerografos/aerografo-f2.webp")],
    specs: {
      "Presión de aire sugerida": "50 PSI",
      "Consumo de aire": "6 CFM",
      "Capacidad del vaso": "100 ml",
      Conexión: "1/4",
      "Tamaño de boquilla": "0.5 mm",
    },
  },
  {
    id: "pistola-aire-recubrimientos-body-schutz",
    name: "Pistola de aire para recubrimientos Body Schutz",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Surtek",
    description:
      "Ideal para aplicar materiales con base de aceite Y aplicación de resinas esta pistola te ofrece la precisión que necesitas para lograr resultados impecables.",
    price: 100000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-aire-recubrimientos-body-schutz.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-aire-recubrimientos-body-schutz.webp",
      ),
    ],
    specs: {
      "Presión de aire sugerida": "85 PSI",
      "Área de covertura": "0 m²",
      Conexión: "1/4",
    },
  },
  {
    id: "pistola-pulverizadora-profesional-h2000-g2",
    name: "Pistola pulverizadora profesional H2000-G2",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Surtek",
    description:
      "Pistola pulverizadora profesional de alta diseñada para acabados de alta precisión en piezas pequeñas, tanques y retoques detallados. Es la herramienta ideal para aplicar lacas, esmaltes y barnices con una atomización fina y un control superior en cada pasada.",
    price: 85000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-pulverizadora-profesional-h2000-g2.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-pulverizadora-profesional-h2000-g2.webp",
      ),
    ],
    specs: {
      "Presión de pulverización recomendada": "43 PSI",
      "Distancia de aplicación recomendada": "16 - 25 cm",
      "Presión Máxima de entrada de aire": "145 PSI",
      Conexión: "1/4",
      "Tamaño de boquilla": "0.8 mm",
      "Capacidad del vaso": "125 ml",
      "Modo de alimentación": "Gravedad",
    },
  },
  {
    id: "pistola-baja-472-devilbiss",
    name: "Pistola de baja 472 Devilbiss",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Devilbiss",
    description:
      "Pistola de baja ideal para usarse en talleres de baja producción. Se asegura un fluido continuo y estable de pinturas, barnices y tintas, satisfaciendo así la demanda de los pintores expertos.",
    price: 150000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-baja-472-devilbiss.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-baja-472-devilbiss.webp"),
    ],
    specs: {
      "Presión Máxima de aire": "40 PSI",
      "Consumo de aire": "3.9 CFM",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.4 mm",
      "Capacidad del vaso": "1000 ml",
    },
  },
  {
    id: "aerografo-w71-surtek",
    name: "Aerógrafo W-71 Surtek",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Surtek",
    description:
      "Aerógrafo profesional diseñado para ofrecer máxima precisión y calidad en cada acabado. Su diseño ergonómico garantiza comodidad y durabilidad, siendo la herramienta esencial para jornadas de trabajo exigentes.",
    price: 197000,
    image: getImage("productos/pistolas-aerografos/aerografo-w71-surtek.webp"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-w71-surtek.webp"),
    ],
    specs: {
      "Presión optima de trabajo": "70 PSI",
      "Consumo de aire": "2.6 CFM",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.5 mm",
      "Capacidad del vaso": "400 ml",
    },
  },
  {
    id: "pistola-alta-hvlp",
    name: "Pistola de alta HVLP",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Ingco",
    description:
      "Pistola de alta perfecta para aplicar la capa de acabado (finishing coat),Muy utilizada para barnizar o pintar muebles, puertas y gabinetes, donde se requiere un control preciso para evitar chorreos.",
    price: 197000,
    image: getImage("productos/pistolas-aerografos/pistola-alta-hvlp.webp"),
    images: [getImage("productos/pistolas-aerografos/pistola-alta-hvlp.webp")],
    specs: {
      "Presión optima de trabajo": "36.2 - 50.8 PSI",
      "Consumo de aire": "4.2 - 7.1 CFM",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.4 mm",
      "Capacidad del vaso": "1000 ml",
    },
  },
  {
    id: "pistola-alta-wufu",
    name: "Pistola de alta WUFU",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Wufu",
    description:
      "Pistola de alta ideal para aplicar las primeras capas que preparan la superficie de la pintura de un vehículo, ideal para Aplicar barnices, lacas y selladores en muebles de alta calidad.",
    price: 180000,
    image: getImage("productos/pistolas-aerografos/pistola-alta-wufu.webp"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-alta-wufu.webp"),
      getImage("productos/pistolas-aerografos/pistola-alta-wufu-detras.webp"),
    ],
    specs: {
      "Presión optima de trabajo": "50 PSI",
      "Consumo de aire": "4 - 9 CFM",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.4 mm",
      "Capacidad del vaso": "1000 ml",
    },
  },
  {
    id: "pistola-alta-hvlp-ingco",
    name: "Pistola de alta HVLP INGCO",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Ingco",
    description:
      "La pistola de alta con vaso arriba es una opción confiable para pinturas que no son excesivamente espesas pero requieren una atomización constante.",
    price: 80000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-alta-hvlp-ingco.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-alta-hvlp-ingco.webp"),
    ],
    specs: {
      "Presión optima de trabajo": "43.5 - 58 PSI",
      "Consumo de aire": "4.2 - 7.1 CFM",
      Conexión: "1/4",
      "Tamaño de boquilla": "1.5 mm",
      "Capacidad del vaso": "600 ml",
      "Tipo de alimentación": "Gravedad",
    },
  },
  {
    id: "pistola-sopleteadora-dg10",
    name: "Pistola sopleteadora DG-10",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 35000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sopleteadora-dg10.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-dg10.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "pistola-sopleteadora-mini",
    name: "Pistola sopleteadora Mini",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 25000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sopleteadora-mini.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-mini.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },
  {
    id: "pistola-sopleteadora-pico-corto",
    name: "Pistola sopleteadora pico corto",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 25000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sopleteadora-pico-corto.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sopleteadora-pico-corto.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "pistola-sopleteadora-uyu",
    name: "Kit pistola sopleteadora",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 35000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sopleteadora-uyu.webp",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-uyu.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
      Incluye: "2 Boquillas, 3 extensiones para boquilla, inflador de balon",
    },
  },
  {
    id: "pistola-sopleteadora-plastica",
    name: "Pistola sopleteadora plastica",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 20000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-sopleteadora-plastica.webp",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sopleteadora-plastica.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "pistola-sopleteadora-manguera",
    name: "Pistola sopleteadora DG-10 con manguera",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola sopladora ideal para dirigir una corriente de aire a presión para limpiar, secar o desplazar residuos en diversas superficies y áreas de difícil acceso",
    price: 65000,
    image: getImage("productos/pistolas-aerografos/sopleteadora-manguera.webp"),
    images: [
      getImage("productos/pistolas-aerografos/sopleteadora-manguera.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
      Incluye: "Manguera en espiral - 5 metros",
    },
  },
  {
    id: "petrolizadora-wufu",
    name: "Petrolizadora WUFU",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Wufu",
    description:
      "Pistola petrolizadora ideal para la limpieza de piezas a presión, ya que combina aire comprimido con líquidos como desengrasantes, ACPM o petróleo, permitiendo remover eficazmente grasa, aceite y suciedad acumulada en diferentes superficies",
    price: 85000,
    image: getImage("productos/pistolas-aerografos/petrolizadora-wufu.webp"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-wufu.webp")],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "petrolizadora-dg10",
    name: "Petrolizadora DG-10",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Wufu",
    description:
      "Pistola petrolizadora ideal para la limpieza de piezas a presión, ya que combina aire comprimido con líquidos como desengrasantes, ACPM o petróleo, permitiendo remover eficazmente grasa, aceite y suciedad acumulada en diferentes superficies",
    price: 75000,
    image: getImage("productos/pistolas-aerografos/petrolizadora-dg10.webp"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-dg10.webp")],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "petrolizadora-uyu",
    name: "Petrolizadora UYU",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola petrolizadora ideal para la limpieza de piezas a presión, ya que combina aire comprimido con líquidos como desengrasantes, ACPM o petróleo, permitiendo remover eficazmente grasa, aceite y suciedad acumulada en diferentes superficies",
    price: 80000,
    image: getImage("productos/pistolas-aerografos/petrolizadora-uyu.webp"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-uyu.webp")],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "petrolizadora-ingco",
    name: "Petrolizadora ingco",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Ingco",
    description:
      "Pistola petrolizadora ideal para la limpieza de piezas a presión, ya que combina aire comprimido con líquidos como desengrasantes, ACPM o petróleo, permitiendo remover eficazmente grasa, aceite y suciedad acumulada en diferentes superficies",
    price: 45000,
    image: getImage("productos/pistolas-aerografos/petrolizadora-ingco.webp"),
    images: [
      getImage("productos/pistolas-aerografos/petrolizadora-ingco.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "petrolizadora-picasso",
    name: "Petrolizadora picasso",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Ingco",
    description:
      "Pistola petrolizadora ideal para la limpieza de piezas a presión, ya que combina aire comprimido con líquidos como desengrasantes, ACPM o petróleo, permitiendo remover eficazmente grasa, aceite y suciedad acumulada en diferentes superficies",
    price: 55000,
    image: getImage("productos/pistolas-aerografos/petrolizadora-picasso.webp"),
    images: [
      getImage("productos/pistolas-aerografos/petrolizadora-picasso.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
      Incluye: "Manguera de 1 metro",
    },
  },
  {
    id: "pistola-arenadora-uyu",
    name: "Pistola arenadora",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola de alto rendimiento ideal para procesos de chorreado de arena, limpieza de piezas mecánicas y pulido de vidrio. Su versatilidad permite desde la decoración de aluminio hasta el grabado de letras en mármol con acabados precisos.",
    price: 80000,
    image: getImage("productos/pistolas-aerografos/pistola-arenadora-uyu.webp"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-arenadora-uyu.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT macho",
      "Presión de aire": "50 - 90 PSI",
      Incluye: "Mangera flexible",
    },
  },
  {
    id: "pistola-sandblasting-con-vaso",
    name: "Pistola para Sandblasting",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "",
    description:
      "Pistola ideal para la limpieza y preparación de superficies mediante la proyección de materiales abrasivos a alta presión. Es una herramienta neumática diseñada para trabajos industriales y de restauración que requieren precisión en piezas de tamaño pequeño a mediano.",
    price: 130000,
    image: getImage("productos/pistolas-aerografos/pistola-sandblasting.webp"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sandblasting.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT",
      "Presión de aire": "43 - 50 PSI",
      "Capacidad del vaso": "1000 ml",
      "Tamaño de boquilla": "3 mm",
    },
  },
]