import { Category, SubCategory } from "../types";
import { SERVICES } from "../services/services";

//Estructura de productos

export const PRODUCT_STRUCTURE = [
  {
    name: Category.COMPRESORES,
    subs: [
      SubCategory.TORNILLO,
      SubCategory.PISTON,
      SubCategory.AIRESECO,
      SubCategory.DIESEL_GASOLINA,
    ],
  },
  { name: Category.CABEZOTES, subs: [] },
  {
    name: Category.MOTORES,
    subs: [SubCategory.ELECTRICOS, SubCategory.GASOLINA, SubCategory.DIESEL],
  },
  { name: Category.TANQUES_ESPUMADORAS, subs: [] },
  { name: Category.REPUESTOS_ACCESORIOS, subs: [] },
  { name: Category.PISTOLAS_AEROGRAFOS, subs: [] },
  { name: Category.HERRAMIENTA_HIDRAULICA_NEUMATICA, subs: [] },
];

export const SITE_MENU = {
  productos: PRODUCT_STRUCTURE,
  servicios: SERVICES.map((s) => ({ id: s.id, name: s.title })),
};