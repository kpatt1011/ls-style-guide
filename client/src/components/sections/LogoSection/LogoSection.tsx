import { motion } from "framer-motion";
import { HWLogo } from "../HeroSection/HWLogo";

export function LogoSection() {
  return (
    <section id="logo" className="min-h-screen bg-hw-black text-white">
      {/* Section Header */}
      <div className="container mx-auto px-6 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-300"
        >
          Logo
        </motion.h2>
      </div>

      {/* Logo Display */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Primary Logo - Light on Dark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-hw-black border border-gray-800 rounded-2xl p-12 flex items-center justify-center"
          >
            <div className="w-full max-w-xs">
              <HWLogo className="w-full h-auto [&_path]:stroke-white" />
            </div>
          </motion.div>

          {/* Secondary Logo - Dark on Light */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 flex items-center justify-center"
          >
            <div className="w-full max-w-xs">
              <HWLogo className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* Logo Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-xl font-medium mb-4">Clear Space</h3>
            <p className="text-gray-400 leading-relaxed">
              Maintain minimum clear space around the logo equal to the height 
              of the "H" character to ensure visibility and impact.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Minimum Size</h3>
            <p className="text-gray-400 leading-relaxed">
              The logo should never be reproduced smaller than 32px in height 
              to maintain legibility across all applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Color Usage</h3>
            <p className="text-gray-400 leading-relaxed">
              Use the black logo on light backgrounds and white logo on dark 
              backgrounds. The silver accent should always be present.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
