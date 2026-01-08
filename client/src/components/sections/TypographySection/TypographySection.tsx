import { motion } from "framer-motion";

const typographyScale = [
  { name: "Display", size: "72px / 4.5rem", weight: "400", sample: "Aa", className: "text-7xl font-serif" },
  { name: "Heading 1", size: "60px / 3.75rem", weight: "400", sample: "Aa", className: "text-6xl font-serif" },
  { name: "Heading 2", size: "48px / 3rem", weight: "400", sample: "Aa", className: "text-5xl font-serif" },
  { name: "Heading 3", size: "36px / 2.25rem", weight: "400", sample: "Aa", className: "text-4xl font-serif" },
  { name: "Body Large", size: "20px / 1.25rem", weight: "400", sample: "Aa", className: "text-xl font-sans" },
  { name: "Body", size: "16px / 1rem", weight: "400", sample: "Aa", className: "text-base font-sans" },
  { name: "Small", size: "14px / 0.875rem", weight: "400", sample: "Aa", className: "text-sm font-sans" },
];

export function TypographySection() {
  return (
    <section id="typography" className="min-h-screen bg-hw-purple text-white py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-hw-black mb-6"
        >
          Typography
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-hw-black/80 max-w-2xl mb-16"
        >
          Our typography system combines elegant serif headings with clean sans-serif 
          body text to create a sophisticated, readable experience.
        </motion.p>

        {/* Font Families */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
              Display & Headings
            </h3>
            <p className="text-5xl font-serif text-hw-black mb-4">
              DM Serif Display
            </p>
            <p className="text-hw-black/70">
              Used for all display text and headings. Its elegant serifs convey 
              sophistication and trustworthiness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <h3 className="text-sm uppercase tracking-wider text-white/60 mb-4">
              Body & UI
            </h3>
            <p className="text-5xl font-sans text-hw-black mb-4">
              DM Sans
            </p>
            <p className="text-hw-black/70">
              Our primary sans-serif typeface for body copy, UI elements, and 
              supporting text. Clean and highly readable.
            </p>
          </motion.div>
        </div>

        {/* Type Scale */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-medium text-hw-black mb-8"
        >
          Type Scale
        </motion.h3>

        <div className="space-y-6">
          {typographyScale.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-between border-b border-white/20 pb-6"
            >
              <div className="flex items-center gap-8">
                <span className={`${item.className} text-hw-black`}>
                  {item.sample}
                </span>
                <div>
                  <p className="font-medium text-hw-black">{item.name}</p>
                  <p className="text-sm text-hw-black/60">{item.size}</p>
                </div>
              </div>
              <span className="text-sm text-hw-black/60 font-mono">
                Weight: {item.weight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
