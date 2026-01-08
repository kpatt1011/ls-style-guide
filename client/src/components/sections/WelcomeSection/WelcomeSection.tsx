import { motion } from "framer-motion";

export function WelcomeSection() {
  return (
    <section id="welcome" className="min-h-screen bg-white flex items-center">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-hw-black">
            Welcome to the Healthspan Wealth brand guidelines. They will help 
            you understand our brand essence, visual identity, and how to 
            represent us consistently across all touchpoints.
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
