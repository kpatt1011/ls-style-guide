import { motion } from "framer-motion";

const primaryColors = [
  { name: "HW Purple", hex: "#7B68EE", rgb: "123, 104, 238", usage: "Primary brand color, backgrounds, accents" },
  { name: "HW Black", hex: "#1A1A1A", rgb: "26, 26, 26", usage: "Typography, logo, dark backgrounds" },
  { name: "HW White", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Backgrounds, reversed text" },
];

const secondaryColors = [
  { name: "Silver", hex: "#9CA3AF", rgb: "156, 163, 175", usage: "Logo accent, subtle details" },
  { name: "Gray 100", hex: "#F3F4F6", rgb: "243, 244, 246", usage: "Light backgrounds, cards" },
  { name: "Gray 600", hex: "#4B5563", rgb: "75, 85, 99", usage: "Secondary text" },
];

interface ColorCardProps {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
  delay: number;
}

function ColorCard({ name, hex, rgb, usage, delay }: ColorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="aspect-square rounded-2xl mb-4 shadow-lg transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor: hex }}
      />
      <h3 className="text-lg font-medium mb-1">{name}</h3>
      <p className="text-sm text-gray-500 font-mono mb-2">{hex}</p>
      <p className="text-sm text-gray-500 mb-2">RGB: {rgb}</p>
      <p className="text-sm text-gray-400">{usage}</p>
    </motion.div>
  );
}

export function ColorSection() {
  return (
    <section id="colors" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-hw-black mb-6"
        >
          Color
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mb-16"
        >
          Our color palette reflects the vibrant energy and professional nature 
          of Healthspan Wealth. Use these colors consistently to maintain brand 
          recognition.
        </motion.p>

        {/* Primary Colors */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-8"
        >
          Primary Colors
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {primaryColors.map((color, index) => (
            <ColorCard
              key={color.name}
              {...color}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* Secondary Colors */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium mb-8"
        >
          Secondary Colors
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryColors.map((color, index) => (
            <ColorCard
              key={color.name}
              {...color}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
