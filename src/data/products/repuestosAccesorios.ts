import { getImage } from "../shared/images";
import { Category, type Product } from "../types";

export const REPUESTOS_ACCESORIOS: Product[] = [
  {
    id: "acople-rapido",
    name: "Acople Rapido 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 15000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-nacional.webp",
    ),
    images: [
      getImage("productos/repuestos-accesorios/acople-rapido-nacional.webp"),
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
    image: getImage("productos/repuestos-accesorios/acople-rapido-1-2.webp"),
    images: [getImage("productos/repuestos-accesorios/acople-rapido-1-2.webp")],
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
      "productos/repuestos-accesorios/acople-rapido-pretul-macho.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-pretul-macho.webp",
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
      "productos/repuestos-accesorios/acople-rapido-pretul-hembra.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-pretul-hembra.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },

  {
    id: "acople-rapido-1-2x1-4-bronce",
    name: "Acople Rapido 1/2 en bronce",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente esencial para conectar herramientas de aire comprimido a mangueras o compresores de forma ágil y sin herramientas adicionales",
    price: 60000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-1-2x1-4-bronce.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-1-2x1-4-bronce.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT Hembra",
    },
  },

  {
    id: "acople-rapido-tipo-foster",
    name: "Acople Rapido 1/2 tipo foster",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      'El acople rápido Tipo Foster de 1/2" es el estándar de oro para conexiones neumáticas industriales de alto flujo. Diseñado para entornos de trabajo pesado, este componente garantiza una conexión segura, hermética y de larga duración. Su ingeniería de precisión permite un paso de aire optimizado, ideal para herramientas que requieren gran potencia y equipos de gran escala.',
    price: 250000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-1-2-tipo-foster.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-1-2-tipo-foster.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT Hembra",
      "Mecanismo de Cierre": "Bloqueo por esferas de acero inoxidable",
    },
  },

  {
    id: "acople-rapido-3-4-fitting",
    name: "Acople Rapido 3/4 con fitting",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      'El acople rápido de 3/4" es la solución definitiva para aplicaciones que requieren un volumen de aire masivo sin restricciones. Diseñado para ofrecer la máxima eficiencia en líneas de suministro principales y herramientas neumáticas de gran escala, este componente minimiza la caída de presión y maximiza el rendimiento de equipos pesados en entornos de producción continua.',
    price: 350000,
    image: getImage("productos/repuestos-accesorios/acople-rapido-3-4.webp"),
    images: [getImage("productos/repuestos-accesorios/acople-rapido-3-4.webp")],
    specs: {
      Conexión: "3/4 NPT Hembra",
      "Mecanismo de Cierre": "Bloqueo por esferas de acero inoxidable",
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
      "productos/repuestos-accesorios/kit-acople-rapido-fitting-hembra.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/kit-acople-rapido-fitting-hembra.webp",
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
      "productos/repuestos-accesorios/juego-acople-rapido-5piezas.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/juego-acople-rapido-5piezas.webp",
      ),
    ],
    specs: {
      Contiene: "Aclople rapido, 2 Fitting Hembra, 2 Fitting Macho",
      "Conexión acople rapido": "1/4 NPT Hembra",
    },
  },

  {
    id: "acople-rapido-tres-salidas",
    name: "Acople Rapido de 3 salidas",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este distribuidor neumático de alta resistencia está diseñado para maximizar la eficiencia en el taller, permitiendo la conexión simultánea de hasta tres herramientas a una sola línea de aire comprimido. Es la solución ideal para estaciones de trabajo que requieren versatilidad, eliminando la necesidad de desconectar y conectar mangueras constantemente.",
    price: 70000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-tres-salidas.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-tres-salidas.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },

  {
    id: "acople-rapido-dos-salidas",
    name: "Acople Rapido de 2 salidas",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este distribuidor neumático de alta resistencia está diseñado para maximizar la eficiencia en el taller, permitiendo la conexión simultánea de hasta dos herramientas a una sola línea de aire comprimido. Es la solución ideal para estaciones de trabajo que requieren versatilidad, eliminando la necesidad de desconectar y conectar mangueras constantemente.",
    price: 45000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-dos-salidas.webp",
    ),
    images: [
      getImage("productos/repuestos-accesorios/acople-rapido-dos-salidas.webp"),
    ],
    specs: {
      Conexión: "1/4 NPT Hembra",
    },
  },

  {
    id: "acople-rapido-prestolock-macho",
    name: "Acople Rapido Prestolock Macho",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Conector de alta precisión con teflón integrado en la rosca para un sellado hermético sin usar cintas adicionales. Su sistema de conexión rápida permite instalar y ajustar la dirección de la manguera fácilmente después de montado. Es compacto, resistente a la corrosión e ideal para unir mangueras a herramientas y cualquier salida de aire de forma profesional.",
    price: 12000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-prestolock-macho.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-prestolock-macho.webp",
      ),
    ],
    variantType: "dropdown",
    variants: [
      {
        name: '10 mm x 1/4"',
        price: 12000,
        images: [
          getImage(
            "productos/repuestos-accesorios/acople-rapido-prestolock-macho-medidas.webp",
          ),
        ],
      },
      {
        name: '12 mm x 1/4"',
        price: 12000,
        images: [
          getImage(
            "productos/repuestos-accesorios/acople-rapido-prestolock-macho-medidas.webp",
          ),
        ],
      },
      {
        name: '1/2 x 1/2"',
        price: 16000,
        images: [
          getImage(
            "productos/repuestos-accesorios/acople-rapido-prestolock-macho-medidas.webp",
          ),
        ],
      },
    ],
    specs: {
      "Tipo de Conexión": "Push-to-connect (empuje para conectar)",
      "Material del Cuerpo":
        "PBT (tereftalato de polibutileno), resistente y ligero.",
      Medidas: '10mm x 1/4", 12mm x 1/4",1/2 x 1/2 Macho',
    },
  },

  {
    id: "acople-rapido-prestolock-hembra",
    name: "Acople Rapido Prestolock Hembra",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Conector de alta precisión, su sistema de conexión rápida permite instalar y ajustar la dirección de la manguera fácilmente después de montado. Es compacto, resistente a la corrosión e ideal para unir mangueras a herramientas y cualquier salida de aire de forma profesional.",
    price: 12000,
    image: getImage(
      "productos/repuestos-accesorios/acople-rapido-prestolock-hembra.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/acople-rapido-prestolock-hembra.webp",
      ),
    ],
    variantType: "dropdown",
    variants: [
      {
        name: '1/4 x 1/8"',
        price: 10000,
        images: [
          getImage(
            "productos/repuestos-accesorios/acople-rapido-prestolock-hembra-medidas.webp",
          ),
        ],
      },
      {
        name: '1/4 x 1/4"',
        price: 10000,
        images: [
          getImage(
            "productos/repuestos-accesorios/acople-rapido-prestolock-hembra-medidas.webp",
          ),
        ],
      },
    ],
    specs: {
      "Tipo de Conexión": "Push-to-connect (empuje para conectar)",
      "Material del Cuerpo":
        "PBT (tereftalato de polibutileno), resistente y ligero.",
      Medidas: '1/4 x 1/8", 1/4 x 1/4"  Hembra',
    },
  },

  {
    id: "silenciador-conico",
    name: "Silenciador Cónico en Bronce",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Un silenciador neumático cónico, también conocido como silenciador de escape cónico, es un dispositivo utilizado en sistemas neumáticos para reducir el nivel de ruido generado por el escape de aire comprimido. Son ideales para aplicaciones industriales donde el ruido puede ser un problema, proporcionando un ambiente de trabajo más seguro y cómodo sin comprometer el rendimiento del sistema neumático.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/silenciadores-conicos.webp",
    ),
    images: [
      getImage("productos/repuestos-accesorios/silenciadores-conicos.webp"),
    ],
    variantType: "dropdown",
    variants: [
      {
        name: "1/8 NPT",
        price: 12000,
        images: [
          getImage(
            "productos/repuestos-accesorios/silenciador-conico-medidas.webp",
          ),
        ],
      },
      {
        name: "1/4 NPT",
        price: 18000,
        images: [
          getImage(
            "productos/repuestos-accesorios/silenciador-conico-medidas.webp",
          ),
        ],
      },
    ],
    specs: {
      Material: "Bronce",
      Medidas: "1/8, 1/4 NPT",
    },
  },

  {
    id: "racor-b120",
    name: "Racor B120",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este conector es la solución robusta para unir tuberías de metal (cobre, latón) o plástico rígido a puertos roscados en sistemas de aire, agua o aceites. Utiliza un sistema de cierre mecánico por rosca que garantiza un sellado infalible y una alta resistencia a la presión y vibraciones. Es el componente ideal para instalaciones fijas y permanentes que exigen máxima seguridad y durabilidad frente a condiciones exigentes.",
    price: 6000,
    image: getImage("productos/repuestos-accesorios/racor-b120.webp"),
    images: [getImage("productos/repuestos-accesorios/racor-b120.webp")],
    variantType: "dropdown",
    variants: [
      {
        name: "1/8 x 1/4 NPT",
        price: 10000,
        images: [
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-interna.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-externa.webp",
          ),
        ],
      },
      {
        name: "1/8 x 3/8 NPT",
        price: 12000,
        images: [
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-interna.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-externa.webp",
          ),
        ],
      },
      {
        name: "1/4 x 3/8 NPT",
        price: 15000,
        images: [
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-interna.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-externa.webp",
          ),
        ],
      },
      {
        name: "1/4 x 1/2 NPT",
        price: 22000,
        images: [
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-interna.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/racor-b120-rosca-externa.webp",
          ),
        ],
      },
    ],
    specs: {
      Material: "Bronce/Latón",
      Medidas: "1/8x1/4, 1/8x3/8, 1/4x3/8, 1/4x1/2 NPT",
    },
  },

  {
    id: "racor-b3",
    name: "Racor B3",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este conector es la solución clásica y confiable para unir puertos roscados con mangueras flexibles de caucho o PVC. Cuenta con una punta de espigo diseñada para un agarre firme que evita deslizamientos, garantizando un flujo constante de aire o líquidos. Es un componente altamente resistente y económico, ideal para conexiones en compresores, herramientas neumáticas y sistemas de riego donde se requiere una instalación segura mediante abrazadera.",
    price: 7000,
    image: getImage("productos/repuestos-accesorios/racores-b3.webp"),
    images: [getImage("productos/repuestos-accesorios/racores-b3.webp")],
    variantType: "dropdown",
    variants: [
      {
        name: "1/4 x 1/4 NPT",
        price: 7000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b3-medidas.webp"),
        ],
      },
      {
        name: "1/4 x 1/2 NPT",
        price: 10000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b3-medidas.webp"),
        ],
      },
    ],
    specs: {
      Material: "Bronce/Latón",
      Medidas: "1/4x1/4, 1/4x1/2 NPT",
    },
  },

  {
    id: "racor-b41",
    name: "Racor B41",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El racor B-41 en bronce es un componente indispensable para sistemas de tuberías, diseñado para proporcionar conexiones seguras y eficientes en diversas aplicaciones. Fabricado en bronce de alta calidad, este racor ofrece una excelente resistencia a la corrosión, durabilidad y capacidad para soportar altas presiones y temperaturas, asegurando un rendimiento óptimo y una larga vida útil.",
    price: 10000,
    image: getImage("productos/repuestos-accesorios/racor-b41.webp"),
    images: [getImage("productos/repuestos-accesorios/racor-b41.webp")],
    variantType: "dropdown",
    variants: [
      {
        name: "3/8",
        price: 10000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b41-medidas.webp"),
        ],
      },
      {
        name: "1/2",
        price: 12000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b41-medidas.webp"),
        ],
      },
      {
        name: "3/4",
        price: 25000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b41-medidas.webp"),
        ],
      },
    ],
    specs: {
      Material: "Bronce/Latón",
      Medidas: "3/8, 1/2, 3/4",
    },
  },

  {
    id: "racor-b48",
    name: "Racor B48",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este conector es la solución ideal para sistemas de tubería metálica que operan bajo altas presiones y temperaturas. Gracias a su fabricación de alta calidad, ofrece una excelente resistencia a la corrosión y garantiza un sellado hermético y duradero en aplicaciones industriales exigentes. Es un componente robusto y confiable, diseñado para instalaciones permanentes que requieren máxima seguridad y fiabilidad.",
    price: 13000,
    image: getImage("productos/repuestos-accesorios/racores-b48.webp"),
    images: [getImage("productos/repuestos-accesorios/racores-b48.webp")],
    variantType: "dropdown",
    variants: [
      {
        name: "3/8 x 3/8",
        price: 13000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b48-medidas.webp"),
        ],
      },
      {
        name: "3/8 x 1/2",
        price: 15000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b48-medidas.webp"),
        ],
      },
      {
        name: "1/2 x 1/2",
        price: 15000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b48-medidas.webp"),
        ],
      },
      {
        name: "3/4 x 3/4",
        price: 28000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b48-medidas.webp"),
        ],
      },
    ],
    specs: {
      Material: "Bronce/Latón",
      Medidas: "3/8 x 3/8, 3/8 x 1/2, 1/2 x 1/2, 3/4 x 3/4",
    },
  },

  {
    id: "racor-b66",
    name: "Racor B66 3/8 x 3/8",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este racor con anillo, el cual, es clave para lograr un sellado hermético en conexiones de compresión. Fabricado en cobre de alta calidad, está diseñado para deformarse con precisión al apretar la tuerca, abrazando el tubo para crear una unión mecánica a prueba de fugas y resistente a las vibraciones. Es indispensable en instalaciones fijas con tubería de cobre, latón o nylon rígido, garantizando máxima durabilidad y resistencia en sistemas de aire y fluidos.",
    price: 17000,
    image: getImage("productos/repuestos-accesorios/racores-b66.webp"),
    images: [getImage("productos/repuestos-accesorios/racores-b66.webp")],

    specs: {
      Material: "Bronce/Latón",
      Medidas: "3/8 x 3/8",
    },
  },

  {
    id: "racor-b69",
    name: "Racor B69",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Este racor en ángulo de 90° es la solución ideal para realizar conexiones en espacios reducidos donde se requiere un cambio de dirección inmediato. Garantiza una unión mecánica hermética y resistente a altas presiones sin necesidad de empaquetaduras adicionales. Es un componente robusto y duradero, diseñado para conectar tuberías de cobre o aluminio a puertos roscados en sistemas de refrigeración, gas y aire comprimido de forma profesional.",
    price: 13000,
    image: getImage("productos/repuestos-accesorios/racores-b69.webp"),
    images: [getImage("productos/repuestos-accesorios/racores-b69.webp")],
    variantType: "dropdown",
    variants: [
      {
        name: "1/4 x 1/8",
        price: 18000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b69-medidas.webp"),
        ],
      },
      {
        name: "1/4 x 1/4",
        price: 18000,
        images: [
          getImage("productos/repuestos-accesorios/racor-b69-medidas.webp"),
        ],
      },
    ],
    specs: {
      Material: "Bronce/Latón",
      Medidas: "1/4 x 1/8, 1/4 x 1/4",
    },
  },

  {
    id: "fitting-hembra-1-4-general",
    name: "Fitting Hembra 1/4 general",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-general-hembra.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-general-hembra.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1-4-general",
    name: "Fitting Macho 1/4 general",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-general-macho.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-general-macho.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-hembra-1-2",
    name: "Fitting Hembra 1/2",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-hembra-parado.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-parado.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "fitting-hembra-1-4-nacional",
    name: "Fitting Hembra 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-hembra-conexion.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1-4-nacional",
    name: "Fitting Macho 1/4 nacional",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-nacional-macho-conexion.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-hembra-1-4-tipo-esfera",
    name: "Fitting Hembra 1/4 tipo esfera",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 6000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-hembra-tipo-esfera-conexion.webp",
      ),
    ],
    specs: {
      Conexión: "1/4 NPT",
    },
  },
  {
    id: "fitting-macho-1-2",
    name: "Fitting Macho 1/2",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El fitting para acople rapido es el sistema que permite cambiar de herramienta en segundos.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/fitting-acople-rapido-macho-parado.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-macho-parado.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/fitting-acople-rapido-macho.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },

  {
    id: "unidad-mantenimiento-aire-wufu",
    name: "Unidad de Mantenimiento de Aire WUFU (unidad FRL)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description: "Optimice el rendimiento y proteja sus herramientas neumáticas con la unidad de mantenimiento WUFU, una solución eficiente y de gran relación calidad-precio para talleres y centros de servicio. Este sistema modular integra en una sola estación la filtración de impurezas y agua condensada, la regulación precisa de la presión de salida mediante su manómetro incorporado y la dosificación automática de lubricante. Su diseño robusto con vasos protectores transparentes facilita el monitoreo de los niveles, garantizando un suministro de aire limpio y una operación estable y continua en sus trabajos diarios.",
    price: 15000,
    image: getImage(
      "productos/repuestos-accesorios/unidades-mantenimiento-aire-wufu.webp",
    ),
    variantType: "dropdown",
    variants: [
      {
        name: "1/4 Mini",
        price: 150000,
        images: [
          getImage(
            "productos/repuestos-accesorios/unidad-mantenimiento-1-4-mini-wufu.webp",
          ),
        ],
      },
      {
        name: "1/4",
        price: 200000,
        images: [
          getImage(
            "productos/repuestos-accesorios/unidad-mantenimiento-1-4-wufu.webp",
          ),
        ],
      },
      {
        name: "1/2",
        price: 330000,
        images: [
          getImage(
            "productos/repuestos-accesorios/unidad-mantenimiento-1-2-wufu.webp",
          ),
        ],
      },
      
    ],
    specs: {
      "Medidas de Conexión": "1/4 Mini, 1/4, 1/2 NPT",
    },
  },

  {
    id: "unidad-mantenimiento-aire-xmc",
    name: "Unidad de Mantenimiento de Aire XMC (unidad FRL)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description: "Optimice el rendimiento y extienda la vida útil de sus herramientas neumáticas con la unidad de mantenimiento XMC de grado industrial superior. Este sistema modular de alta precisión filtra las impurezas y la condensación de agua del aire comprimido, regula la presión de salida de forma constante mediante su manómetro integrado y dosifica una micro-niebla de aceite automatizada para proteger los componentes mecánicos internos. Fabricada con materiales reforzados de alta resistencia y componentes de máxima durabilidad, la tecnología XMC garantiza un flujo de aire óptimo, limpio y libre de caídas de presión en las aplicaciones de taller y producción más exigentes.",
    price: 220000,
    image: getImage(
      "productos/repuestos-accesorios/unidades-mantenimiento-aire-xmc.webp",
    ),
    variantType: "dropdown",
    variants: [
      {
        name: "1/4 Mini",
        price: 220000,
        images: [
          getImage(
            "productos/repuestos-accesorios/unidad-mantenimiento-1-4-mini-xmc.webp",
          ),
        ],
      },
      
      {
        name: "1/2",
        price: 550000,
        images: [
          getImage(
            "productos/repuestos-accesorios/unidad-mantenimiento-1-2-xmc.webp",
          ),
        ],
      },
      
    ],
    specs: {
      "Medidas de Conexión": "1/4 Mini, 1/2 NPT",
    },
  },

  {
    id: "unidad-mantenimiento-aire-1-4-ferton",
    name: "Unidad de Mantenimiento de Aire 1/4 Ferton (unidad FRL)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description: 'Optimice el funcionamiento de sus equipos neumáticos a escala compacta con la unidad de mantenimiento Ferton con conexión de 1/4". Este sistema compacto de nivel comercial es ideal para regular el flujo en herramientas individuales o talleres pequeños, integrando eficientemente la filtración de partículas y humedad, la regulación de presión mediante su manómetro de alta visibilidad y la inyección precisa de lubricante. Su tamaño estándar de 1/4" permite una instalación directa en líneas de aire livianas, asegurando un suministro limpio, estable y protegido contra el desgaste prematuro sin comprometer espacio en su estación de trabajo.',
    price: 180000,
    image: getImage(
      "productos/repuestos-accesorios/unidad-mantenimiento-1-4-ferton.webp",
    ),
    specs: {
      Conexión: "1/4 NPT",
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
      "productos/repuestos-accesorios/correa-industrial-tipoa.webp",
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
      "productos/repuestos-accesorios/correa-industrial-tipob.webp",
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
      "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-industrial-trifasico-1via-lado.webp",
      ),
    ],
    specs: {
      Entrada: "3/8 NPT (hembra)",
      "Válvula de alivio": "1/8",
      Presion: "75 - 175 psi",
      "Amperaje maximo": "20 amp",
      "Rango de protección": "IP20",
      Voltaje: "380 V",
    },
  },
  {
    id: "presostato-automatico-trifasico-1via-boton",
    name: "Presostato Automático Trifásico 1 Vía boton para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático trifásico es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 150000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-trifasico-1via-boton-conexion.webp",
      ),
    ],
    specs: {
      Entrada: "1/4 NPT (hembra)",
      Presion: "75 - 155 PSI",
      "Amperaje máximo": "16 amp",
      "Viene con 3 lineas de conexión": "",
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
      "productos/repuestos-accesorios/presostato-automatico-1via-industrial.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial-conexion.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-1via-industrial-dentro.webp",
      ),
    ],
    specs: {
      Voltaje: "110/220 Voltios Monofásico – 30/20 Amperios",
      "Temperatura de trabajo": "30 a 50°C",
      Conexión: "1 Vía de ¼” hembra",
      "Rango de presión": "40PSI – 250PSI",
      "Ajuste de presión": "30PSI",
      "Ajuste de fábrica": "145PSI – 175PSI",
      Incluye: "válvula de alivio",
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
      "productos/repuestos-accesorios/presostato-automatico-palanca-1via.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via-dentro.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-1via-conexion.webp",
      ),
    ],
    specs: {
      Referencia: "1 vía palanca",
      Conexión: "1/4 hembra",
      "Ajuste de presión": "75 - 150 PSI",
      "Rango de presión": "40 PSI",
      "Ajuste de fábrica": "85 - 115 psi",
      Voltaje: "110/220 Voltios",
      Incluye: "válvula de alivio",
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
      "productos/repuestos-accesorios/presostato-automatico-palanca-4via.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via-dentro.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-palanca-4via-lado.webp",
      ),
    ],
    specs: {
      Referencia: "4 via palanca",
      Conexión: "1/4 hembra (4 salidas)",
      "Ajuste de presión": "75 - 150 PSI",
      "Rango de presión": "40 psi",
      "Ajuste de fábrica": "85 - 115 PSI",
      Voltaje: "110/220 Voltios",
      Incluye: "válvula de alivio",
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
      "productos/repuestos-accesorios/presostato-automatico-boton-1via.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-dentro.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-lado.webp",
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
      Incluye: "válvula de alivio",
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
      "productos/repuestos-accesorios/presostato-automatico-boton-4via.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via-dentro.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-4via-lado.webp",
      ),
    ],
    specs: {
      Referencia: "4 via botón",
      Conexión: "1/4 hembra (4 salidas)",
      "Ajuste de presión": "85 PSI MIN. - 175 PSI MAX.",
      "Rango de presión": "30 PSI",
      Voltaje: "110/220 V",
      Amperaje: "15 amp.",
    },
  },

  {
    id: "presostato-automatico-boton-1via-jaguar",
    name: "Presostato Automático de botón 1 Vías JAGUAR para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El presostato o automático es un componente esencial en sistemas de compresores que permite el control automático de la presión del aire. Su función principal es mantener la presión dentro de los límites seguros, activando o desactivando el compresor según sea necesario.",
    price: 180000,
    image: getImage(
      "productos/repuestos-accesorios/presostato-automatico-boton-1via-jaguar.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/presostato-automatico-boton-1via-jaguar.webp",
      ),
    ],
    specs: {
      Referencia: "1 via botón JAGUAR",
      Voltaje: "110/220 Voltios Monofásico 240 Voltios máximo.",
      Amperios: "20 amp máximo.",
      Conexión: "1/4 hembra",
      "Ajuste de presión": "20 PSI – 175 PSI",
      "Rango de presión": "35 PSI",
      "Ajuste de fábrica": "90PSI – 125PSI",
      Incluye: "válvula de alivio",
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
      "productos/repuestos-accesorios/valvulas-cheque-compresor-tipo-granada.webp",
    ),
    variants: [
      {
        name: "Válvula de Cheque 1/2 grande tipo granada",
        price: 100000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granadag.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granadag-medidas.webp",
          ),
        ],
      },
      {
        name: "Válvula de Cheque 1/2 tipo granada",
        price: 150000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granada.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-tipo-granada-medidas.webp",
          ),
        ],
      },
      {
        name: "Válvula de Cheque 3/4 tipo granada",
        price: 300000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-3-4-tipo-granada.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-3-4-tipo-granada-medidas.webp",
          ),
        ],
      },
      {
        name: 'Válvula de Cheque 1" tipo granada',
        price: 450000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-1-tipo-granada.webp",
          ),
        ],
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
      "productos/repuestos-accesorios/valvula-cheque-compresor-compacto.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-medidas.webp",
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
      "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-compacto-antimonio-medidas.webp",
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
    price: 80000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-aire-seco-partes.webp",
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
      "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-cd-atras.webp",
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
      "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-3-8-sd-atras.webp",
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
      "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-atras.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "valvula-cheque-compresor-1-2-no-descarga",
    name: "Válvula de Cheque de 1/2 sin descarga para compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-sd.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-sd.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-sd-atras.webp",
      ),
    ],
    specs: {
      Conexión: "1/2 NPT",
    },
  },
  {
    id: "valvula-cheque-compresor-1-2-descarga-hierro",
    name: "Válvula de Cheque de 1/2 con descarga para compresor en Hierro",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La válvula antirretorno (o válvula check) es un componente esencial que permite el flujo de aire en un solo sentido: desde el cabezal hacia el tanque de almacenamiento. Su función principal es sellar herméticamente el tanque una vez que el motor se detiene, impidiendo que el aire a presión retorne hacia los pistones o se escape a través del presostato.",
    price: 70000,
    image: getImage(
      "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/valvula-cheque-compresor-1-2-cd-hierro-atras.webp",
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
      "productos/repuestos-accesorios/valvulas-cheque-compresor-interna.webp",
    ),
    variantType: "dropdown",
    variants: [
      {
        name: "Válvula de cheque interna 1/2 * 1/2",
        price: 150000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2-medidas.webp",
          ),
        ],
      },
      {
        name: "Válvula de cheque interna 1/2 * 3/4",
        price: 200000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2x3-4.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-2x3-4-medidas.webp",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 1" * 3/4',
        price: 300000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1x3-4.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1x3-4-medidas.webp",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 1" 1/2 * 1" 1/4',
        price: 680000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-1-1-2x1-1-4.webp",
          ),
        ],
      },
      {
        name: 'Válvula de cheque interna 2" * 1" 1/2',
        price: 850000,
        images: [
          getImage(
            "productos/repuestos-accesorios/valvula-cheque-compresor-interna-2x1-1-2.webp",
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
    id: "biela-compresor-compacto",
    name: "Biela para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Repuesto esencial que asegura la transmisión precisa de potencia entre el pistón y el cigüeñal. Su diseño robusto está fabricado para soportar el estrés mecánico constante, garantizando un desplazamiento fluido que protege la integridad del cabezote y prolonga la vida útil del equipo.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/biela-compresor-compacto.webp",
    ),
    images: [
      getImage("productos/repuestos-accesorios/biela-compresor-compacto.webp"),
    ],
    specs: {
      Material: "Aluminio",
    },
  },

  {
    id: "biela-compresor-libre-aceite",
    name: "Biela para Compresor Libre de Aceite (Aire seco)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Repuesto esencial que asegura la transmisión precisa de potencia entre el pistón y el cigüeñal. Su diseño robusto está fabricado para soportar el estrés mecánico constante, garantizando un desplazamiento fluido que protege la integridad del cabezote y prolonga la vida útil del equipo.",
    price: 100000,
    image: getImage(
      "productos/repuestos-accesorios/biela-compresor-libre-aceite.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/biela-compresor-libre-aceite.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/biela-compresor-libre-aceite-atras.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/biela-compresor-libre-aceite-delante.webp",
      ),
    ],
    specs: {
      Material: "Aluminio",
    },
  },

  {
    id: "biela-cabezote-casquetes",
    name: "Biela con casquetes para Cabezote de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Repuesto esencial que asegura la transmisión de potencia entre el pistón y el cigüeñal. Incluye casquetes de alta resistencia diseñados para optimizar la lubricación y reducir la fricción térmica, garantizando un ajuste perfecto que protege el cigüeñal contra el desgaste y asegura un desplazamiento fluido del conjunto motriz.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/biela-cabezote-casquetes.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/biela-cabezote-casquetes-medida.webp",
      ),
    ],
    specs: {},
  },

  {
    id: "biela-compresor-piston",
    name: "Bielas para cabezote de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Repuesto esencial que asegura la transmisión precisa de potencia entre el pistón y el cigüeñal. Su diseño robusto está fabricado para soportar el estrés mecánico constante, garantizando un desplazamiento fluido que protege la integridad del cabezote y prolonga la vida útil del equipo.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/bielas-cabezotes-compresor-polea.webp",
    ),
    variantType: "dropdown",
    variants: [
      {
        name: "Biela para cabezote 1065",
        price: 50000,
        images: [
          getImage("productos/repuestos-accesorios/biela-cabezote-1065.webp"),
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-1065-medida.webp",
          ),
        ],
      },
      {
        name: "Biela para cabezote 2051",
        price: 60000,
        images: [
          getImage("productos/repuestos-accesorios/biela-cabezote-2051.webp"),
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-2051-medida.webp",
          ),
        ],
      },
      {
        name: "Biela para cabezote 2080-3080",
        price: 100000,
        images: [
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-2080-3080.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-2080-3080-medida.webp",
          ),
        ],
      },
      {
        name: "Biela para cabezote 2065-3065",
        price: 85000,
        images: [
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-2065-3065.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-2065-3065-medida.webp",
          ),
        ],
      },
      {
        name: "Biela para cabezote 3090",
        price: 120000,
        images: [
          getImage("productos/repuestos-accesorios/biela-cabezote-3090.webp"),
          getImage(
            "productos/repuestos-accesorios/biela-cabezote-3090-medida.webp",
          ),
        ],
      },
    ],
    specs: {},
  },

  {
    id: "piston-cabezote-compresor",
    name: "Pistón para Cabezote de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Repuesto esencial de precisión diseñado para la compresión de aire mediante un desplazamiento fluido dentro del cilindro. Fabricado en aleaciones de alta conductividad térmica, su estructura optimizada permite un sellado hermético con los anillos, minimizando la pérdida de presión y protegiendo las paredes de la cámara contra el desgaste prematuro.",
    price: 25000,
    image: getImage("productos/repuestos-accesorios/pistones-compresor.webp"),
    variantType: "dropdown",
    variants: [
      {
        name: "Pistón de 42 mm",
        price: 50000,
        images: [getImage("productos/repuestos-accesorios/piston-42mm.webp")],
      },
      {
        name: "Pistón de 47 mm",
        price: 50000,
        images: [getImage("productos/repuestos-accesorios/piston-47mm.webp")],
      },
      {
        name: "Pistón de 48 mm",
        price: 50000,
        images: [getImage("productos/repuestos-accesorios/piston-48mm.webp")],
      },
      {
        name: "Pistón de 51 mm",
        price: 50000,
        images: [getImage("productos/repuestos-accesorios/piston-51mm.webp")],
      },
      {
        name: "Pistón de 55 mm en hierro",
        price: 150000,
        images: [getImage("productos/repuestos-accesorios/piston-55mm.webp")],
      },
      {
        name: "Pistón de 65 mm",
        price: 60000,
        images: [getImage("productos/repuestos-accesorios/piston-65mm.webp")],
      },
      {
        name: "Pistón de 80 mm",
        price: 130000,
        images: [getImage("productos/repuestos-accesorios/piston-80mm.webp")],
      },
      {
        name: "Pistón de 80 mm tipo chequera",
        price: 180000,
        images: [
          getImage("productos/repuestos-accesorios/piston-80mm-tc.webp"),
        ],
      },
      {
        name: "Pistón de 82 mm en hierro",
        price: 150000,
        images: [
          getImage("productos/repuestos-accesorios/piston-82mm-hierro.webp"),
        ],
      },
      {
        name: "Pistón de 90 mm",
        price: 180000,
        images: [getImage("productos/repuestos-accesorios/piston-90mm.webp")],
      },
      {
        name: "Pistón de 100 mm",
        price: 220000,
        images: [getImage("productos/repuestos-accesorios/piston-100mm.webp")],
      },
      {
        name: "Pistón de 105 mm",
        price: 180000,
        images: [getImage("productos/repuestos-accesorios/piston-105mm.webp")],
      },
      {
        name: "Pistón de 120 mm",
        price: 250000,
        images: [getImage("productos/repuestos-accesorios/piston-120mm.webp")],
      },
    ],
    specs: {},
  },

  {
    id: "cilindro-camisa-cabezote",
    name: "Cilindro Camisa para Cabezote 3080",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente estructural diseñado como la cámara principal de compresión para cabezotes que utilizan pistones de 80mm. Su fabricación en materiales de alta dureza y conductividad térmica, junto con su acabado rectificado de precisión, reduce la fricción y asegura un sellado hermético con los anillos, garantizando la máxima eficiencia y vida operativa del conjunto de bombeo.",
    price: 160000,
    image: getImage("productos/repuestos-accesorios/camisa-cabezote-3080.webp"),
    images: [
      getImage("productos/repuestos-accesorios/camisa-cabezote-3080.webp"),
    ],
    specs: {
      Material: "Hierro fundido",
      Diámetro: "80 mm",
    },
  },

  {
    id: "filtro-compresor-metalico",
    name: "Filtro de Aire metálico para Compresor ",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Los filtros de aire capturan partículas sólidas como polvo, suciedad y polen que, de ingresar al compresor, podrían causar un desgaste prematuro en cilindros, válvulas y anillos. Al asegurar un flujo de succión limpio, se protege la integridad mecánica de los componentes internos y se garantiza un rendimiento óptimo, prolongando significativamente la vida operativa del equipo.",
    price: 25000,
    image: getImage("productos/repuestos-accesorios/filtro-metalico.webp"),
    variantType: "dropdown",
    variants: [
      {
        name: "Filtro metálico de 1/4",
        price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-4.webp",
          ),
        ],
      },
      {
        name: "Filtro metálico de 3/8",
        price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-8.webp",
          ),
        ],
      },
      {
        name: "Filtro metálico de 1/2 pequeño",
        price: 30000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2-pequeño.webp",
          ),
        ],
      },
      {
        name: "Filtro metálico de 1/2",
        price: 40000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-2-dentro.webp",
          ),
        ],
      },
      {
        name: "Filtro metálico de 3/4",
        price: 80000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-4.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-3-4-atras.webp",
          ),
        ],
      },
      {
        name: 'Filtro metálico de 1" rosca fina',
        price: 90000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-atras.webp",
          ),
        ],
      },
      {
        name: 'Filtro metálico de 1" rosca ordinaria',
        price: 90000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-1-atras.webp",
          ),
        ],
      },
      {
        name: 'Filtro metálico de 2" rosca fina',
        price: 180000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-2.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-metalico-2-dentro.webp",
          ),
        ],
      },
    ],
    specs: {},
  },
  {
    id: "filtro-compresor-plastico",
    name: "Filtro de Aire plastico para Compresor ",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Los filtros de aire capturan partículas sólidas como polvo, suciedad y polen que, de ingresar al compresor, podrían causar un desgaste prematuro en cilindros, válvulas y anillos. Al asegurar un flujo de succión limpio, se protege la integridad mecánica de los componentes internos y se garantiza un rendimiento óptimo, prolongando significativamente la vida operativa del equipo.",
    price: 25000,
    image: getImage("productos/repuestos-accesorios/filtro-plastico.webp"),
    variantType: "dropdown",
    variants: [
      {
        name: "Filtro plástico de 1/2 pequeño",
        price: 15000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-plastico-1-2-pequeño.webp",
          ),
        ],
      },
      {
        name: "Filtro plástico de 1/2",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2-elemento.webp",
          ),
        ],
      },
      {
        name: "filtro plástico de 3/4",
        price: 50000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-2-elemento.webp",
          ),
        ],
      },
      {
        name: 'filtro plástico de 1" rosca fina',
        price: 60000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-fina.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria-elemento.webp",
          ),
        ],
      },
      {
        name: 'filtro plástico de 1" rosca ordinaria',
        price: 60000,
        images: [
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria.webp",
          ),
          getImage(
            "productos/repuestos-accesorios/filtro-aire-compresor-plastico-1-rosca-ordinaria-elemento.webp",
          ),
        ],
      },
    ],
    specs: {},
  },

  {
    id: "calibrador-llantas-pcl-10-120-psi",
    name: "Calibrador de Llantas PCL 10-120 PSI",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El calibrador de llantas PCL 10-120 PSI es una herramienta precisa para medir y ajustar la presión de aire en neumáticos. Su diseño ergonómico y su panel de lectura clara facilitan el uso en entornos profesionales, garantizando un llenado adecuado y seguro de los neumáticos.",
    price: 45000,
    image: getImage(
      "productos/repuestos-accesorios/calibrador-llantas-pcl-10-120-psi.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/calibrador-llantas-pcl-10-120-psi.webp",
      ),
    ],
    specs: {
      "Rango de medición": "10-120 PSI",
    },
  },
  {
    id: "calibrador-llantas-pcl-10-200-psi",
    name: "Calibrador de Llantas PCL 10-200 PSI",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "El calibrador tipo lapicero PCL de 200 PSI es la herramienta definitiva para la medición de alta presión en entornos de servicio pesado, transporte de carga y maquinaria industrial. Este instrumento ofrece lecturas mecánicas de máxima precisión. Su escala ampliada está diseñada específicamente para soportar y medir las altas exigencias de presión en neumáticos de camiones, autobuses, remolques y equipos agrícolas, garantizando un control rápido y confiable en las condiciones más severas del taller o la carretera.",
    price: 100000,
    image: getImage(
      "productos/repuestos-accesorios/calibrador-llantas-pcl-10-200-psi.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/calibrador-llantas-pcl-10-200-psi.webp",
      ),
    ],
    specs: {
      "Rango de medición": "10-200 PSI",
    },
  },
  {
    id: "pistola-inflallantas-manometro-170psi-uyu",
    name: "Pistola Inflallantas con Manómetro 170 PSI UYU",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description: "",
    price: 110000,
    image: getImage(
      "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-uyu.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-uyu.webp",
      ),
    ],
    specs: {
      "Presión de aire máxima": "170 PSI",
    },
  },
  {
    id: "pistola-inflallantas-manometro-220psi-uyu",
    name: "Pistola Inflallantas con Manómetro 220 PSI UYU",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Versión de alta capacidad diseñada para el mantenimiento de flotas comerciales, camionetas y vehículos de carga ligera que requieren mayores niveles de presión. Su manómetro ampliado hasta 220 PSI ofrece lecturas exactas en un cuerpo metálico robusto, garantizando un flujo de aire eficiente y seguro bajo condiciones exigentes.",
    price: 130000,
    image: getImage(
      "productos/repuestos-accesorios/pistola-inflallantas-manometro-220psi-uyu.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/pistola-inflallantas-manometro-220psi-uyu.webp",
      ),
    ],
    specs: {
      "Presión de aire máxima": "220 PSI",
    },
  },
  {
    id: "pistola-inflallantas-manometro-170psi-wufu",
    name: "Pistola Inflallantas con Manómetro 170 PSI WUFU",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Herramienta de grado profesional reconocida por la alta durabilidad de sus componentes internos. Con un rango de 170 PSI, esta pistola combina un acople hermético libre de fugas con un sistema de medición altamente preciso, convirtiéndola en la opción preferida por centros de montallantas para un trabajo rápido y constante.",
    price: 55000,
    image: getImage(
      "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-wufu.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-wufu.webp",
      ),
    ],
    specs: {
      "Presión de aire máxima": "170 PSI",
    },
  },
  {
    id: "pistola-inflallantas-manometro-170psi-ing",
    name: "Pistola Inflallantas con Manómetro 170 PSI",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Pistola inflallantas de diseño industrial con una resistencia superior al trabajo pesado. Destaca por su cuerpo ergonómico de alta resistencia y un manómetro de 170 PSI equipado con un protector de goma grueso que amortigua caídas y golpes en el taller, asegurando una larga vida útil y mediciones estables.",
    price: 35000,
    image: getImage(
      "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-ing.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/pistola-inflallantas-manometro-170psi-ing.webp",
      ),
    ],
    specs: {
      "Presión de aire máxima": "170 PSI",
    },
  },

  {
    id: "lamina-valvula-flapper-luna-compresor",
    name: "Lámina de Válvula Flapper (tipo luna) para Compresor compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-luna-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-luna-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Tipo Luna",
      Aplicación: "compresores compactos",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },

  {
    id: "lamina-valvula-flapper-cabezote-1051-compresor",
    name: "Lámina de Válvula Flapper para cabezotes 1051 de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 12000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-1051-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-1051-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Rectangular",
      Aplicación: "cabezotes con pistones individuales de 51 mm",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-cabezote-1065-compresor",
    name: "Lámina de Válvula Flapper para cabezotes 1065 de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 12000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-1065-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-1065-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Rectangular",
      Aplicación: "cabezotes con pistones individuales de 65 mm",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "juego-lamina-valvula-flapper-cabezote-80mm-compresor",
    name: "Juego de Láminas de Válvula Flapper para cabezotes 80 mm de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 75000,
    image: getImage(
      "productos/repuestos-accesorios/juego-lamina-valvula-flapper-cabezote-80mm-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/juego-lamina-valvula-flapper-cabezote-80mm-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Lengüeta",
      Aplicación: "cabezotes con pistones individuales de 80 mm",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-lengueta-compresor",
    name: "Lámina de Válvula Flapper (tipo lengüeta) para Compresor compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-lengueta-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-lengueta-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Lengüeta",
      Aplicación: "compresores compactos",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-compresor-aire-seco",
    name: "Lámina de Válvula Flapper para Compresor aire seco (libre de aceite)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-lengueta-compresor-aire-seco.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-lengueta-compresor-aire-seco.webp",
      ),
    ],
    specs: {
      Diseño: "Lengüeta",
      Aplicación: "compresores aire seco (libre de aceite)",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-rectangular-compresor-aire-seco",
    name: "Lámina de Válvula Flapper (Rectangular) para Compresor aire seco (libre de aceite)",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-rectangular-compresor-aire-seco.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-rectangular-compresor-aire-seco.webp",
      ),
    ],
    specs: {
      Diseño: "Rectangular",
      Aplicación: "compresores aire seco (libre de aceite)",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-cabezote-york-compresor",
    name: "Lámina de Válvula Flapper para cabezote york para Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 50000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-york-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-cabezote-york-compresor.webp",
      ),
    ],
    specs: {
      Diseño: "Circular",
      Aplicación: "cabezote york para compresor",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },
  {
    id: "lamina-valvula-flapper-compresor-krailer",
    name: "Lámina de Válvula Flapper para Compresor Krailer",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Estas láminas de alta precisión son componentes críticos para el correcto funcionamiento del sistema de distribución de aire en el cabezote. Actúan como válvulas de respuesta rápida que regulan los ciclos de admisión y descarga, permitiendo un flujo unidireccional eficiente hacia el cilindro y bloqueando herméticamente el retorno del aire durante la etapa de máxima compresión. Fabricadas con aleaciones resistentes a la fatiga térmica y mecánica, estas válvulas aseguran que el compresor mantenga su presión operativa óptima, evitando pérdidas de rendimiento y protegiendo la integridad del pistón.",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/lamina-valvula-flapper-compresor-krailer.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/lamina-valvula-flapper-compresor-krailer.webp",
      ),
    ],
    specs: {
      Aplicación: "Compresores Krailer",
      Función: "Válvula de succión/descarga de alta frecuencia",
    },
  },

  {
    id: "manometro-glicerina-compresor",
    name: "Manómetros de glicerina de 0-100 PSI a 0-300 PSI conexión vertical/trasera",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Diseñado para la medición de precisión en entornos industriales de alta vibración. Su sistema de amortiguación líquida protege el mecanismo interno contra el desgaste por fatiga mecánica y estabiliza la aguja, garantizando lecturas exactas y constantes. Su versatilidad de montaje (vertical o trasero) asegura una integración perfecta y duradera en cualquier sistema neumático exigente.",
    price: 95000,
    image: getImage("productos/repuestos-accesorios/manometros-glicerina.webp"),
    variantType: "dropdown",
    variants: [
      {
        name: "0-150 PSI conexión 1/4 Vertical",
        price: 100000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-glicerina-150psi-1-4-vertical.webp",
          ),
        ],
      },
      {
        name: "0-150 PSI conexión 1/4 Trasera",
        price: 95000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-glicerina-150psi-1-4-trasera.webp",
          ),
        ],
      },
      {
        name: "0-200 PSI conexión 1/4 Trasera",
        price: 95000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-glicerina-200psi-1-4-trasera.webp",
          ),
        ],
      },
      {
        name: "0-300 PSI conexión 1/4 Trasera",
        price: 95000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-glicerina-300psi-1-4-trasera.webp",
          ),
        ],
      },
      {
        name: "0-300 PSI conexión 1/4 Vertical",
        price: 100000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-glicerina-300psi-1-4-vertical.webp",
          ),
        ],
      },
    ],
    specs: {
      Rangos: "0-100 / 0-150 / 0-200 / 0-300 PSI",
      Conexión: 'Inferior (Vertical) o posterior (Trasera) de 1/4" NPT.',
    },
  },

  {
    id: "manometro-compresor",
    name: "Manómetros de 0-100 PSI a 0-300 PSI conexión vertical/trasera",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Instrumento de medición analógica diseñado para el monitoreo confiable de presión en sistemas neumáticos y tanques de almacenamiento. Su mecanismo de alta sensibilidad proporciona lecturas exactas en tiempo real, facilitando el control operativo y preventivo del equipo.",
    price: 25000,
    image: getImage("productos/repuestos-accesorios/manometros-secos.webp"),
    variantType: "dropdown",
    variants: [
      {
        name: "0-100 PSI conexión 1/8 Trasera",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-100psi-1-8-trasera.webp",
          ),
        ],
      },
      {
        name: "0-100 PSI conexión 1/4 Trasera",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-100psi-1-4-trasera.webp",
          ),
        ],
      },
      {
        name: "0-100 PSI conexión 1/4 Vertical",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-100psi-1-4-vertical.webp",
          ),
        ],
      },
      {
        name: "0-150 PSI conexión 1/4 Trasera",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-150psi-1-4-trasera.webp",
          ),
        ],
      },
      {
        name: "0-150 PSI conexión 1/4 Vertical",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-150psi-1-4-vertical.webp",
          ),
        ],
      },
      {
        name: "0-200 PSI conexión 1/8 Trasera",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-200psi-1-8-trasera.webp",
          ),
        ],
      },
      {
        name: "0-200 PSI conexión 1/4 vertical",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-200psi-1-4-vertical.webp",
          ),
        ],
      },
      {
        name: "0-300 PSI conexión 1/4 vertical",
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/manometro-300psi-1-4-vertical.webp",
          ),
        ],
      },
    ],
    specs: {
      Rangos: "0-100 / 0-150 / 0-200 / 0-300 PSI",
      Conexión: 'Inferior (Vertical) o posterior (Trasera) de 1/4" NPT.',
      "Uso recomendado": "Ambientes con baja vibración / Tableros de control.",
    },
  },

  {
    id: "muñeco-compresor-compacto",
    name: "Muñeco conector para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Conector con 7 salidas y 1 entrada de aire, incluye válvula reguladora de presión, idela para compresores compactos.",
    price: 70000,
    image: getImage(
      "productos/repuestos-accesorios/muñeco-conector-compresor-compacto.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/muñeco-conector-compresor-compacto.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/muñeco-conector-compresor-compacto-medidas.webp",
      ),
    ],
    specs: {
      Entrada: "1/2",
      Salidas:
        "2 salidas hembra de 1/8, 1 salida macho de 1/4, 2 salidas hembra de 1/4",
    },
  },

  {
    id: "culata-compresor-compacto-grande",
    name: "Culata para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "La culata es una pieza esencial diseñada para el ensamblaje o reemplazo de la parte superior de la unidad de bombeo, actuando como el cierre hermético de la cámara de compresión. Su construcción robusta, fabricada en materiales de alta resistencia térmica como hierro fundido o aluminio, garantiza una durabilidad superior y un soporte firme para el sistema de válvulas (flappers o discos). Gracias a su diseño optimizado con amplias aletas de refrigeración, permite una disipación de calor eficiente durante los ciclos de trabajo exigentes, protegiendo los componentes internos y asegurando la operatividad constante y el rendimiento máximo de su compresor industrial.",
    price: 120000,
    image: getImage(
      "productos/repuestos-accesorios/culata-compresor-compacto-grande.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/culata-compresor-compacto-grande.webp",
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
      "productos/repuestos-accesorios/codo-compresor-compacto.webp",
    ),
    images: [
      getImage("productos/repuestos-accesorios/codo-compresor-compacto.webp"),
    ],
    specs: {
      Conexión: "3/8",
    },
  },
  {
    id: "ventilador-compresor-compacto",
    name: "Ventilador para Compresor Compacto",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Diseñado para la disipación térmica activa del motor y el cabezal. Su flujo de aire constante garantiza una temperatura operativa estable, protegiendo el bobinado y los componentes internos contra fallas por calor, incluso en jornadas de trabajo intensivo.",
    price: 30000,
    image: getImage(
      "productos/repuestos-accesorios/ventilador-motor-compresor-compacto.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/ventilador-motor-compresor-compacto.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/ventilador-motor-compresor-compacto-medida.webp",
      ),
    ],
    specs: {
      "Diámetro del eje": "14mm",
    },
  },
  {
    id: "ojo-visor-cabezote-compresor",
    name: "Ojo visor de aceite para Cabezote de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente de alta precisión diseñado para permitir la inspección visual rápida, constante y segura del nivel y estado del lubricante dentro del cabezote, sin necesidad de interrumpir la operación del sistema. Fabricado con materiales de alta resistencia térmica y mecánica, este visor facilita el monitoreo del color y la pureza del aceite, permitiendo detectar a tiempo la contaminación por partículas o la pérdida de viscosidad. Es un elemento crítico de mantenimiento preventivo que garantiza una lubricación adecuada y previene desgastes prematuros en los pistones y rodamientos.",
    price: 25000,
    image: getImage(
      "productos/repuestos-accesorios/ojos-visores-cabezotes-compresor.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/ojos-visores-cabezotes-compresor.webp",
      ),
    ],
    variantType: "dropdown",
    variants: [
      {
        name: 'Ojo visor 1/2"',
        price: 25000,
        images: [
          getImage(
            "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-1-2.webp",
          ),
        ],
      },
      {
        name: 'Ojo visor de 3/4"',
        price: 35000,
        images: [
          getImage(
            "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-3-4.webp",
          ),
        ],
      },
      {
        name: 'Ojo visor de 1"',
        price: 50000,
        images: [
          getImage(
            "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-1-pulgada.webp",
          ),
        ],
      },
    ],
    specs: {
      Medidas: '1/2", 3/4", 1"',
    },
  },
  {
    id: "ojo-visor-aceite-cabezote-tipo-chequera",
    name: "Ojo visor de aceite para Cabezote tipo chequera de Compresor",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente de alta precisión diseñado para permitir la inspección visual rápida, constante y segura del nivel y estado del lubricante dentro del cabezote, sin necesidad de interrumpir la operación del sistema. Fabricado con materiales de alta resistencia térmica y mecánica, este visor facilita el monitoreo del color y la pureza del aceite, permitiendo detectar a tiempo la contaminación por partículas o la pérdida de viscosidad. Es un elemento crítico de mantenimiento preventivo que garantiza una lubricación adecuada y previene desgastes prematuros en los pistones y rodamientos.",
    price: 120000,
    image: getImage(
      "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-tipo-chequera.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-tipo-chequera.webp",
      ),
      getImage(
        "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-tipo-chequera-atras.webp",
      ),
    ],
    specs: {},
  },
  {
    id: "ojo-visor-aceite-cabezote-1105-2105",
    name: "Ojo visor de aceite para Cabezote 1105-2105",
    category: Category.REPUESTOS_ACCESORIOS,
    brand: "",
    description:
      "Componente de alta precisión diseñado para permitir la inspección visual rápida, constante y segura del nivel y estado del lubricante dentro del cabezote, sin necesidad de interrumpir la operación del sistema. Fabricado con materiales de alta resistencia térmica y mecánica, este visor facilita el monitoreo del color y la pureza del aceite, permitiendo detectar a tiempo la contaminación por partículas o la pérdida de viscosidad. Es un elemento crítico de mantenimiento preventivo que garantiza una lubricación adecuada y previene desgastes prematuros en los pistones y rodamientos.",
    price: 120000,
    image: getImage(
      "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-1105-2105.webp",
    ),
    images: [
      getImage(
        "productos/repuestos-accesorios/ojo-visor-aceite-cabezote-1105-2105.webp",
      ),
    ],
    specs: {},
  },
];
