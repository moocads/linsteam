import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import AwardsSection from "@/components/AwardsSection"
import ServicesSection from "@/components/ServicesSection"
import PropertiesSection from "@/components/PropertiesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AwardsSection />
        <ServicesSection />
        <PropertiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
