"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type ImageModalProps = {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onCloseAction: () => void;
};

export default function ImageModal({
  images,
  initialIndex,
  isOpen,
  onCloseAction,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  // Sincroniza el índice cuando el modal se abre con una imagen específica
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Manejo de navegación por teclado (Flechas y Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseAction();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // 1. 🌟 PROTECCIÓN CRÍTICA: Si no está abierto o no hay imágenes, no evalúes nada más.
  if (!isOpen || images.length === 0 || initialIndex === -1) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onCloseAction} // Cierra al hacer clic en el fondo oscuro
    >
      {/* Botón de cerrar */}
      <button
        onClick={onCloseAction}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-xl transition"
        aria-label="Cerrar galería"
      >
        ✕
      </button>

      {/* Contenedor Principal de la Imagen */}
      <div 
        className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic sobre la imagen
      >
        {/* Flecha Izquierda */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-16 z-50 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition backdrop-blur-md"
          >
            ‹
          </button>
        )}

        {/* Imagen Activa */}
        <div className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Vista expandida ${currentIndex + 1}`}
            fill
            className="object-contain select-none"
            priority
          />
        </div>

        {/* Flecha Derecha */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-16 z-50 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 transition backdrop-blur-md"
          >
            ›
          </button>
        )}
      </div>

      {/* Indicador de posición inferior (ej. "2 / 5") */}
      {images.length > 1 && (
        <div className="mt-4 text-sm text-white/60 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}