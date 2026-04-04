import type { ImageMetadata } from "astro";

// CATEGORIAS
export enum Category {
  COMPRESORES = "Compresores",
  CABEZOTES = "Cabezotes",
  TANQUES_ESPUMADORAS = "Tanques y espumadoras",
  REPUESTOS_ACCESORIOS = "Repuestos y accesorios",
  MOTORES = "Motores",
  PISTOLAS_AEROGRAFOS = "Pistolas y Aerógrafos",
  HERRAMIENTA_HIDRAULICA_NEUMATICA = "Herramienta Hidráulica y neumática",
}
// SUBCATEGORIAS
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
// LISTA DE SERVICIOS
export enum ServiceCategory {
  MANTENIMIENTO = "Mantenimiento de compresores",
  TUBERIAS = "Instalación de tuberias de aire en polipropileno",
  LAVADEROS = "Montaje de lavaderos para carros y motos",
  TANQUES = "Fabricación de tanques",
  PINTURA = "Pintura electrostática",
  SOLDADURA = "Soldadura tig y mig",
}

export type ImageSource = ImageMetadata | string;
// Si el producto tiene variantes, por ahora solo la posicion dle tanque
export interface ProductVariant {
  name: string; 
  price?: number; 
  promoPrice?: number; 
  image?: ImageSource; 
  images?: ImageSource[];
  
}


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
  variants?: ProductVariant[];
  variantType?: "toggle" | "dropdown";
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

//Interface para la sección 4.5 (productos complementarios del HOME)
export interface CategoryItem {
  title: string;
  image: ImageSource;
  link: string;
}
//Interface para la sección 5 (historias de éxito del HOME)
export interface SuccessStory {
  title: string;
  subtitle: string;
  description: string;
  before: ImageSource; 
  after: ImageSource;
}

// para la sección de Tipos de Compresores del HOME
export interface compressorType {
  title: string;
  description: string;
  image: ImageSource;
  link: string;
}

export interface Clientes {
  name: string;
  logo: ImageSource;
}

// Para la sección 6. Por qué elegirnos del HOME
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

// Interfaz para los botones (Call To Action)
export interface ButtonCTA {
  text: string;
  link: string;
}

// Interfaz principal para cada Slide
export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: ImageSource; 
  primaryCta: ButtonCTA;
  secondaryCta: ButtonCTA;
}

export interface Sector {
  name: string;
  icon: string;
  desc: string;
}

// Para el Header (Pagina Servicios)
export interface ServiceHeaderPhotos {
  mantenimiento: ImageSource[];
  tuberias: ImageSource[];
  lavaderos: ImageSource[];
  fabricacion: ImageSource[];
  pintura: ImageSource[];
  soldadura: ImageSource[];
}

// Para las Galerías (Pagina de Servicios)
export type ServiceGalleries = Record<string, ImageSource[]>;

