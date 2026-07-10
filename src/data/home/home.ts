import { getImage } from "../../data/shared/images";
import type {
  CategoryItem,
  Clientes,
  compressorType,
  Feature,
  HeroSlide,
  Sector,
  SuccessStory,
} from "../types";
import { Wrench, Hospital, Anvil, PackageOpen } from "lucide-react";
import { MdAgriculture, MdFastfood } from "react-icons/md";
import { FaMedal, FaStar, FaShieldAlt } from "react-icons/fa";
import { FcAutomotive } from "react-icons/fc";

// Datos para la sección 4.5 (productos complementarios del HOME)
export const complementaryCategories: CategoryItem[] = [
  {
    title: "Motores Eléctricos",
    image: getImage("home/seccion-complementarios/motores-home.webp"),
    link: "/productos?cat=Motores",
  },
  {
    title: "Cabezotes",
    image: getImage("home/seccion-complementarios/cabezotes-home.webp"),
    link: "/productos?cat=Cabezotes",
  },
  {
    title: "Tanques y Espumadoras",
    image: getImage("home/seccion-complementarios/tanques-pulmon.webp"),
    link: "/productos?cat=Tanques%20y%20espumadoras",
  },
  {
    title: "Repuestos y Accesorios",
    image: getImage("home/seccion-complementarios/repuestos-accesorios.webp"),
    link: "/productos?cat=Repuestos%20y%20accesorios",
  },
  {
    title: "Pistolas y Aerógrafos",
    image: getImage("home/seccion-complementarios/pistolas-variedad.webp"),
    link: "/productos?cat=Pistolas%20y%20Aerógrafos",
  },
  {
    title: "Herramienta Hidráulica y Neumática",
    image: getImage(
      "home/seccion-complementarios/herramienta-hidraulica-neumatica.webp",
    ),
    link: "/productos?cat=Herramienta%20Hidráulica%20y%20neumática",
  },
];

// Datos para la sección de Tipos de Compresores del HOME
export const compressorTypes: compressorType[] = [
  {
    title: "Compresores de Tornillo",
    description:
      "Rendimiento continuo y eficiencia energética para procesos industriales exigentes.",
    image: getImage("home/seccion-categorias/compresores-tornillo-home.webp"),
    link: "/productos?cat=Compresores&sub=Compresores%20de%20Tornillo",
  },
  {
    title: "Compresores de Pistón",
    description:
      "Versatilidad y potencia en ciclos intermitentes, ideales para talleres, servitecas y procesos de mediana demanda.",
    image: getImage("home/seccion-categorias/compresores-piston-home.webp"),
    link: "/productos?cat=Compresores&sub=Compresores%20de%20piston",
  },
  {
    title: "Libres de Aceite (Aire Seco)",
    description:
      "Aire 100% puro y libre de contaminantes. Diseñados para laboratorios, clínicas y el sector alimentario.",
    image: getImage("home/seccion-categorias/compresores-aireseco.webp"),
    link: "/productos?cat=Compresores&sub=Compresores%20de%20aire%20seco",
  },
];

// --- DATOS DE LA SECCIÓN POR QUÉ ELEGIRNOS---
export const whyChooseUsFeatures: Feature[] = [
  {
    title: "25+ Años de Experiencia",
    description:
      "Un cuarto de siglo innovando en sistemas de aire comprimido a nivel nacional, ofreciendo soluciones a la medida para la industria, comercio y hogar.",
    icon: FaMedal,
  },
  {
    title: "Calidad Internacional",
    description:
      "Equipos certificados bajo los más altos estándares de calidad, diseñados para operación continua y trabajo pesado.",
    icon: FaStar,
  },
  {
    title: "Servicio Especializado",
    description:
      "Técnicos capacitados disponibles para garantizar la máxima disponibilidad de su planta.",
    icon: Wrench,
  },
  {
    title: "Garantía Extendida",
    description:
      "Garantía sólida de hasta 1 año respaldada por mano de obra calificada. Nos aseguramos de que su operación nunca se detenga, brindándole la confianza y tranquilidad que su inversión merece.",
    icon: FaShieldAlt,
  },
];
// Imagenes de experiencia y garantia
export const BRAND_BADGES = {
  experiencia: getImage("home/seccion-elegirnos/experiencia-cdv.webp"),
  garantia: getImage("home/seccion-elegirnos/etiqueta-garantia.webp"),
};

// --- DATOS CASOS DE EXITO del HOME---
export const successStories: SuccessStory[] = [
  {
    title: "Mantenimiento correctivo de Compresor Bauker",
    subtitle: "Restauración de compresión",
    description:
      "Se realizó mantenimiento general, el cual incluye: revisión del sistema de compresión, cambio de empaquetadura, asentada de válvulas, cepillado de platos, cambio de elementos filtrantes, cambio de aceite, limpieza y pintura general.",
    before: getImage("home/before-after/mantenimiento-compresor-bauker.webp"),
    after: getImage(
      "home/before-after/mantenimiento-compresor-bauker-despues.webp",
    ),
  },
  {
    title: "Mantenimiento y Reparación de compresor de 1 HP",
    subtitle: "Restauración de compresión y componentes eléctricos",
    description:
      "Se realizó un proceso técnico de mantenimiento y reparación integral, el cual garantiza la restauración total de la eficiencia operativa del equipo. Este servicio incluyó: Sistema de Compresión: Cambio de biela, anillos, empaquetadura y ajuste de válvulas (asentada y cepillado). Tren de Potencia: Reemplazo de rodamientos en motor y cabezote, incluyendo cambio de polea y correa. Sistema Eléctrico y Control: Renovación de automático, caja de capacitores y componentes de drenaje. Otros: Cambio de aceite, filtros y restauración estética integral (limpieza y pintura).",
    before: getImage(
      "home/before-after/mantenimiento-reparacion-compresor-1hp-antes.webp",
    ),
    after: getImage(
      "home/before-after/mantenimiento-reparacion-compresor-1hp-despues.webp",
    ),
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
    image: getImage("servicios/Header/montaje-compresor-tornillo-10hp.webp"),
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
    image: getImage("home/hero-slide/reparacion-compresor-tornillo.webp"),
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
    image: getImage("home/hero-slide/compresores-1hp-aireseco.webp"),
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
    icon: MdAgriculture,
    desc: "Ingenios y Molienda",
  },
  {
    name: "Alimentos y Bebidas",
    icon: MdFastfood,
    desc: "Plantas de Producción",
  },
  {
    name: "Farmacéutica",
    icon: Hospital,
    desc: "Aire de Alta Pureza",
  },
  {
    name: "Automotriz",
    icon: FcAutomotive,
    desc: "Ensamblaje y Pintura",
  },
  {
    name: "Metalmecánica",
    icon: Anvil,
    desc: "Corte y Soldadura",
  },

  { name: "Logística", icon: PackageOpen, desc: "Empaque y Distribución" },
];
