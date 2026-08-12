import { getImage } from "../shared/images";
import { Category, SubCategory, type Product } from "../types";
export const MOTORES: Product[] = [
  //TODO faltan precio 1800
  {
    id: "motor-monofasico-1hp-110-220v",
    name: "Motor Monofásico 1 HP (110-220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor monofásico de alta eficiencia, ideal para compresores de pistón y maquinaria ligera. Este equipo combina fiabilidad y potencia moderada con una versatilidad eléctrica superior, gracias a su capacidad de operación en 110/220V. Su construcción robusta con clasificación IP21 garantiza la protección de los componentes internos contra partículas y goteos, asegurando un desempeño constante y una larga vida útil en entornos industriales.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-monofasico-1hp.webp"),
    images: [
      getImage("productos/motores/motor-monofasico-1hp.webp"),
      getImage("productos/motores/motor-monofasico-1hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1800 RPM", price: 0 },
      { name: "3600 RPM", price: 1500000 },
    ],
    specs: {
      Potencia: "1 HP",
      Fases: "1",
      "Corriente nominal": "110V / 220V",
      RPM: "1800 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  {
    id: "motor-monofasico-1-5hp-110-220v",
    name: "Motor Monofásico 1.5 HP (110-220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor monofásico de alta eficiencia, ideal para compresores de pistón y maquinaria ligera. Este equipo combina fiabilidad y potencia moderada con una versatilidad eléctrica superior, gracias a su capacidad de operación en 110/220V. Su construcción robusta con clasificación IP21 garantiza la protección de los componentes internos contra partículas y goteos, asegurando un desempeño constante y una larga vida útil en entornos industriales.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-monofasico-1-5hp.webp"),
    images: [
      getImage("productos/motores/motor-monofasico-1-5hp.webp"),
      getImage("productos/motores/motor-monofasico-1-5hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1800 RPM", price: 1800000 },
      { name: "3600 RPM", price: 1400000 },
    ],
    specs: {
      Potencia: "1.5 HP",
      Fases: "1",
      "Corriente nominal": "110V / 220V",
      RPM: "1800 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  //TODO faltan precio 1800
  {
    id: "motor-monofasico-2hp-110-220v",
    name: "Motor Monofásico 2 HP (110-220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor monofásico de alta eficiencia, ideal para compresores de pistón y maquinaria ligera. Este equipo combina fiabilidad y potencia moderada con una versatilidad eléctrica superior, gracias a su capacidad de operación en 110/220V. Su construcción robusta con clasificación IP21 garantiza la protección de los componentes internos contra partículas y goteos, asegurando un desempeño constante y una larga vida útil en entornos industriales.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-monofasico-2hp.webp"),
    images: [
      getImage("productos/motores/motor-monofasico-2hp.webp"),
      getImage("productos/motores/motor-monofasico-2hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1800 RPM", price: 0 },
      { name: "3600 RPM", price: 1800000 },
    ],
    specs: {
      Potencia: "2 HP",
      Fases: "1",
      "Corriente nominal": "110V / 220V",
      RPM: "1800 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  {
    id: "motor-monofasico-3hp-110-220v",
    name: "Motor Monofásico 3 HP (110-220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor monofásico de alta eficiencia, ideal para compresores de pistón y maquinaria ligera. Este equipo combina fiabilidad y potencia moderada con una versatilidad eléctrica superior, gracias a su capacidad de operación en 110/220V. Su construcción robusta con clasificación IP21 garantiza la protección de los componentes internos contra partículas y goteos, asegurando un desempeño constante y una larga vida útil en entornos industriales.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-monofasico-3hp.webp"),
    images: [
      getImage("productos/motores/motor-monofasico-3hp.webp"),
      getImage("productos/motores/motor-monofasico-3hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1800 RPM", price: 3200000 },
      { name: "3600 RPM", price: 2100000 },
    ],
    specs: {
      Potencia: "3 HP",
      Fases: "1",
      "Corriente nominal": "110V / 220V",
      RPM: "1800 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  {
    id: "motor-bifasico-5hp-220v",
    name: "Motor Bifásico 5 HP (220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor bifásico de 5 HP y alta eficiencia, diseñado para aplicaciones que exigen un alto torque de arranque, como compresores de pistón industriales y maquinaria pesada. Este equipo ofrece una potencia superior y máxima fiabilidad operativa en 220V, ideal para procesos que requieren un funcionamiento continuo y estable. Su construcción robusta con clasificación IP22 protege los componentes internos contra partículas y goteos, asegurando un rendimiento profesional y una vida útil prolongada en entornos de trabajo exigentes.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-bifasico-5hp.webp"),
    images: [
      getImage("productos/motores/motor-bifasico-5hp.webp"),
      getImage("productos/motores/motor-bifasico-5hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1750 RPM", price: 4800000 },
      { name: "3600 RPM", price: 4200000 },
    ],
    specs: {
      Potencia: "5 HP",
      Fases: "2",
      "Corriente nominal": "220V",
      RPM: "1750 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  {
    id: "motor-bifasico-7.5hp-220v",
    name: "Motor Bifásico 7.5 HP (220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor de 7.5 HP de alto rendimiento, optimizado para equipos industriales que demandan una entrega de potencia constante y vigorosa. Diseñado para operar en 220V, este motor es la opción ideal para compresores de gran capacidad y maquinaria de uso rudo que requiere un arranque firme y confiable. Su robusta arquitectura resguarda los componentes críticos contra partículas y goteos, garantizando estabilidad operativa y una excepcional vida útil incluso bajo condiciones de carga pesada.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-bifasico-5hp.webp"),
    images: [
      getImage("productos/motores/motor-bifasico-5hp.webp"),
      getImage("productos/motores/motor-bifasico-5hp-atras.webp"),
    ],
    variantType: "dropdown",
    variants: [
      { name: "1700 RPM", price: 5500000 },
      { name: "3600 RPM", price: 5200000 },
    ],
    specs: {
      Potencia: "7.5 HP",
      Fases: "2",
      "Corriente nominal": "220V",
      RPM: "1700 - 3600",
      Eje: "5/8 (16 mm)",
    },
  },

  {
    id: "motor-monofasico-10hp-220v",
    name: "Motor Monofásico 10 HP (220 V)",
    category: Category.MOTORES,
    subCategory: SubCategory.ELECTRICOS,
    brand: "weg",
    description:
      "Motor industrial de 10 HP, la solución de máxima potencia para las aplicaciones más exigentes del sector. Este equipo ha sido fabricado para ofrecer un torque superior y un desempeño ininterrumpido en entornos de alta demanda operativa a 220V. Cuenta con una estructura reforzada, asegurando una defensa eficaz contra agentes externos y goteos. Es el componente definitivo para procesos industriales críticos donde la fiabilidad total y la eficiencia energética son innegociables.",
    price: 1500000,
    warranty: "1 Año",
    image: getImage("productos/motores/motor-bifasico-10hp.webp"),
    images: [
      getImage("productos/motores/motor-bifasico-10hp.webp"),
      getImage("productos/motores/motor-bifasico-10hp-atras.webp"),
      getImage("productos/motores/motor-bifasico-10hp-costado.webp"),
    ],
    variantType: "dropdown",
    variants: [{ name: "1750 RPM", price: 6800000 }],
    specs: {
      Potencia: "10 HP (7,5 kW)",
      "Número de polos": "4",
      Tension: "220V",
      "Corriente nominal": "44,5-40,8 / 20,4 A",
      "Corriente de arranque": "298-273 / 137 A",
      Frecuencia: "60 Hz",
      Velocidad: "1750 RPM",
      Eficiencia: "84 %",
      "Servicio continuo (S1)": "",
      "Nivel de protección": "IP55",
      "Armazón de hierro": "",
    },
  },
];
