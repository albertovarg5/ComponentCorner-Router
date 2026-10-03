import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header storeName="ComponentCorner Tech" />

      <Hero
        title="Upgrade Your Tech"
        subtitle="Discover smart gadgets for your everyday life."
        buttonText="Shop Now"
      />

      <main className="products-section" id="products">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <ProductCard
            name="Wireless Headphones"
            price="59.99"
            image="https://placehold.co/600x400/2563eb/ffffff?text=Headphones"
            description="Enjoy high-quality sound with wireless headphones."
          />

          <ProductCard
            name="Smart Watch"
            price="89.99"
            image="https://placehold.co/600x400/7c3aed/ffffff?text=Smart+Watch"
            description="Track your daily activities with a smart watch."
          />

          <ProductCard
            name="Portable Speaker"
            price="39.99"
            image="https://placehold.co/600x400/059669/ffffff?text=Speaker"
            description="Take your music anywhere with a portable speaker."
          />
        </div>
      </main>

      <Footer
        storeName="ComponentCorner Tech"
        email="support@componentcorner.com"
        description="Your favorite store for modern technology."
      />
    </div>
  );
}

export default App;