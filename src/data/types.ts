import type { ImageMetadata } from "astro";

export enum Category {
  COMPRESORES = "Compresores",
  CABEZOTES = "Cabezotes",
  TANQUES_ESPUMADORAS = "Tanques y espumadoras",
  REPUESTOS_ACCESORIOS = "Repuestos y accesorios",
  MOTORES = "Motores",
  PISTOLAS_AEROGRAFOS = "Pistolas y aerografos",
  HERRAMIENTA_HIDRAULICA_NEUMATICA = "Herramienta Hidraulica y neumatica",
}

export enum SubCategory {
  // Compresores
  TORNILLO = "Compresores de Tornillo",
  PISTON = "Compresores de piston",
  AIRESECO = "Compresores de aire seco",
  // Motores
  ELECTRICOS = "Motores electricos",
  GASOLINA = "Gasolina",
  DIESEL = "Diesel",
}

export enum ServiceCategory {
  MANTENIMIENTO = "Mantenimiento de compresores",
  TUBERIAS = "Instalación de tuberias de aire en polipropileno",
  LAVADEROS = "Montaje de lavaderos para carros y motos",
  TANQUES = "Fabricación de tanques",
  PINTURA = "Pintura electrostática",
  SOLDADURA = "Soldadura tig y mig",
}

export type ImageSource = ImageMetadata | string;

export interface Product {
  id: string;
  name: string;
  category: Category;
  subCategory?: SubCategory;
  brand: string;
  description: string;
  price: number;
  promoPrice?: number; // Precio promocional opcional
  promoLabel?: string; // Etiqueta para promociones (ej: "20% OFF", "Oferta Especial")
  image: ImageSource; // Imagen principal para listados
  images?: ImageSource[]; // Galería completa
  specs: { [key: string]: string };
  warranty?: string; // Información de garantía (ej: "12 Meses", "6 Meses")
}

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  icon: string;
  imageUrl: ImageSource;
  features: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: ImageSource;
}
