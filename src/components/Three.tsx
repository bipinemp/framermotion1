"use client";

import { container, element } from "@/app/animation/motion";
import { useAnimate } from "@/app/hooks/useAnimate";
import { motion } from "framer-motion";
import { useRef } from "react";

function Three() {
  const ref = useRef<HTMLDivElement>(null);
  const { mainControls, slideControls } = useAnimate(ref);

  return (
    <div className="relative overflow-hidden h-screen flex items-center justify-center bg-red-300">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={mainControls}
        className="flex flex-col items-center gap-3"
      >
        <motion.h1 variants={element}>Three Number</motion.h1>
        <motion.h3 variants={element}>ThirdPage</motion.h3>
        <motion.p variants={element} className="w-96 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, id!
          Enim possimus molestiae nisi ea minima facilis dolorum, id fuga!
        </motion.p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          show: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute inset-0 bg-green-400 z-50"
      />
    </div>
  );
}

export default Three;
