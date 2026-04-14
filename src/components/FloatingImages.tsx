"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const allImages = [
  { src: "/images/feature-1.svg", alt: "Feature 1", size: 340 },
  { src: "/images/feature-2.svg", alt: "Feature 2", size: 357 },
  { src: "/images/feature-3.svg", alt: "Feature 3", size: 374 },
  { src: "/images/feature-4.svg", alt: "Feature 4", size: 391 },
  { src: "/images/feature-5.svg", alt: "Feature 5", size: 408 },
  { src: "/images/feature-6.svg", alt: "Feature 6", size: 425 },
  { src: "/images/feature-7.svg", alt: "Feature 7", size: 342 },
  { src: "/images/feature-8.svg", alt: "Feature 8", size: 359 },
];

const getRandomImages = (exclude?: string[]) => {
  const pool = exclude ? allImages.filter((img) => !exclude.includes(img.src)) : allImages;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};

export default function FloatingImages() {
  const [floatingImages, setFloatingImages] = useState<typeof allImages>([]);
  const [cycleKey, setCycleKey] = useState(0);

  const rotateImages = useCallback(() => {
    setFloatingImages((prev) => {
      const excludeSrcs = prev.map((img) => img.src);
      return getRandomImages(excludeSrcs);
    });
    setCycleKey((k) => k + 1);
  }, []);

  useEffect(() => {
    setFloatingImages(getRandomImages());
    const interval = setInterval(rotateImages, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [rotateImages]);

  if (floatingImages.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={cycleKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {floatingImages.map((image, index) => {
            const startFromLeft = index % 2 === 0;
            const initialX = startFromLeft ? -2000 : 2000;
            const lineupPositions = [-450, -150, 150, 450];
            const lineupX = lineupPositions[index];
            const cornerX = [-800, 800, -800, 800][index];
            const cornerY = [-400, -400, 400, 400][index];
            return (
              <motion.div
                key={image.src}
                className="absolute"
                style={{ width: image.size, height: image.size, top: "50%", left: "50%", marginLeft: -image.size / 2, marginTop: -image.size / 2 }}
                initial={{ x: initialX, y: 0, opacity: 0 }}
                animate={{
                  x: [initialX, lineupX, lineupX, cornerX, cornerX, cornerX + 120, cornerX - 80, cornerX + 100, cornerX],
                  y: [0, 0, 0, cornerY, cornerY, cornerY - 100, cornerY + 80, cornerY - 120, cornerY],
                  rotate: [0, 0, 0, 0, 0, 20, -15, 25, 0],
                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1],
                }}
                transition={{ duration: 40, times: [0, 0.05, 0.175, 0.2, 0.225, 0.4, 0.6, 0.8, 1], ease: "easeInOut", repeat: Infinity }}
              >
                <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
