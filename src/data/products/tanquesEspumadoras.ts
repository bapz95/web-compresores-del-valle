import { getImage } from "../shared/images";
import { Category, SubCategory, type Product } from "../types";
export const TANQUES_ESPUMADORAS: Product[] = [
    {
    id: "tolva-sandblasting-big-red",
    name: "Tolva para sandblasting BIG RED",
    category: Category.TANQUES_ESPUMADORAS,
    brand: "BIG RED",
    description:
      "Tolva industrial diseñada para la eliminación eficiente de óxido, pintura y recubrimientos en áreas extensas. Su sistema de alta densidad garantiza un flujo abrasivo constante, proporcionando un tratamiento de superficies rápido, efectivo y de nivel profesional.",
    price: 1800000,
    image: getImage(
      "productos/tanques-espumadoras/tolva-sandblasting-big-red.webp",
    ),
    images: [
      getImage("productos/tanques-espumadoras/tolva-sandblasting-big-red.webp"),
    ],
    specs: {
      Capacidad: "10 galones",
      "Presión de trabajo": "65-125 PSI",
      "Consumo de aire": "6 -25 CFM",
      "entrada de aire": "1/4 NPT",
    },
  },
]