 import { Providers } from "@/components/Providers";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import LiquidHero from "@/components/LiquidHero";
import Marquee from "@/components/Marquee";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import ProcessSection from "@/components/ProcessSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import ServicesSection from "@/components/ServicesSection";
import ParallaxImages from "@/components/ParallaxImages";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ShopSection from "@/components/ShopSection";
import SocialsSection from "@/components/SocialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <Providers>  
      <SmoothScroll>
        <CustomCursor />
        <main className="min-h-screen bg-charcoal">
          <Preloader />
          <Navbar />
          <LiquidHero />
          <Marquee />
          <AboutSection />
          <InnovationSection />
          <ServicesSection />
          <ProcessSection />
          <GlobalReachSection />
          <ParallaxImages />
          <TestimonialsSection />
          <CertificationsSection />
        
        
          <ShopSection />
          <SocialsSection />
          <CTASection />
          <Footer />
        </main>
      </SmoothScroll>
    </Providers>
  );
}

export default App;
