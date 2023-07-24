"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Reveal = ({ children }: Props) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
