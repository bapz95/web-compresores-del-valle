import Image from "astro/components/Image.astro";
import {
  Category,
  SubCategory,
  ServiceCategory,
  type Product,
  type ServiceItem,
  type TeamMember,
} from "./types";
import type { ImageMetadata } from "astro";

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

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Atlas Copco G11 FF",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "",
    description:
      'Sistema completo "Plug & Play" con secador integrado. Ideal para industria continua. Este modelo G11 ofrece una eficiencia superior y un diseño compacto.',
    price: 18500000,
    warranty: "12 Meses (Directa)",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    ],
    specs: { Potencia: "15 HP", Presión: "125 PSI", Caudal: "55 CFM" },
  },
  {
    id: "2",
    name: "Compresor CDV Heavy Duty",
    category: Category.COMPRESORES,
    subCategory: SubCategory.PISTON,
    brand: "CDV S.A.S.",
    description:
      "Unidad reforzada bicilíndrica. Máxima durabilidad en trabajos pesados de talleres mecánicos y montallantas.",
    price: 4500000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-159742324403d-ef1dd52e8043?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-159742324403d-ef1dd52e8043?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    ],
    specs: { Potencia: "5 HP", Tanque: "60 Galones", Presión: "150 PSI" },
  },
  {
    id: "3",
    name: "Motor Trifásico High-Torque",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "Siemens",
    description:
      "Motor industrial de alta eficiencia para uso continuo en plantas. Bobinado de cobre 100%.",
    price: 2800000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=600",
    specs: { Fases: "Trifásico", RPM: "3600", Eficiencia: "IE3" },
  },
  {
    id: "4",
    name: "Tanque Vertical 500L",
    category: Category.TANQUES_ESPUMADORAS,
    brand: "CDV S.A.S.",
    description:
      "Tanque de almacenamiento con certificación ASME para alta presión. Incluye manómetro y válvula de seguridad.",
    price: 3200000,
    warranty: "24 Meses (Estructura)",
    image:
      "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=600",
    specs: { Capacidad: "500 Litros", Norma: "ASME", "Presión Máx": "200 PSI" },
  },
  {
    id: "5",
    name: "Compresor de Tornillo GA 30",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "Atlas Copco",
    description:
      "Rendimiento superior con tecnología de tornillo rotativo inyectado por aceite para las industrias más exigentes.",
    price: 32000000,
    warranty: "12 Meses (Directa)",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600",
    specs: { Potencia: "40 HP", Caudal: "180 CFM", Ruido: "68 dB" },
  },
  {
    id: "6",
    name: "Cabezote de Piston 10HP",
    category: Category.CABEZOTES,
    brand: "CDV S.A.S.",
    description:
      "Cabezote de repuesto de alta resistencia, compatible con múltiples tanques de 10HP.",
    price: 1800000,
    warranty: "6 Meses",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600",
    specs: { Cilindros: "2", Etapas: "2", Material: "Hierro fundido" },
  },
  {
    id: "7",
    name: "Motor Diesel Industrial 25HP",
    category: Category.MOTORES,
    subCategory: SubCategory.DIESEL,
    brand: "Yanmar",
    description:
      "Motor diesel de alto torque para aplicaciones donde no hay red eléctrica disponible.",
    price: 8500000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    specs: { Potencia: "25 HP", Arranque: "Eléctrico", Cilindros: "2" },
  },
  {
    id: "8",
    name: "Espumadora de 80 Litros",
    category: Category.TANQUES_ESPUMADORAS,
    brand: "CDV S.A.S.",
    description:
      "Ideal para autolavados profesionales, construcción en acero inoxidable de calibre industrial.",
    price: 1350000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600",
    specs: { Capacidad: "80 L", Material: "Acero Inox", Manguera: "10 m" },
  },
  {
    id: "9",
    name: "Taladro Neumático Pro-X",
    category: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA,
    brand: "Chicago Pneumatic",
    description:
      "Herramienta de alto impacto para líneas de montaje y mantenimiento industrial.",
    price: 950000,
    warranty: "6 Meses",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
    specs: { RPM: "1800", Mandril: '1/2"', Consumo: "4 CFM" },
  },
  {
    id: "10",
    name: "Filtro Separador Aire-Aceite",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "Sullair",
    description:
      "Elemento de filtración de alta eficiencia para compresores de tornillo rotativo.",
    price: 320000,
    warranty: "3 Meses (Falla Fabrica)",
    image:
      "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=600",
    specs: { Eficiencia: "99.9%", "Vida útil": "4000 h", Rosca: "1-12" },
  },
  {
    id: "11",
    name: "Compresor de Tornillo CV-10HP",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "CDV S.A.S.",
    description:
      "Nuestra solución compacta de tornillo para talleres que buscan aire continuo y silencioso.",
    price: 12500000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600",
    specs: { Potencia: "10 HP", Caudal: "35 CFM", Ruido: "62 dB" },
  },
  {
    id: "12",
    name: "Motor Gasolina GX200",
    category: Category.MOTORES,
    subCategory: SubCategory.GASOLINA,
    brand: "Honda",
    description:
      "El motor a gasolina más confiable del mundo para compresores portátiles y maquinaria.",
    price: 2450000,
    warranty: "12 Meses",
    image:
      "https://images.unsplash.com/photo-159742324403d-ef1dd52e8043?auto=format&fit=crop&q=80&w=600",
    specs: { Potencia: "6.5 HP", Cilindrada: "196 cc", Tanque: "3.1 L" },
  },
  {
    id: "13",
    name: "Compresor en oferta",
    category: Category.COMPRESORES,
    subCategory: SubCategory.TORNILLO,
    brand: "CHV",
    description:
      'Sistema completo "Plug & Play" con secador integrado. Ideal para industria continua. Este modelo G11 ofrece una eficiencia superior y un diseño compacto.',
    price: 18500000,
    promoPrice: 15000000,
    promoLabel: "Oferta Especial",
    warranty: "12 Meses (Directa)",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
    ],
    specs: { Potencia: "15 HP", Presión: "125 PSI", Caudal: "55 CFM" },
  },
  {
    id: "aerografo-ecologico",
    name: "Aerógrafo Ecológico",
    category: Category.PISTOLAS_AEROGRAFOS,
    brand: "wufu",
    description:
      "Pistola de pintura de baja presión ideal para acabados finos y detallados. Compatible con compresores de hasta 50 PSI.",
    price: 238000,
    image: getImage(
      "productos/pistolas-aerografos/aerografo-ecologico.jpeg",
    ),
    images: [
      getImage(
        "productos/pistolas-aerografos/aerografo-ecologico.jpeg",
      ),
    ],
    specs: { "Presión MAX": "43 PSI", "Capacidad del vaso": "1000 ml", "Entrada de aire": "1/4 NPT", "Diametro boquilla": "1.4 mm" },
  },
];

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
