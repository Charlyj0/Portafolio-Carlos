"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ImageModal from "./imageModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  title: string;
  description: string;
  tech: string;
  images: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
  images,
}: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showDescription, setShowDescription] = useState(false);

  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    api.on("select", onSelect);
    onSelect();

    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <>
      {/* CARD */}
      <div className="
        group relative h-[470px] flex flex-col
        rounded-2xl overflow-hidden

        bg-white text-gray-900
        border border-gray-200

        dark:bg-black dark:text-orange-400
        dark:border-orange-500/20

        transition-all duration-300
        hover:-translate-y-2 hover:scale-[1.02]
        hover:shadow-2xl
      ">

        {/* Glow (modo oscuro naranja real) */}
        <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
          <div className="
            absolute top-0 left-1/2 -translate-x-1/2
            w-[300px] h-[120px]
            bg-orange-500 blur-[120px] rounded-full
            dark:block hidden
          " />
        </div>

        {/* Carousel */}
        <div className="p-4">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div
                    className="
                      relative h-52 rounded-xl overflow-hidden cursor-pointer
                      transition duration-500
                      group-hover:scale-[1.02]
                    "
                    onClick={() => setSelectedImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${title}-${index}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>

          {/* indicadores */}
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, index) => {
              const isActive = current === index;

              return (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className="
                    relative w-6 h-1 rounded-full
                    bg-gray-300 dark:bg-orange-500/20
                    overflow-hidden
                  "
                >
                  <span
                    className={`
                      absolute left-0 top-0 h-full
                      bg-orange-500
                      transition-all duration-300
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="
            text-xl font-bold line-clamp-2
            hover:text-orange-500 transition
          ">
            {title}
          </h3>

          <p className="text-sm mt-2 line-clamp-2 text-gray-600 dark:text-orange-200/80">
            {description}
          </p>

          {/* VER MÁS */}
          {description.length > 120 && (
            <button
              onClick={() => setShowDescription(true)}
              className="
                mt-3 text-xs
                text-orange-500 hover:text-orange-400
                transition self-start
              "
            >
              Ver más
            </button>
          )}

          {/* TECH */}
          <div className="mt-auto pt-4">
            <span className="
              inline-block text-xs px-3 py-1 rounded-full

              border border-gray-200 bg-gray-100 text-gray-700

              dark:bg-black dark:border-orange-500/30 dark:text-orange-400
              group-hover:border-orange-500/60 transition
            ">
              {tech}
            </span>
          </div>
        </div>
      </div>

      {/* MODAL DESCRIPCIÓN */}
      {showDescription && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="
            max-w-lg w-full
            bg-white text-black

            dark:bg-black dark:text-orange-200

            border border-gray-200 dark:border-orange-500/30
            rounded-2xl p-6
          ">
            <h2 className="text-lg font-bold mb-4 text-orange-500">
              {title}
            </h2>

            <p className="text-sm leading-relaxed">
              {description}
            </p>

            <button
              onClick={() => setShowDescription(false)}
              className="
                mt-6 text-sm px-4 py-2 rounded-lg
                bg-orange-500 text-black
                hover:bg-orange-400 transition
              "
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* MODAL IMAGEN */}
      <ImageModal
        images={images}
        initialIndex={images.indexOf(selectedImage || "")}
        isOpen={selectedImage !== null}
        onCloseAction={() => setSelectedImage(null)}
      />
    </>
  );
}