import { getImage } from "../shared/images";
import { ServiceCategory, type ServiceGalleries, type ServiceHeaderPhotos, type ServiceItem } from "../types";
import {
  Wrench,
} from "lucide-react";
import {
  GiPipes,
  GiFuelTank,
} from "react-icons/gi";
import { MdOutlineLocalCarWash } from "react-icons/md";
import { GoZap } from "react-icons/go";
import { PiSprayBottle } from "react-icons/pi";

// DATOS PARA EL HERO DE LA PAGINA DE SERVICIOS (Se utilizan solo los priimeros 3 - diferentes fotos)
export const headerPhotos: ServiceHeaderPhotos = {
  mantenimiento: [
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-3065.webp",
    ),
    getImage("servicios/Header/compresores-logo-espalda.webp"),
    getImage(
      "servicios/Pintura-Electrostatica/pintura-electrostatica-tanque.webp",
    ),
  ],
  tuberias: [
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-1155.webp",
    ),
    getImage("servicios/Tuberias/tuberia-techo.webp"),
  ],
  lavaderos: [
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-ta80.webp",
    ),
    getImage("servicios/Header/montaje-compresor-tornillo-10hp.webp"),
    getImage("servicios/Soldadura/soldadura-tanque.webp"),
  ],
  fabricacion: [],
  pintura: [],
  soldadura: [],
};
export const SERVICES: ServiceItem[] = [
  {
    id: "mantenimiento-compresores-industriales",
    title: "Mantenimiento Preventivo y Correctivo de Compresores Industriales",
    category: ServiceCategory.MANTENIMIENTO,
    description:
      "Mantenimiento preventivo y correctivo de compresores industriales para garantizar operación continua, eficiencia energética y reducción de fallas inesperadas.",
    icon: Wrench,
    imageUrl: "",
    features: [
      "Optimización del rendimiento del compresor",
      "Extensión de la vida útil del equipo",
      "Reducción de costos operativos y paradas no programadas",
    ],
  },
  {
    id: "instalacion-tuberias-redes-neumaticas",
    title: "Instalación de Tuberías y Redes Neumáticas",
    category: ServiceCategory.TUBERIAS,
    description:
      "Instalación de redes de aire comprimido termofusionadas, diseñadas para minimizar fugas, optimizar el flujo de aire y garantizar seguridad y eficiencia operativa.",
    icon: GiPipes,
    imageUrl: "",
    features: [
      "Termofusión técnica certificada",
      "Cero corrosión en la red neumática",
      "Diseño optimizado del flujo de aire",
    ],
  },
  {
    id: "montaje-lavaderos-automotrices",
    title: "Montaje de Lavaderos Automotrices",
    category: ServiceCategory.LAVADEROS,
    description:
      "Diseño y montaje de lavaderos automotrices con sistemas de espuma, hidrolavado y redes hidráulicas para operación eficiente y alto desempeño.",
    icon: MdOutlineLocalCarWash,
    imageUrl: "",
    features: [
      "Sistemas de espuma",
      "Redes hidráulicas y neumáticas",
      "Equipos de alta presión industrial",
      "Sistemas automatizados de lavado",
      "Instalación de elevadores hidraulícos",
    ],
  },
  {
    id: "fabricacion-tanques",
    title: "Fabricación de Tanques",
    category: ServiceCategory.TANQUES,
    description:
      "Fabricación de tanques para aire comprimido diseñados para alta presión, cumpliendo estándares técnicos de seguridad y resistencia estructural.",
    icon: GiFuelTank,
    imageUrl: "",
    features: [
      "Tanques para alta presión",
      "Estructura robusta y durabilidad industrial",
    ],
  },
  {
    id: "pintura-electrostatica",
    title: "Pintura Electrostática",
    category: ServiceCategory.PINTURA,
    description:
      "Aplicación de pintura electrostática industrial para protección anticorrosiva, acabado uniforme y mayor vida útil de estructuras metálicas.",
    icon: PiSprayBottle,
    imageUrl: "",
    features: [
      "Acabado estético uniforme",
      "Alta resistencia a corrosión y desgaste",
      "Amplia variedad de colores",
      "Aplicación en estructuras metálicas",
    ],
  },
  {
    id: "soldadura",
    title: "Soldadura",
    category: ServiceCategory.SOLDADURA,
    description:
      "Servicios de soldadura industrial aplicados a estructuras metálicas, tanques y componentes mecánicos con técnicas certificadas.",
    icon: GoZap,
    imageUrl: "",
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

// El valor inicial para el estado de los servicios
export const INITIAL_SERVICE_INDICES = {
  "mantenimiento-compresores-industriales": 0,
  "instalacion-tuberias-redes-neumaticas": 0,
  "montaje-lavaderos-automotrices": 0,
  "fabricacion-tanques": 0,
  "pintura-electrostatica": 0,
  soldadura: 0,
};

// Galerías específicas por servicio
export const serviceGalleries: ServiceGalleries = {
  "mantenimiento-compresores-industriales": [
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-3065.webp",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-1155.webp",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/reparacion-cabezote-ta80.webp",
    ),
    getImage(
      "servicios/Reparaciones-Mantenimientos/mantenimiento-compacto.webp",
    ),
  ],
  //Tuberías
  "instalacion-tuberias-redes-neumaticas": [
    getImage("servicios/Tuberias/instalacion-tuberia-termofijadora.webp"),
    getImage("servicios/Tuberias/instalacion-tuberia-selladora.webp"),
    getImage("servicios/Tuberias/tuberia-techo.webp"),
  ],
  //Lavaderos
  "montaje-lavaderos-automotrices": [
    getImage("servicios/Lavaderos/instalacion-elevador-lavadero.webp"),
    getImage("servicios/Lavaderos/instalacion-elevador-uñas-lavadero.webp"),
    getImage("servicios/Lavaderos/montaje-lavadero.webp"),
  ],
  //Fabricación Tanques
  "fabricacion-tanques": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  ],
  //Pintura
  "pintura-electrostatica": [
    getImage(
      "servicios/Pintura-Electrostatica/pintura-electrostatica-tanque.webp",
    ),
    getImage(
      "servicios/Pintura-Electrostatica/pintura-electrostatica-tanques.webp",
    ),
  ],
  //Soldadura
  soldadura: [
    getImage("servicios/Soldadura/soldadura.webp"),
    getImage("servicios/Soldadura/soldadura-tanque.webp"),
    getImage("servicios/Soldadura/soldadura-tanque1.webp"),
  ],
};
