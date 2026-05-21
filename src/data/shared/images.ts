import type { ImageMetadata } from "astro";

// ---------------------------------------------------------------------------
// 1. CARGA AUTOMÁTICA DE IMÁGENES (src/assets)
// ---------------------------------------------------------------------------

// Cargamos TODAS las imágenes de la carpeta assets
const allImagesGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../../assets/**/*.{jpeg,jpg,png,webp}",
  { eager: true },
);


export const getImage = (path: string): ImageMetadata | string => {
  if (path.startsWith("http")) {
    return path;
  }
  const fullPath = `../../assets/${path}`;
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