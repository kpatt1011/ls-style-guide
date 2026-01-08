import { motion } from "framer-motion";
import { HWLogo } from "./HWLogo";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-hw-purple overflow-hidden">
      {/* Header text */}
      <div className="absolute top-6 left-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-hw-black text-sm font-medium tracking-wide"
        >
          Healthspan Wealth
        </motion.p>
      </div>

      {/* Subtitle */}
      <div className="absolute top-20 left-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-hw-black text-sm font-medium"
        >
          Brand Guidelines
        </motion.p>
      </div>

      {/* Large HW Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <HWLogo className="w-[80%] max-w-4xl h-auto" />
      </motion.div>
    </section>
  );
}
