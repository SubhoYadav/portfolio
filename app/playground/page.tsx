"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  variant1: {
    opacity: 1,
    scale: 1,
  },
  variant2: {
    opacity: 1,
    scale: 1,
    background: "blue",
  },
};

export default function playground() {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        variants={variants}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={"variant2"}
        className="w-44 h-44 bg-red-400"
      ></motion.div>
    </div>
  );
}
