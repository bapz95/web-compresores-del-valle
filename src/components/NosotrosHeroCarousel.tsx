import React, { useEffect, useState } from 'react';

// Importamos las imágenes (Objetos de Astro)
import Compresores from '../assets/nosotros/Empresa/Compresores.jpeg';
import Cabezotes from '../assets/nosotros/Empresa/Cabezotes-tipo-chequera.jpeg';
import compresores_ch from '../assets/nosotros/Empresa/compresores_del_valle_fachada.jpeg';

// CAMBIO AQUÍ: Creamos un array de objetos con la imagen y su descripción SEO
const slides = [
  { 
    src: Compresores, 
    alt: "Interior de bodega con stock de compresores industriales listos para entrega" 
  },
  { 
    src: Cabezotes, 
    alt: "Variedad de cabezotes tipo chequera" 
  },
  { 
    src: compresores_ch, 
    alt: "Fachada principal de la sede de Compresores del Valle en Cali" 
  }
];

export const NosotrosHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-150 rounded-[5rem] overflow-hidden shadow-2xl z-10 bg-slate-900">
      {slides.map((slide, index) => (
        <img
          key={index}          
          src={slide.src.src} 
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out 
            ${index === currentIndex ? 'opacity-100' : 'opacity-0' }
          `}
        />
      ))}
      
      <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply pointer-events-none"></div>
    </div>
  );
};