import Image from "astro/components/Image.astro";
import {
  Category,
  SubCategory,
  ServiceCategory,
  type Product,
  type ServiceItem,
  type TeamMember,
  type CategoryItem,
  type SuccessStory,
  type compressorType,
  type Clientes,
  type HeroSlide,
  type Sector,
  type ServiceHeaderPhotos,
  type ServiceGalleries,
  type Feature,
} from "./types";
import type { ImageMetadata } from "astro";
import type { Features } from "tailwindcss";

// ---------------------------------------------------------------------------
// 1. CARGA AUTOMÁTICA DE IMÁGENES (src/assets)
// ---------------------------------------------------------------------------

// Cargamos TODAS las imágenes de la carpeta assets
const allImagesGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/**/*.{jpeg,jpg,png,webp}",
  { eager: true },
);

/**
 * Función inteligente para obtener imágenes.
 */

const getImage = (path: string): ImageMetadata | string => {
  if (path.startsWith("http")) {
    return path;
  }
  const fullPath = `../assets/${path}`;
  const imageModule = allImagesGlob[fullPath];

  if (!imageModule) {
    console.warn(
      `⚠️ Imagen no encontrada en assets: ${path}. Asegúrate que el archivo existe en src/assets/${path}`,
    );
    // Retornamos un placeholder o la misma ruta rota para depurar
    return path;
  }

  return imageModule.default;
};

// Datos para la sección 4.5 (productos complementarios del HOME)
export const complementaryCategories: CategoryItem[] = [
  {
    title: "Motores Eléctricos",
    image:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=400",
    link: "/productos?cat=Motores",
  },
  {
    title: "Cabezotes",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400",
    link: "/productos?cat=Cabezotes",
  },
  {
    title: "Tanques y Espumadoras",
    image:
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=400",
    link: "/productos?cat=Tanques%20y%20espumadoras",
  },
  {
    title: "Repuestos y Accesorios",
    image:
      getImage("home/seccion-complementarios/repuestos-accesorios.jpeg"),
    link: "/productos?cat=Repuestos%20y%20accesorios",
  },
  {
    title: "Pistolas y Aerógrafos",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
    link: "/productos?cat=Pistolas%20y%20Aerógrafos",
  },
  {
    title: "Herramienta Neumática",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?auto=format&fit=crop&q=80&w=400",
    link: "/productos?cat=Herramienta%20Hidráulica%20y%20neumática",
  },
];

// "Diccionario" para las sugerencias cuando se escribe mal en los buscadores (NAVBAR y PRODUCTS)
export const search_keywords = [
  // Compresores
  "compresores",
  "compresor",
  "tornillo",
  "pistón",
  "piston",
  "aire",
  "seco",
  // Herramientas y Accesorios
  "pistolas",
  "pistola",
  "pintura",
  "boquilla",
  "aerógrafo",
  // Componentes
  "cabezotes",
  "cabezote",
  "motores",
  "motor",
  "tanques",
  "tanque",
  "espumadoras",
  "espumadora",
  "automático",
  "filtros",
  "filtro",
  "aceites",
  "aceite",
  "mangueras",
  "manguera",
  // Categorías Generales
  "hidráulica",
  "hidraulica",
  "neumática",
  "neumatica",
  "lavaderos",
  "devilbiss",
  "sagola",
  "schulz",
  "wufu",
];

// Datos para la sección de Tipos de Compresores del HOME
export const compressorTypes: compressorType[] = [
  {
    title: "Compresores de Tornillo",
    description:
      "Rendimiento continuo y eficiencia energética para procesos industriales exigentes.",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600",
    link: "/productos?cat=Compresores&sub=Compresores%20de%20Tornillo",
  },
  {
    title: "Compresores de Pistón",
    description:
      "Versatilidad y potencia en ciclos intermitentes, ideales para talleres, servitecas y procesos de mediana demanda.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    link: "/productos?cat=Compresores&sub=Compresores%20de%20piston",
  },
  {
    title: "Libres de Aceite (Aire Seco)",
    description:
      "Aire 100% puro y libre de contaminantes. Diseñados para laboratorios, clínicas y el sector alimentario.",
    image: getImage("home/seccion-categorias/compresores-aireseco.jpg"),
    link: "/productos?cat=Compresores&sub=Aire%20seco",
  },
];

// --- DATOS DE LA SECCIÓN POR QUÉ ELEGIRNOS---
export const whyChooseUsFeatures: Feature[] = [
  {
    title: "25+ Años de Experiencia",
    description:
      "Un cuarto de siglo innovando en sistemas de aire comprimido a nivel nacional, ofreciendo soluciones a la medida para la industria, comercio y hogar.",
    icon: "social_leaderboard",
  },
  {
    title: "Calidad Internacional",
    description:
      "Equipos certificados bajo los más altos estándares de calidad, diseñados para operación continua y trabajo pesado.",
    icon: "workspace_premium",
  },
  {
    title: "Servicio Especializado",
    description:
      "Técnicos capacitados disponibles para garantizar la máxima disponibilidad de su planta.",
    icon: "engineering",
  },
  {
    title: "Garantía Extendida",
    description:
      "Garantía sólida de hasta 1 año respaldada por mano de obra calificada. Nos aseguramos de que su operación nunca se detenga, brindándole la confianza y tranquilidad que su inversión merece.",
    icon: "shield_lock",
  },
];
// Imagenes de experiencia y garantia
export const BRAND_BADGES = {
  experiencia: getImage("home/seccion-elegirnos/experiencia-cdv.png"),
  garantia: getImage("home/seccion-elegirnos/etiqueta-garantia.png"),
};

// --- DATOS CASOS DE EXITO del HOME---
export const successStories: SuccessStory[] = [
  {
    title: "Mantenimiento correctivo de Compresor Bauker",
    subtitle: "Restauración de compresión",
    description:
      "Se realizó mantenimiento general, el cual incluye: revisión del sistema de compresión, cambio de empaquetadura, asentada de válvulas, cepillado de platos, cambio de elementos filtrantes, cambio de aceite, limpieza y pintura general.",
    before: getImage("home/before-after/mantenimiento-compresor-bauker.jpg"),
    after: getImage(
      "home/before-after/mantenimiento-compresor-bauker-despues.jpg",
    ),
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
// Datos para la sección de Clientes del HOME
export const realClients: Clientes[] = [
  {
    name: "Alfredo Martinez",
    logo: getImage("home/clientes/Alfredo-martinez.webp"),
  },
  { name: "Cubik", logo: getImage("home/clientes/cubik.webp") },
  {
    name: "Ingenio María Luisa",
    logo: getImage("home/clientes/ingenio-maria-luisa.webp"),
  },
  { name: "Instaltek", logo: getImage("home/clientes/instaltek.webp") },
  { name: "Intermodal", logo: getImage("home/clientes/intermodal.webp") },
  { name: "Pro Estibas", logo: getImage("home/clientes/proestibas.webp") },
  { name: "Río Paila", logo: getImage("home/clientes/riopaila.webp") },
  { name: "Vallegres", logo: getImage("home/clientes/vallegres.webp") },
];

// Datos para la sección de slider del HOME
export const slides: HeroSlide[] = [
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

// Datos para la sección de Sectores del HOME
export const sectors: Sector[] = [
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
  {
    name: "Metalmecánica",
    icon: "construction",
    desc: "Corte y Soldadura",
  },

  { name: "Logística", icon: "inventory_2", desc: "Empaque y Distribución" },
];

// DATOS PARA EL HERO DE LA PAGINA DE SERVICIOS
export const headerPhotos: ServiceHeaderPhotos = {
  mantenimiento: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  ],
  tuberias: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
  ],
  lavaderos: [
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605155152944-2909f98f2b1c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552933171-ffad05025ea0?auto=format&fit=crop&q=80&w=800",
  ],
  fabricacion: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
  ],
  pintura: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
  ],
  soldadura: [
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605155152944-2909f98f2b1c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552933171-ffad05025ea0?auto=format&fit=crop&q=80&w=800",
  ],
};

