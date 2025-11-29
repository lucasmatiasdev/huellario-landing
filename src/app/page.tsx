import { Header } from "../../components/layout/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { ProductsSection } from "../../components/sections/ProductsSection";
import { products } from "../../lib/products";
import { BenefitsSection } from "../../components/sections/BenefitsSection";
import { Footer } from "../../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section id="Inicio">
        <HeroSection />
      </section>
      <section id="Productos">
        <ProductsSection products={products} />
      </section>
      <section id="Beneficios">
        <BenefitsSection />
      </section>
      <Footer />
    </>
  );
}

