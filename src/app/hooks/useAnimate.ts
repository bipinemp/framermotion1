"use client";

import { useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useAnimate = (ref: React.RefObject<HTMLDivElement>) => {
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
      slideControls.start("show");
    }
  }, [isInView]);

  return { mainControls, slideControls };
};