// Galerías específicas por servicio
export const serviceGalleries: ServiceGalleries = {
  s1: [
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-3065.jpeg",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-1155.jpeg",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-ta80.jpeg",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/mantenimiento-compacto.jpeg",
    ),
  ],
  s2: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621905252507-b354bcadc0e2?auto=format&fit=crop&q=80&w=800",
  ],
  s3: [
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605155152944-2909f98f2b1c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552933171-ffad05025ea0?auto=format&fit=crop&q=80&w=800",
  ],
  s4: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  ],
  s5: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621905252507-b354bcadc0e2?auto=format&fit=crop&q=80&w=800",
  ],
  s6: [
    getImage("servicios/Soldadura/soldadura.jpeg"),
    getImage("servicios/Soldadura/soldadura-tanque.jpeg"),
    getImage("servicios/Soldadura/soldadura-tanque1.jpeg"),
  ],
};

// El valor inicial para el estado de los servicios
export const INITIAL_SERVICE_INDICES = {
  s1: 0,
  s2: 0,
  s3: 0,
  s4: 0,
  s5: 0,
  s6: 0,
};

export const PRODUCTS: Product[] = [
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
    image: getImage("productos/compresores/piston/compresor-1.5hp-h.jpeg"),
    images: [
      getImage("productos/compresores/piston/compresor-1.5hp-h.jpeg"),
      getImage("productos/compresores/piston/compresor-1.5hp-atras-h.jpeg"),
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
        image: getImage("productos/compresores/piston/compresor-1.5hp-h.jpeg"),
        images: [
          getImage("productos/compresores/piston/compresor-1.5hp-h.jpeg"),
          getImage("productos/compresores/piston/compresor-1.5hp-atras-h.jpeg"),
        ],
      },
      {
        name: "Vertical",
        image: getImage("productos/compresores/piston/compresor-1.5hp-h.jpeg"),
        images: [
          getImage("productos/compresores/piston/compresor-1.5hp-v.jpeg"),
          getImage("productos/compresores/piston/compresor-1.5hp-atras-v.jpeg"),
        ],
      },
    ],
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
      "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera.jpeg",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera.jpeg",
      ),
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-tipo-chequera-atras.jpeg",
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
      "productos/compresores/piston/compresor-monofasico-1hp.jpeg",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-monofasico-1hp.jpeg"),
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-atras.jpeg",
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
      "productos/compresores/piston/compresor-monofasico-1hp-sencillo.jpeg",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-sencillo.jpeg",
      ),
      getImage(
        "productos/compresores/piston/compresor-monofasico-1hp-sencillo-atras.jpeg",
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
      "productos/compresores/piston/compresor-monofasico-2hp-reforzado.jpeg",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-monofasico-2hp-reforzado.jpeg",
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
      "productos/compresores/piston/compresor-trifasico-3hp.jpeg",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-trifasico-3hp.jpeg"),
      getImage(
        "productos/compresores/piston/compresor-trifasico-3hp-atras.jpeg",
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
    image: getImage("productos/compresores/piston/compresor-bifasico-5hp.jpeg"),
    images: [
      getImage("productos/compresores/piston/compresor-bifasico-5hp.jpeg"),
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
      "productos/compresores/piston/compresor-trifasico-5hp-reforzado.jpeg",
    ),
    images: [
      getImage(
        "productos/compresores/piston/compresor-trifasico-5hp-reforzado.jpeg",
      ),
      getImage(
        "productos/compresores/piston/compresor-trifasico-5hp-reforzado-atras.jpeg",
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
    id: "compresor-trifasico-10hp",
    name: "Compresor Trifásico 10 HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "",
    description:
      "Este equipo de uso industrial  es perfecto para alimentar herramientas neumáticas como pistolas de pintura de baja presion, infladores, sopletes de limpieza y equipos de mantenimiento en talleres, hogares o pequeños negocios. Su funcionamiento monofásico permite conectarlo fácilmente a la red eléctrica convencional, haciéndolo práctico y versátil.",
    price: 18000000,
    warranty: "1 Año",
    image: getImage(
      "productos/compresores/piston/compresor-trifasico-10hp.jpeg",
    ),
    images: [
      getImage("productos/compresores/piston/compresor-trifasico-10hp.jpeg"),
      getImage(
        "productos/compresores/piston/compresor-trifasico-10hp-atras.jpeg",
      ),
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
      "productos/compresores/aire-seco/compresor-aireseco-1hp.jpeg",
    ),
    images: [
      getImage("productos/compresores/aire-seco/compresor-aireseco-1hp.jpeg"),
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-1hp-frente.jpeg",
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
      "productos/compresores/aire-seco/compresor-aireseco-1hp-tanque-grande.jpeg",
    ),
    images: [
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-1hp-tanque-grande.jpeg",
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
      "productos/compresores/aire-seco/compresor-aireseco-2hp.jpeg",
    ),
    images: [
      getImage("productos/compresores/aire-seco/compresor-aireseco-2hp.jpeg"),
      getImage(
        "productos/compresores/aire-seco/compresor-aireseco-2hp-costado.jpeg",
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

  // Cabezotes 0.5 HP

  {
    id: "cabezote-1051",
    name: "Cabezote para Compresor 1051 (1/2 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 1051 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 1/2 HP. Su construcción robusta de un solo cilindro garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 350000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-1051.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-1051.jpeg"),
      getImage("productos/cabezotes/cabezote-1051-atras.jpeg"),
    ],
    specs: {
      Referencia: "1051",
      Capacidad: "100 PSI",
      Potencia: "0.5 HP",
      Cilindros: "1 Pistón x 51 mm",
      "Caudal máximo": "2.8 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },
  // Cabezotes 1 HP

  {
    id: "cabezote-1065",
    name: "Cabezote para Compresor 1065 (1 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 1065 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 1 HP. Su construcción robusta de un solo cilindro garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 380000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-1065.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-1065.jpeg"),
      getImage("productos/cabezotes/cabezote-1065-atras.jpeg"),
    ],
    specs: {
      Referencia: "1065",
      Capacidad: "100 PSI",
      Potencia: "1 HP",
      Cilindros: "1 Pistón x 65 mm",
      "Caudal máximo": "4 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-compresor-1065g",
    name: "Cabezote para Compresor 1065 Reforzado (1 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 1065 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 1 HP. Su construcción robusta de un solo cilindro garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 650000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-1065g.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-1065g.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-1065g-atras.jpeg"),
    ],
    specs: {
      Referencia: "1065",
      Capacidad: "120 PSI",
      Potencia: "1 HP",
      Cilindros: "1 Pistón x 65 mm",
      "Caudal máximo": "5 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  // Cabezotes 1.5 HP

  {
    id: "cabezote-2051-sencillo",
    name: "Cabezote para Compresor 2051 Sencillo (1.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2051 sencillo es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 1.5 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 700000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-2051-sencillo.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-2051-sencillo.jpeg"),
      getImage("productos/cabezotes/cabezote-2051-sencillo-filtros.jpeg"),
    ],
    specs: {
      Referencia: "2051",
      Capacidad: "130 PSI",
      Potencia: "1.5 HP",
      Cilindros: "2 Pistónes x 51 mm",
      "Caudal máximo": "5.5 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-2051-reforzado",
    name: "Cabezote para Compresor 2051 Reforzado (1.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2051 reforzado es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 1.5 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 850000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-2051r.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-2051r.jpeg"),
      getImage("productos/cabezotes/cabezote-2051r-atras.jpeg"),
    ],
    specs: {
      Referencia: "2051",
      Capacidad: "130 PSI",
      Potencia: "1.5 HP",
      Cilindros: "2 Pistónes x 51 mm",
      "Caudal máximo": "5.5 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  // Cabezotes 2 HP

  {
    id: "cabezote-2065-sencillo",
    name: "Cabezote para Compresor 2065 Sencillo (2 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2065 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 2 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 850000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-2065-sencillo.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-2065-sencillo.jpeg"),
      getImage("productos/cabezotes/cabezote-2065-sencillo-atras.jpeg"),
    ],
    specs: {
      Referencia: "2065",
      Capacidad: "140 PSI",
      Potencia: "2 HP",
      Cilindros: "2 Pistónes x 65 mm",
      "Caudal máximo": "9 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  {
    id: "cabezote-2065",
    name: "Cabezote para Compresor 2065R (2 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2065 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 2 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 950000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-2065.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-2065.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-2065-atras.jpeg"),
    ],
    specs: {
      Referencia: "2065R",
      Capacidad: "140 PSI",
      Potencia: "2 HP",
      Cilindros: "2 Pistónes x 65 mm",
      "Caudal máximo": "9 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  // Cabezotes 3 HP

  {
    id: "cabezote-3065-sencillo",
    name: "Cabezote para Compresor 3065 Sencillo (3 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 3065 sencillo es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 3 HP. Su construcción robusta de tres cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 950000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-3065-sencillo.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-3065-sencillo.jpeg"),
      getImage("productos/cabezotes/cabezote-3065-sencillo-atras.jpeg"),
    ],
    specs: {
      Referencia: "3065",
      Capacidad: "150 PSI",
      Potencia: "3 HP",
      Cilindros: "3 Pistónes x 65 mm",
      "Caudal máximo": "12 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  {
    id: "cabezote-3065-3hp-ta65",
    name: "Cabezote para Compresor 3 HP TA-65",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote TA-65 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 3 HP. Su construcción robusta de tres cilindros, integrada con un sistema de válvulas de alta resistencia, garantiza un flujo de aire superior y una durabilidad excepcional bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción de alto rendimiento para aplicaciones industriales que aseguran la operatividad total de su taller.",
    price: 950000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-3hp-ta65.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-3hp-ta65.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-3hp-ta65-atras.jpeg"),
    ],
    specs: {
      Referencia: "TA-65",
      Capacidad: "150 PSI",
      Potencia: "3 HP",
      Cilindros: "3 Pistónes x 65 mm",
      "Caudal máximo": "12 CFM",
      "Velocidad de giro": "900 RPM",
      Etapas: "1",
    },
  },

  // Cabezotes 5 HP

  {
    id: "cabezote-2080-sencillo",
    name: "Cabezote para Compresor 2080 Sencillo (5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2080 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 5 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 1300000,
    warranty: "1 Año",
    image: getImage(
      "productos/cabezotes/cabezote-compresor-2080-sencillo.jpeg",
    ),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-2080-sencillo.jpeg"),
      getImage(
        "productos/cabezotes/cabezote-compresor-2080-sencillo-atras.jpeg",
      ),
    ],
    specs: {
      Referencia: "2080",
      Capacidad: "150 PSI",
      Potencia: "5 HP",
      Cilindros: "2 Pistónes x 80 mm",
      "Caudal máximo": "17 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-compresor-2090-5hp",
    name: "Cabezote para Compresor 2090R (5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2090R es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 5 HP. Su construcción robusta de dos cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 1800000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-5hp-2090r.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-5hp-2090r.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-5hp-2090r-atras.jpeg"),
    ],
    specs: {
      Referencia: "2090R",
      Capacidad: "150 PSI",
      Potencia: "5 HP",
      Cilindros: "2 x 90 mm",
      "Caudal máximo": "20 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-compresor-1105t-5hp",
    name: "Cabezote para Compresor 1105T (5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 1105T es una unidad de alto rendimiento de dos etapas diseñada para compresores de pistón de 5 HP. A diferencia de los modelos estándar, su construcción íntegra en hierro fundido y su sistema de cilindros diferenciados (105 mm y 55 mm) le permiten alcanzar presiones elevadas con una resistencia térmica superior. Este diseño robusto garantiza una capacidad de carga excepcional y una operatividad constante, siendo la opción ideal para el trabajo pesado en aplicaciones industriales exigentes.",
    price: 4000000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-5hp-1105t.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-5hp-1105t.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-5hp-1105t-atras.jpeg"),
    ],
    specs: {
      Referencia: "1105T",
      Capacidad: "xxx PSI",
      Potencia: "5 HP",
      Cilindros: "1(105 mm) 1(55 mm)",
      "Caudal máximo": "xxx",
      "Velocidad de giro": "800 RPM",
      Etapas: "2",
    },
  },

  // Cabezotes 7.5 HP

  {
    id: "cabezote-3080-sencillo",
    name: "Cabezote para Compresor 3080 Sencillo (7.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 3080 sencillo es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 7.5 HP. Su construcción robusta de tres cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage(
      "productos/cabezotes/cabezote-compresor-3080-sencillo.jpeg",
    ),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-3080-sencillo.jpeg"),
      getImage(
        "productos/cabezotes/cabezote-compresor-3080-sencillo-atras.jpeg",
      ),
    ],
    specs: {
      Referencia: "3080",
      Capacidad: "150 PSI",
      Potencia: "7.5 HP",
      Cilindros: "3 Pistónes x 80 mm",
      "Caudal máximo": "28 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-3080-reforzado",
    name: "Cabezote para Compresor 3080 Reforzado (7.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 3080 reforzado es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 7.5 HP. Su construcción robusta de tres cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 1800000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-7.5hp-3080r.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-7.5hp-3080r.jpeg"),
    ],
    specs: {
      Referencia: "3080R",
      Capacidad: "150 PSI",
      Potencia: "7.5 HP",
      Cilindros: "3 Pistónes x 80 mm",
      "Caudal máximo": "28 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-3090-sencillo",
    name: "Cabezote para Compresor 3080 Sencillo (7.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 3090 sencillo es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 7.5 HP. Su construcción robusta de tres cilindros garantiza un rendimiento excepcional y una durabilidad superior bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción confiable y eficiente para aplicaciones industriales y comerciales que aseguran la operatividad de su taller.",
    price: 1800000,
    warranty: "1 Año",
    image: getImage(
      "productos/cabezotes/cabezote-compresor-3090-sencillo.jpeg",
    ),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-3090-sencillo.jpeg"),
      getImage(
        "productos/cabezotes/cabezote-compresor-3090-sencillo-atras.jpeg",
      ),
    ],
    specs: {
      Referencia: "3090",
      Capacidad: "150 PSI",
      Potencia: "7.5 HP",
      Cilindros: "3 Pistónes x 90 mm",
      "Caudal máximo": "30 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },
  {
    id: "cabezote-ta80",
    name: "Cabezote para Compresor TA-80 (7.5 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote TA-80 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 7.5 HP. Su construcción robusta de tres cilindros, integrada con un sistema de válvulas de alta resistencia, garantiza un flujo de aire superior y una durabilidad excepcional bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción de alto rendimiento para aplicaciones industriales que aseguran la operatividad total de su taller.",
    price: 4000000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-7.5hp-ta80.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-7.5hp-ta80.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-7.5hp-ta80-atras.jpeg"),
    ],
    specs: {
      Referencia: "TA-80",
      Capacidad: "150 PSI",
      Potencia: "7.5 HP",
      Cilindros: "3 Pistónes x 80 mm",
      "Caudal máximo": "28 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "1",
    },
  },

  // Cabezotes 10 HP

  {
    id: "cabezote-ta100",
    name: "Cabezote para Compresor TA-100 (12 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote TA-100 es una pieza esencial diseñada para el ensamblaje o reemplazo de la unidad de bombeo en compresores de pistón de 12 HP. Su construcción robusta de tres cilindros, integrada con un sistema de válvulas de alta resistencia, garantiza un flujo de aire superior y una durabilidad excepcional bajo condiciones de trabajo constante. Incluye un visor de aceite para facilitar el monitoreo preventivo, convirtiéndose en una opción de alto rendimiento para aplicaciones industriales que aseguran la operatividad total de su taller.",
    price: 4600000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-12hp-ta100.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-12hp-ta100.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-12hp-ta100-atras.jpeg"),
    ],
    specs: {
      Referencia: "TA-100",
      Capacidad: "200 PSI",
      Potencia: "12 HP",
      Cilindros: "3 x 100 mm",
      "Caudal máximo": "50 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "2",
    },
  },

  {
    id: "cabezote-2105t",
    name: "Cabezote para Compresor 2105T (10 HP)",
    category: Category.CABEZOTES,
    brand: "",
    description:
      "El cabezote 2105T es una unidad de alto rendimiento de dos etapas diseñada para compresores de pistón de 10 HP. A diferencia de los modelos estándar, su construcción íntegra en hierro fundido y su sistema de cilindros diferenciados (2x105 mm y 2x55 mm) le permiten alcanzar presiones elevadas con una resistencia térmica superior. Este diseño robusto garantiza una capacidad de carga excepcional y una operatividad constante, siendo la opción ideal para el trabajo pesado en aplicaciones industriales exigentes.",
    price: 5000000,
    warranty: "1 Año",
    image: getImage("productos/cabezotes/cabezote-compresor-10hp-2105t.jpeg"),
    images: [
      getImage("productos/cabezotes/cabezote-compresor-10hp-2105t.jpeg"),
      getImage("productos/cabezotes/cabezote-compresor-10hp-2105t-atras.jpeg"),
    ],
    specs: {
      Referencia: "2105T",
      Capacidad: "200 PSI",
      Potencia: "10 HP",
      Cilindros: "2(55 mm) 2(105 mm)",
      "Caudal máximo": "40 CFM",
      "Velocidad de giro": "800 RPM",
      Etapas: "2",
    },
  },

  {
    id: "pistola-profesional-aerografica-sagola-3300gto-car",
    name: "Pistola profesional aerografica sagola 3300GTO CAR",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "Sagola",
    description:
      "La Pistola para Pintar de Gravedad Sagola 3300 GTO ofrece una combinación excepcional de calidad, precisión y versatilidad. Diseñada para cumplir con los estándares más exigentes de la industria, esta pistola integra tecnología EPA y HVLP, garantizando una alta eficiencia en la aplicación de pintura con mínima emisión de disolventes.",
    price: 2000000,
    image: getImage(
      "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car.jpeg",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-descripcion-partes.jpeg",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-vaso.jpeg",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-profesional-aerografica-sagola-3300gto-car-regulador.jpeg",
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
      "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion.jpeg",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-sagola-3300gto-epa-succion-detras.jpeg",
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
      "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux.jpeg",
      ),
      getImage(
        "productos/pistolas-aerografos/pistola-gravedad-sagola-classic-lux-partes.jpeg",
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
      "productos/pistolas-aerografos/pistola-gravedad-sagola-junior.jpeg",
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

    image: getImage("productos/pistolas-aerografos/aerografo-alta-w77.jpeg"),
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

    image: getImage("productos/pistolas-aerografos/aerografo-alta-w71.jpeg"),
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

    image: getImage("productos/pistolas-aerografos/pistola-baja-472-rr.jpeg"),
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
      "productos/pistolas-aerografos/pistola-baja-sagola-472.jpeg",
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
      "productos/pistolas-aerografos/aerografo-tipo-lapicero-metalico.jpeg",
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
      "productos/pistolas-aerografos/aerografo-tipo-lapicero-plastico.jpeg",
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
    image: getImage("productos/pistolas-aerografos/aerografo-f-75.jpeg"),
    images: [getImage("productos/pistolas-aerografos/aerografo-f-75.jpeg")],
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
      "productos/pistolas-aerografos/aerografo-f75-discover.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-f75-discover.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-f75-truper.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-f75-truper.jpeg"),
      getImage("productos/pistolas-aerografos/aerografo-f75-truper-vaso.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-ecologico.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-ecologico.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-hvlp-h-827.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-hvlp-h-827.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-k3.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-k3.jpeg"),
      getImage("productos/pistolas-aerografos/aerografo-k3-partes.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-f2.jpeg"),
    images: [getImage("productos/pistolas-aerografos/aerografo-f2.jpeg")],
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
      "productos/pistolas-aerografos/pistola-aire-recubrimientos-body-schutz.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-aire-recubrimientos-body-schutz.jpeg",
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
      "productos/pistolas-aerografos/pistola-pulverizadora-profesional-h2000-g2.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-pulverizadora-profesional-h2000-g2.jpeg",
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
      "productos/pistolas-aerografos/pistola-baja-472-devilbiss.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-baja-472-devilbiss.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/aerografo-w71-surtek.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/aerografo-w71-surtek.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/pistola-alta-hvlp.jpeg"),
    images: [getImage("productos/pistolas-aerografos/pistola-alta-hvlp.jpeg")],
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
    image: getImage("productos/pistolas-aerografos/pistola-alta-wufu.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-alta-wufu.jpeg"),
      getImage("productos/pistolas-aerografos/pistola-alta-wufu-detras.jpeg"),
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
      "productos/pistolas-aerografos/pistola-alta-hvlp-ingco.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-alta-hvlp-ingco.jpeg"),
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
      "productos/pistolas-aerografos/pistola-sopleteadora-dg10.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-dg10.jpeg"),
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
      "productos/pistolas-aerografos/pistola-sopleteadora-mini.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-mini.jpeg"),
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
      "productos/pistolas-aerografos/pistola-sopleteadora-pico-corto.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sopleteadora-pico-corto.jpeg",
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
      "productos/pistolas-aerografos/pistola-sopleteadora-uyu.jpeg",
    ),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sopleteadora-uyu.jpeg"),
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
      "productos/pistolas-aerografos/pistola-sopleteadora-plastica.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/pistola-sopleteadora-plastica.jpeg",
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
    image: getImage("productos/pistolas-aerografos/sopleteadora-manguera.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/sopleteadora-manguera.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/petrolizadora-wufu.jpeg"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-wufu.jpeg")],
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
    image: getImage("productos/pistolas-aerografos/petrolizadora-dg10.jpeg"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-dg10.jpeg")],
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
    image: getImage("productos/pistolas-aerografos/petrolizadora-uyu.jpeg"),
    images: [getImage("productos/pistolas-aerografos/petrolizadora-uyu.jpeg")],
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
    image: getImage("productos/pistolas-aerografos/petrolizadora-ingco.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/petrolizadora-ingco.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/petrolizadora-picasso.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/petrolizadora-picasso.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/pistola-arenadora-uyu.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-arenadora-uyu.jpeg"),
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
    image: getImage("productos/pistolas-aerografos/pistola-sandblasting.jpeg"),
    images: [
      getImage("productos/pistolas-aerografos/pistola-sandblasting.jpeg"),
    ],
    specs: {
      Conexión: "1/4 NPT",
      "Presión de aire": "43 - 50 PSI",
      "Capacidad del vaso": "1000 ml",
      "Tamaño de boquilla": "3 mm",
    },
  },

  //Herramienta Hidráulica - Neumática
  {
    id: "grapadora-neumatica-tipo-bea",
    name: "Grapadora neumática tipo BEA",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "",
    description:
      "Grapadora neumática profesional para carpintería.Apta para clavos en forma de código de 4 a 16 mm, clavos en forma de U, etc. Buena herramienta para la fabricación de muebles, decoración de automóviles, decoración de interiores.",
    price: 320000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/grapadora-neumatica-tipo-bea.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/grapadora-neumatica-tipo-bea.jpeg",
      ),
      getImage(
        "productos/herramienta-hidraulica-neumatica/grapadora-neumatica-tipo-bea-frente.jpeg",
      ),
    ],
    specs: {
      "Ancho de los hombros del clavo": "12.8 mm",
      "Longitud adecuada del clavo": "4 - 16 mm",
      "Presión de aire": "58 - 87 PSI",
      "Especificaciones del clavo": "21 GA",
    },
  },
  {
    id: "engrasadora-neumatica-6kg",
    name: "Engrasadora neumática de 6kg",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Wufu",
    description:
      "Herramienta diseñada para la lubricación eficiente en talleres mecánicos, mantenimiento industrial y maquinaria pesada, utilizando aire comprimido para un flujo continuo de grasa.",
    price: 1400000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-6kg.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-6kg.jpeg",
      ),
      getImage(
        "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-6kg-detras.jpeg",
      ),
    ],
    specs: {
      "Índice de compresión": "50:1",
      "Presión De Aire": "87 - 116 PSI",
      "Presión de salida": "4350 - 5800 PSI",
      "Capacidad del barril": "6 kg",
      "Capacidad de la bomba": "0.85 L/min",
    },
  },
  {
    id: "engrasadora-neumatica-30kg",
    name: "Engrasadora neumática de 30kg",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "",
    description:
      "Diseñada para la lubricación eficiente de maquinaria pesada y vehículos, utilizando aire comprimido para facilitar la aplicación de grasa a alta presión.",
    price: 1800000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-30kg.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-30kg.jpeg",
      ),
      getImage(
        "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-30kg-filtro-regulador.jpeg",
      ),
      getImage(
        "productos/herramienta-hidraulica-neumatica/engrasadora-neumatica-30kg-tapa.jpeg",
      ),
    ],
    specs: {
      "Capacidad del barril": "30KG",
      "Presión de aire": "72.5 - 116 PSI",
      "Máx. Presión de fluido": "5800 PSI",
      "Diámetro del cilindro": "70 mm",
      "Consumo de aire": "8 bar",
      "Diámetro de tubo de succión": "32 mm",
      "Conexión de entrada de aire": "¼",
      "Conexión de salida de aceite": "¼",
    },
  },
  {
    id: "tolva-sandblasting-big-red",
    name: "Tolva para sandblasting BIG RED",
    category: Category.TANQUES_ESPUMADORAS,
    brand: "BIG RED",
    description:
      "Tolva industrial diseñada para la eliminación eficiente de óxido, pintura y recubrimientos en áreas extensas. Su sistema de alta densidad garantiza un flujo abrasivo constante, proporcionando un tratamiento de superficies rápido, efectivo y de nivel profesional.",
    price: 1800000,
    image: getImage(
      "productos/tanques-espumadoras/tolva-sandblasting-big-red.jpeg",
    ),
    images: [
      getImage("productos/tanques-espumadoras/tolva-sandblasting-big-red.jpeg"),
    ],
    specs: {
      Capacidad: "10 galones",
      "Presión de trabajo": "65-125 PSI",
      "Consumo de aire": "6 -25 CFM",
      "entrada de aire": "1/4 NPT",
    },
  },

  {
    id: "mototool-1/4",
    name: "Mototool 1/4",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Wufu",
    description:
      "Herramienta multifuncional de alta precisión. Perfecta para cortar PVC, madera y cerámica, además de realizar desbaste de imperfecciones. Especializada en acabados estéticos de alta calidad, permitiendo pulidos tipo espejo en metales y limpieza profunda en piezas delicadas como joyería.",
    price: 200000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/mototool-1-4.jpeg",
    ),
    images: [
      getImage("productos/herramienta-hidraulica-neumatica/mototool-1-4.jpeg"),
      getImage("productos/herramienta-hidraulica-neumatica/mototool-caja.jpeg"),
    ],
    specs: {
      "Revoluciones por Minuto": "25000 RPM",
      "Presión de trabajo": "90 PSI",
      "Consumo de aire": "4 CFM",
      "entrada de aire": "1/4 NPT",
    },
  },

  {
    id: "destornillador-neumatico-1/4",
    name: "Desornillador Neumático de 1/4",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Wufu",
    description:
      "Optimizado para aplicaciones que requieren velocidad y ciclos de trabajo frecuentes, este destornillador de 1/4 destaca en líneas de montaje de electrodomésticos y equipos tecnológicos. Al priorizar la rapidez sobre el torque extremo, facilita un ensamblaje dinámico y preciso, reduciendo los tiempos muertos en la estación de trabajo. Es una solución confiable para quienes buscan estandarizar la calidad de sus acabados en tareas de atornillado repetitivo con un manejo ligero y eficiente.",
    price: 250000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/destornillador-neumatico.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/destornillador-neumatico.jpeg",
      ),
      getImage(
        "productos/herramienta-hidraulica-neumatica/destornillador-neumatico-atras.jpeg",
      ),
    ],
    specs: {
      "Revoluciones por Minuto": "8000 RPM",
      "Presión de trabajo": "90 PSI",
      "Consumo de aire": "3 CFM",
      "entrada de aire": "1/4 NPT",
    },
  },

  {
    id: "taladro-neumatico-mandril-3/8",
    name: "Taladro Neumático Mandril de 3/8",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Wufu",
    description:
      "Taladro neumático ideal para tareas de perforación, bruñido y aserrado en diversos materiales.",
    price: 190000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/taladro-neumatico-mandril.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/taladro-neumatico-mandril.jpeg",
      ),
    ],
    specs: {
      Velocidad: "1800 RPM",
      "Presión de trabajo": "90 PSI",
      "NO es recersible": "",
      "entrada de aire": "1/4 NPT",
    },
  },
  {
    id: "cincelador-neumatico",
    name: "Cincelador Neumático",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Wufu",
    description:
      "Herramienta diseñada para tareas de corte, desbaste, remachado y demolición ligera en metal o mampostería",
    price: 190000,
    image: getImage(
      "productos/herramienta-hidraulica-neumatica/cincelador-neumatico.jpeg",
    ),
    images: [
      getImage(
        "productos/herramienta-hidraulica-neumatica/cincelador-neumatico.jpeg",
      ),
    ],
    specs: {
      "Golpes por minuto": "4500 GPM",
      "Presión de trabajo": "90 PSI",
      "Consumo de aire": "4 CFM",
      "Entrada de aire": "1/4 NPT",
    },
  },

  //Accesorios
  {
    id: "acople-rapido",
    name: "Acople Rapido 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 15000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-nacional.jpeg",
    ),
    images: [
      getImage("productos/repuestos-accesorios/acople-rapido-nacional.jpeg"),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },
  {
    id: "acople-rapido-1-2",
    name: "Acople Rapido 1/2",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 90000,
    image: getImage("productos/repuestos-accesorios/acople-rapido-1-2.jpeg"),
    images: [getImage("productos/repuestos-accesorios/acople-rapido-1-2.jpeg")],
    specs: {
      Conexión: "1/2 NPT Hembra",
    },
  },
  {
    id: "acople-rapido-macho-pretul",
    name: "Acople Rapido 1/4 macho pretul ",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-pretul-macho.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-pretul-macho.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT Macho",
    },
  },
  {
    id: "acople-rapido-hembra-pretul",
    name: "Acople Rapido 1/4 hembra pretul ",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-pretul-hembra.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-pretul-hembra.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },
  {
    id: "kit-acople-rapido",
    name: "Kit acople rapido 1/4 + fitting hembra 1/4",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/kit-acople-rapido-fitting-hembra.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/kit-acople-rapido-fitting-hembra.jpeg",
      ),
    ],
    specs: {
      "Conexión acople rapido": "1/4 NPT Hembra",
      "Conexión Fitting": "1/4 NPT Hembra",
    },
  },
  {
    id: "juego-acople-rapido-5piezas",
    name: "Juego acople rapido 1/4 + 4 piezas",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 35000,
    image: getImage(
      "productos/repuestos-accesorios/juego-acople-rapido-5piezas.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/juego-acople-rapido-5piezas.jpeg",
      ),
    ],
    specs: {
      Contiene: "Aclople rapido, 2 Fitting Hembra, 2 Fitting Macho",
      "Conexión acople rapido": "1/4 NPT Hembra",
    },
  },

  {
    id: "fitting-hembra-1/4-general",
    name: "Fitting Hembra 1/4 general",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-general-hembra.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-general-hembra.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1/4-general",
    name: "Fitting Macho 1/4 general",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-general-macho.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-general-macho.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-hembra-1/2",
    name: "Fitting Hembra 1/2",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-hembra-parado.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-parado.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "fitting-hembra-1/4-nacional",
    name: "Fitting Hembra 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra-conexion.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1/4-nacional",
    name: "Fitting Macho 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho-conexion.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-hembra-1/4-tipo-esfera",
    name: "Fitting Hembra 1/4 tipo esfera",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera-conexion.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1/2",
    name: "Fitting Macho 1/2",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-macho-parado.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-macho-parado.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-macho.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "correa-industrial-tipo-a",
    name: "Correa Industrial Tipo A",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Correa en V clásica de alta resistencia para transmisión de potencia que posibilita una variada gama de multiplicaciones o reducciones.",
    price: 16000,
    image: getImage(
      "productos/repuestos-accesorios/correa-industrial-tipoa.jpeg",
    ),
    variantType: "dropdown",
    variants: [
      { name: "correa Industrial A-28", price: 16000 },
      { name: "correa Industrial A-29", price: 16000 },
      { name: "correa Industrial A-30", price: 16000 },
      { name: "correa Industrial A-31", price: 16000 },
      { name: "correa Industrial A-32", price: 16000 },
      { name: "correa Industrial A-33", price: 16000 },
      { name: "correa Industrial A-34", price: 16000 },
      { name: "correa Industrial A-35", price: 20000 },
      { name: "correa Industrial A-36", price: 20000 },
      { name: "correa Industrial A-37", price: 20000 },
      { name: "correa Industrial A-38", price: 20000 },
      { name: "correa Industrial A-39", price: 20000 },
      { name: "correa Industrial A-40", price: 20000 },
      { name: "correa Industrial A-41", price: 20000 },
      { name: "correa Industrial A-42", price: 20000 },
      { name: "correa Industrial A-43", price: 20000 },
      { name: "correa Industrial A-44", price: 20000 },
      { name: "correa Industrial A-45", price: 20000 },
      { name: "correa Industrial A-46", price: 25000 },
      { name: "correa Industrial A-47", price: 25000 },
      { name: "correa Industrial A-48", price: 25000 },
      { name: "correa Industrial A-49", price: 25000 },
      { name: "correa Industrial A-50", price: 25000 },
      { name: "correa Industrial A-51", price: 25000 },
      { name: "correa Industrial A-52", price: 25000 },
      { name: "correa Industrial A-53", price: 25000 },
      { name: "correa Industrial A-54", price: 25000 },
      { name: "correa Industrial A-55", price: 25000 },
      { name: "correa Industrial A-56", price: 30000 },
      { name: "correa Industrial A-57", price: 30000 },
      { name: "correa Industrial A-58", price: 30000 },
      { name: "correa Industrial A-59", price: 30000 },
      { name: "correa Industrial A-60", price: 30000 },
      { name: "correa Industrial A-61", price: 30000 },
      { name: "correa Industrial A-62", price: 30000 },
      { name: "correa Industrial A-63", price: 30000 },
      { name: "correa Industrial A-64", price: 30000 },
      { name: "correa Industrial A-65", price: 30000 },
      { name: "correa Industrial A-66", price: 30000 },
      { name: "correa Industrial A-67", price: 30000 },
      { name: "correa Industrial A-68", price: 30000 },
      { name: "correa Industrial A-69", price: 30000 },
      { name: "correa Industrial A-70", price: 35000 },
      { name: "correa Industrial A-71", price: 35000 },
      { name: "correa Industrial A-72", price: 35000 },
      { name: "correa Industrial A-73", price: 35000 },
      { name: "correa Industrial A-74", price: 35000 },
      { name: "correa Industrial A-75", price: 35000 },
      { name: "correa Industrial A-76", price: 35000 },
      { name: "correa Industrial A-77", price: 35000 },
      { name: "correa Industrial A-78", price: 35000 },
      { name: "correa Industrial A-79", price: 35000 },
      { name: "correa Industrial A-80", price: 35000 },
    ],
    specs: {},
  },
  {
    id: "correa-industrial-tipo-b",
    name: "Correa Industrial Tipo B",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Correa en V clásica de alta resistencia para transmisión de potencia que posibilita una variada gama de multiplicaciones o reducciones.",
    price: 40000,
    image: getImage(
      "productos/repuestos-accesorios/correa-industrial-tipob.jpeg",
    ),
    variantType: "dropdown",
    variants: [
      { name: "correa Industrial B-58", price: 40000 },
      { name: "correa Industrial B-59", price: 40000 },
      { name: "correa Industrial B-60", price: 40000 },
      { name: "correa Industrial B-61", price: 50000 },
      { name: "correa Industrial B-62", price: 50000 },
      { name: "correa Industrial B-63", price: 50000 },
      { name: "correa Industrial B-64", price: 50000 },
      { name: "correa Industrial B-65", price: 50000 },
      { name: "correa Industrial B-66", price: 50000 },
      { name: "correa Industrial B-67", price: 50000 },
      { name: "correa Industrial B-68", price: 50000 },
      { name: "correa Industrial B-69", price: 50000 },
      { name: "correa Industrial B-70", price: 50000 },
      { name: "correa Industrial B-71", price: 50000 },
      { name: "correa Industrial B-72", price: 50000 },
      { name: "correa Industrial B-73", price: 50000 },
      { name: "correa Industrial B-74", price: 50000 },
      { name: "correa Industrial B-75", price: 60000 },
      { name: "correa Industrial B-76", price: 60000 },
      { name: "correa Industrial B-77", price: 60000 },
      { name: "correa Industrial B-78", price: 60000 },
      { name: "correa Industrial B-79", price: 60000 },
      { name: "correa Industrial B-80", price: 60000 },
      { name: "correa Industrial B-81", price: 60000 },
      { name: "correa Industrial B-82", price: 60000 },
      { name: "correa Industrial B-83", price: 60000 },
      { name: "correa Industrial B-84", price: 60000 },
      { name: "correa Industrial B-85", price: 60000 },
    ],
    specs: {},
  },
  
  {
    id: "presostato-automatico-trifasico-1via-compresor",
    name: "Presostato Automático Trifásico 1 Vía para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático trifásico es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 180000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via-lado.jpeg",
      ),
    ],
    specs: {
      Entrada: "3/8 NPT (hembra)",
      "Válvula de alivio":"1/8",
      Presion: "75 - 175 psi",
      "Amperaje maximo": "20 amp",
      "Rango de protección": "IP20",
      Voltaje: "380 V"
    },
  },
  {
    id: "presostato-automatico-trifasico-1via-boton",
    name: "Presostato Automático Trifásico 1 Vía boton para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático trifásico es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 180000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton-conexion.jpeg",
      ),
    ],
    specs: {
      Entrada: "1/4 NPT (hembra)",
      Presion: "75 - 155 PSI",
      "Amperaje máximo": "16 amp",
      "Viene con 3 lineas de conexión": ""
    },
  },
  
  {
    id: "presostato-automatico-1via-industrial-compresor",
    name: "Presostato Automático 1 Vía industrial para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 300000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-1via-industrial.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial-conexion.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial-dentro.jpeg",
      ),
    ],
    specs: {
      Voltaje: "110/220 Voltios Monofásico – 30/20 Amperios",
      "Temperatura de trabajo": "30 a 50°C",
      "Conexión": "1 Vía de ¼” hembra",
      "Rango de presión": "40PSI – 250PSI",
      "Ajuste de presión": "30PSI",
      "Ajuste de fábrica": "145PSI – 175PSI",
      "Incluye": "válvula de alivio"
    },
  },

  {
    id: "presostato-automatico-palanca-1via-compresor",
    name: "Presostato Automático de palanca 1 Vía para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 65000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-palanca-1via.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via-dentro.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via-conexion.jpeg",
      ),
    ],
    specs: {
      Referencia: "1 vía palanca",
      Conexión: "1/4 hembra",
      "Ajuste de presión": "75 - 150 PSI",
      "Rango de presión": "40 PSI",
      "Ajuste de fábrica": "85 - 115 psi",
      Voltaje: "110/220 Voltios",
      "Incluye": "válvula de alivio"
    },
  },
  
  {
    id: "presostato-automatico-palanca-4via-compresor",
    name: "Presostato Automático de palanca 4 Vías para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 65000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-palanca-4via.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via-dentro.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via-lado.jpeg",
      ),
    ],
    specs: {
      Referencia: "4 via palanca",
      Conexión: "1/4 hembra (4 salidas)",
      "Ajuste de presión": "75 - 150 PSI",
      "Rango de presión": "40 psi",
      "Ajuste de fábrica": "85 - 115 PSI",
      Voltaje: "110/220 Voltios",
      "Incluye": "válvula de alivio"
    },
  },
 
  {
    id: "presostato-automatico-boton-1via-compresor",
    name: "Presostato Automático de botón 1 Vía para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 65000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-boton-1via.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-dentro.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-lado.jpeg",
      ),
    ],
    specs: {
      Referencia: "1 via botón",
      Voltaje: "110/220 Voltios Monofásico 240 Voltios máximo.",
      Amperios: "20 amp máximo.",
      Conexión: "1/4 hembra",
      "Ajuste de presión": "85 PSI – 175 PSI",
      "Rango de presión": "30 PSI",
      "Ajuste de fábrica": "85PSI – 115PSI",
      "Incluye": "válvula de alivio"
    },
  },
 
  {
    id: "presostato-automatico-boton-4via-compresor",
    name: "Presostato Automático de botón 4 Vías para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 65000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-boton-4via.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via-dentro.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via-lado.jpeg",
      ),
    ],
    specs: {
      Referencia: "4 via botón",
      Conexión: "1/4 hembra (4 salidas)",
      "Ajuste de presión": "85 PSI MIN. - 175 PSI MAX.",
      "Rango de presión": "30 PSI",
      Voltaje: "110/220 V",
      Amperaje: "15 amp." 
    },
  },
  //TODO falta especificaciones técnicas
  {
    id: "presostato-automatico-boton-1via-jaguar",
    name: "Presostato Automático de botón 1 Vías JAGUAR para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 180000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-boton-1via-jaguar.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-jaguar.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 x 1/2 NPT",
    },
  },

  {
    id: "valvula-cheque-antiretorno-tipogranada",
    name: "Válvula de Cheque Antiretorno tipo granada para compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 100000,
    variantType: "dropdown",
    image: getImage(
      "productos/repuestos-accesorios/valvulas-cheque-compresor-tipo-granada.jpeg",
    ),
    variants: [
      { name: "Válvula de Cheque 1/2 grande tipo granada", price: 100000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granadag.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granadag-medidas.jpeg"
          )
        ]
      },
      { name: "Válvula de Cheque 1/2 tipo granada", price: 150000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granada.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granada-medidas.jpeg"
          )
        ]
      },
      { name: "Válvula de Cheque 3/4 tipo granada", price: 300000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-3-4-tipo-granada.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-3-4-tipo-granada-medidas.jpeg"
          )
        ]
      },
      { name: 'Válvula de Cheque 1" tipo granada', price: 450000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-tipo-granada.jpeg"
          ),
        ]
      },
      
    ],
    specs: {
      Material: "Bronce",
    },
  },
  {
    id: "valvula-cheque-compresor-compacto",
    name: "Válvula de Cheque de 1/2 para compresor compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 60000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-compacto.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-medidas.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 x 3/8 NPT",
      Material: "Bronce",
    },
  },
  {
    id: "valvula-cheque-compresor-compacto-antimonio",
    name: "Válvula de Cheque de 1/2 para compresor compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 35000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio-medidas.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 x 3/8 NPT",
      Material: "Antimonio",
    },
  },
  {
    id: "valvula-cheque-compresor-aire-seco",
    name: "Válvula de Cheque para compresor libre de aceite (aire seco)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 35000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco-partes.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 x 3/8 NPT",
      Material: "Bronce",
    },
  },
  {
    id: "valvula-cheque-compresor-3-8-descarga",
    name: "Válvula de Cheque de 3/8 con descarga para compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd-atras.jpeg",
      ),
    ],
    specs: {
      Conexión: "3/8 NPT",
    },
  },
  {
    id: "valvula-cheque-compresor-3-8-no-descarga",
    name: "Válvula de Cheque de 3/8 sin descarga para compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 45000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd-atras.jpeg",
      ),
    ],
    specs: {
      Conexión: "3/8 NPT",
    },
  },
  {
    id: "valvula-cheque-compresor-1-2-descarga",
    name: "Válvula de Cheque de 1/2 con descarga para compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 60000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-atras.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "valvula-cheque-compresor-1-2-descarga",
    name: "Válvula de Cheque de 1/2 con descarga para compresor en Hierro",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 70000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro.jpeg",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro-atras.jpeg",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
      Material: "Hierro",
    },
  },
  
  {
    id: "valvula-cheque-compresor-interna",
    name: "Válvula de Cheque para compresor interna",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 35000,
    image: getImage(
      "productos/repuestos-accesorios/valvulas-cheque-compresor-interna.jpeg",
    ),
    variantType: "dropdown",
    variants: [
      {
        name: "Válvula de cheque interna 1/2 * 1/2",
        price: 150000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2.jpeg",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2-medidas.jpeg",
          ),
        ],
      },
      {
        name: "Válvula de cheque interna 1/2 * 3/4",
        price: 200000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2x3-4.jpeg",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2x3-4-medidas.jpeg",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 1" * 3/4',
        price: 300000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1x3-4.jpeg",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1x3-4-medidas.jpeg",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 1" 1/2 * 1" 1/4',
        price: 680000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-1-2x1-1-4.jpeg",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 2" * 1" 1/2',
        price: 850000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-2x1-1-2.jpeg"
          ),
        ],
      },
    ],
    specs: {
      Cuerpo: "Laton / Acero",
      Conector: "Laton / Acero",
      Resorte: "Acero Inoxidable",
      Conexión: "Rosca NPT",
      "Presión de trabajo": "250 PSI",
      "Temperatura Máxima de Operación": "100°C",
    },
  },

  {
    id: "filtro-compresor-plastico",
    name: "Filtro de Aire para Compresor plastico",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Los filtros de aire capturan partículas sólidas como polvo, suciedad y polen que, de ingresar al compresor, podrían causar un desgaste prematuro en cilindros, válvulas y anillos. Al asegurar un flujo de succión limpio, se protege la integridad mecánica de los componentes internos y se garantiza un rendimiento óptimo, prolongando significativamente la vida operativa del equipo.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/filtro-plastico.jpeg"
    ),
    variantType: "dropdown",
    variants: [
      { name: "Filtro plástico de 1/2 pequeño", price: 15000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-plastico-1-2-pequeño.jpeg"
          ),
        ]
      },
      { name: "Filtro plástico de 1/2", price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2-elemento.jpeg"
          ),
        ]
      },
      { name: "filtro plástico de 3/4", price: 50000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2-elemento.jpeg"
          ),
        ]
      },
      { name: 'filtro plástico de 1" rosca fina', price: 60000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-fina.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria-elemento.jpeg"
          ),
        ]
      },
      { name: 'filtro plástico de 1" rosca ordinaria', price: 60000, 
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria.jpeg"
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria-elemento.jpeg"
          ),
        ]
      },
    ],
    specs: {},
  },
  // TODO falta el de 2"
  {
    id: "filtro-compresor-metalico",
    name: "Filtro de Aire para Compresor metálico",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Los filtros de aire capturan partículas sólidas como polvo, suciedad y polen que, de ingresar al compresor, podrían causar un desgaste prematuro en cilindros, válvulas y anillos. Al asegurar un flujo de succión limpio, se protege la integridad mecánica de los componentes internos y se garantiza un rendimiento óptimo, prolongando significativamente la vida operativa del equipo.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/filtro-metalico.jpeg",
    ),
    variantType: "dropdown",
    variants: [
      { name: "Filtro metálico de 1/4", price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-4.jpeg")
          ]
       },
      { name: "Filtro metálico de 3/8", price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-8.jpeg")
          ]
       },
       { name: "Filtro metálico de 1/2 pequeño", price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2-pequeño.jpeg")
          ]
       },
       { name: "Filtro metálico de 1/2", price: 40000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2.jpeg"),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2-dentro.jpeg")  
          ]
       },
       { name: "Filtro metálico de 3/4", price: 80000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-4.jpeg"),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-4-atras.jpeg")  
          ]
       },
       { name: 'Filtro metálico de 1" rosca fina', price: 90000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1.jpeg"),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-atras.jpeg")  
          ]
       },
       { name: 'Filtro metálico de 1" rosca ordinaria', price: 90000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1.jpeg"),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-atras.jpeg")  
          ]
       },
       { name: 'Filtro metálico de 2"', price: 100000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-2.jpeg"),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2-dentro.jpeg")  
          ]
       },

    ],
    specs: {},
  },
  //TODO falta producto muñeco de compacto

  {
    id: "culata-compresor-compacto-grande",
    name: "Culata para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La culata es una pieza esencial diseñada para el ensamblaje o reemplazo de la parte superior de la unidad de bombeo, actuando como el cierre hermético de la cámara de compresión. Su construcción robusta, fabricada en materiales de alta resistencia térmica como hierro fundido o aluminio, garantiza una durabilidad superior y un soporte firme para el sistema de válvulas (flappers o discos). Gracias a su diseño optimizado con amplias aletas de refrigeración, permite una disipación de calor eficiente durante los ciclos de trabajo exigentes, protegiendo los componentes internos y asegurando la operatividad constante y el rendimiento máximo de su compresor industrial.",
    price: 120000,
    image: getImage(
      "productos/repuestos-accesorios/culata-compresor-compacto-grande.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/culata-compresor-compacto-grande.jpeg",
      ),
    ],
    specs: {
      Material: "Aluminio Fundido",
    },
  },
  {
    id: "codo-compresor-compacto",
    name: "Codo de 3/8 para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este codo racor es ideal para usar en compresores de aire compactos y sistemas de tuberías, permitiendo un ajuste seguro y eficiente entre las diferentes partes de los sistemas neumáticos. Su diseño permite realizar una conexión estable sin fugas, asegurando un rendimiento confiable y duradero.",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/codo-compresor-compacto.jpeg",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/codo-compresor-compacto.jpeg",
      ),
    ],
    specs: {
      Conexión: "3/8",
    },
  },
];

