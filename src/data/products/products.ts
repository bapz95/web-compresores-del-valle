import type { Product } from "../types";
import type { LightProduct } from "../../data/products/types";

import { COMPRESORES } from "./compresores";
import { CABEZOTES } from "./cabezotes";
import { MOTORES } from "./motores";
import { TANQUES_ESPUMADORAS } from "./tanquesEspumadoras";
import { REPUESTOS_ACCESORIOS } from "./repuestosAccesorios";
import { PISTOLAS_AEROGRAFOS } from "./pistolasAerografos";
import { HERRAMIENTA_HIDRAULICA_NEUMATICA } from "./herramientaHidraulicaNeumatica";

export const PRODUCTS: Product[] = [
  ...COMPRESORES,
  ...CABEZOTES,
  ...MOTORES,
  ...TANQUES_ESPUMADORAS,
  ...REPUESTOS_ACCESORIOS,
  ...PISTOLAS_AEROGRAFOS,
  ...HERRAMIENTA_HIDRAULICA_NEUMATICA,
];

export const LIGHT_PRODUCTS: LightProduct[] = PRODUCTS.map((p) => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  category: p.category,
  subCategory: p.subCategory,
  image: typeof p.image === "string" ? p.image : p.image?.src,
}));