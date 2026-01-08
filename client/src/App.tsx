import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { ColorSection } from "@/components/sections/ColorSection";
import { TypographySection } from "@/components/sections/TypographySection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeSection />
        <LogoSection />
        <ColorSection />
        <TypographySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