// SERVICIOS

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Mantenimiento Preventivo y Correctivo de Compresores Industriales",
    category: ServiceCategory.MANTENIMIENTO,
    description:
      "Mantenimiento preventivo y correctivo de compresores industriales para garantizar operación continua, eficiencia energética y reducción de fallas inesperadas.",
    icon: "engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    features: [
      "Optimización del rendimiento del compresor",
      "Extensión de la vida útil del equipo",
      "Reducción de costos operativos y paradas no programadas",
    ],
  },
  {
    id: "s2",
    title: "Instalación de Tuberías y Redes Neumáticas",
    category: ServiceCategory.TUBERIAS,
    description:
      "Instalación de redes de aire comprimido termofusionadas, diseñadas para minimizar fugas, optimizar el flujo de aire y garantizar seguridad y eficiencia operativa.",
    icon: "account_tree",
    imageUrl:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    features: [
      "Termofusión técnica certificada",
      "Cero corrosión en la red neumática",
      "Diseño optimizado del flujo de aire",
    ],
  },
  {
    id: "s3",
    title: "Montaje de Lavaderos Automotrices",
    category: ServiceCategory.LAVADEROS,
    description:
      "Diseño y montaje de lavaderos automotrices con sistemas de espuma, hidrolavado y redes hidráulicas para operación eficiente y alto desempeño.",
    icon: "local_car_wash",
    imageUrl:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800",
    features: [
      "Sistemas de espuma",
      "Redes hidráulicas y neumáticas",
      "Equipos de alta presión industrial",
      "Sistemas automatizados de lavado",
    ],
  },
  {
    id: "s4",
    title: "Fabricación de Tanques",
    category: ServiceCategory.TANQUES,
    description:
      "Fabricación de tanques de aire comprimido diseñados para alta presión, cumpliendo estándares técnicos de seguridad y resistencia estructural.",
    icon: "warehouse",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    features: [
      "Tanques para alta presión",
      "Estructura robusta y durabilidad industrial",
    ],
  },
  {
    id: "s5",
    title: "Pintura Electrostática",
    category: ServiceCategory.PINTURA,
    description:
      "Aplicación de pintura electrostática industrial para protección anticorrosiva, acabado uniforme y mayor vida útil de estructuras metálicas.",
    icon: "palette",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    features: [
      "Acabado estético uniforme",
      "Alta resistencia a corrosión y desgaste",
      "Amplia variedad de colores",
      "Aplicación en estructuras metálicas",
    ],
  },
  {
    id: "s6",
    title: "Soldadura",
    category: ServiceCategory.SOLDADURA,
    description:
      "Servicios de soldadura industrial aplicados a estructuras metálicas, tanques y componentes mecánicos con técnicas certificadas.",
    icon: "build",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    features: [
      "Soldadura MIG / MAG",
      "Soldadura TIG",
      "Soldadura SMAW",
      "Soldadura FCAW",
      "Reparación y fabricación de estructuras metálicas",
      "Reparaciones rápidas y eficientes",
      "Reconstrucción de partes críticas",
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Deyanira Gómez",
    role: "Asesora Comercial",
    image: getImage("nosotros/team/Deyanira.webp"),
  },
  {
    name: "Paolo Astudillo",
    role: "Técnico en sistemas de aire comprimido, Soldador Industrial",
    image: getImage("nosotros/team/Paolo.jpeg"),
  },
  {
    name: "Carlos Andrés Chocue",
    role: "Técnico en sistemas de aire comprimido",
    image: getImage("nosotros/team/Andres_chocue.jpeg"),
  },
  {
    name: "Adriana Sofía Gualy",
    role: "Asesora Comercial",
    image: getImage("nosotros/team/sofia.jpeg"),
  },
  {
    name: "Dario Chocue",
    role: "Técnico en sistemas de aire comprimido",
    image: getImage("nosotros/team/Dario-chocue.jpeg"),
  },
  {
    name: "Fabian Andres Vargas",
    role: "Técnico en sistemas de aire comprimido",
    image: getImage("nosotros/team/Andres_Vargas.jpeg"),
  },
  {
    name: "Rocio Silva",
    role: "Asesora Comercial",
    image: getImage("nosotros/team/Rocio.webp"),
  },
  {
    name: "Alejandro ",
    role: "Técnico en sistemas de aire comprimido",
    image: getImage("nosotros/team/Alejandro.jpeg"),
  },
];
