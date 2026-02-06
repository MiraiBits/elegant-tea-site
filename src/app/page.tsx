import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";
import NewsletterForm from "@/components/NewsletterForm";
import { Leaf, Award, Sun } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "Premium Black Tea",
      weight: "100g",
      price: "LKR 1,200",
      image: "/images/tea-100g.png", // We'll use placeholders for now
    },
    {
      id: "2",
      name: "Premium Black Tea",
      weight: "500g",
      price: "LKR 3,500",
      isPopular: true,
      image: "/images/tea-500g.png",
    },
    {
      id: "3",
      name: "Premium Black Tea",
      weight: "1kg",
      price: "LKR 6,000",
      image: "/images/tea-1kg.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F9F9F5]">
      <Navbar />
      <Hero />

      {/* Intro/Story Section */}
      <section id="story" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-accent font-bold tracking-widest uppercase text-sm">Our Heritage</h3>
              <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold leading-tight">
                Crafted with Passion,<br />Steeped in Tradition.
              </h2>
              <div className="w-20 h-1 bg-accent/30"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                ZLON Tea brings you the finest selection of Ceylon tea, grown in the lush highlands where the air is crisp and the soil is rich.
                For generations, our pluckers have hand-picked only the tenderest two leaves and a bud to ensure a brew that is exquisite in flavor and aroma.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in purity. No additives, no artificial flavors—just the honest, robust taste of Ceylon Black Tea.
              </p>
              <div className="pt-4 grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-full text-primary"><Leaf size={24} /></div>
                  <span className="text-sm font-bold text-gray-700">100% Organic</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-full text-primary"><Award size={24} /></div>
                  <span className="text-sm font-bold text-gray-700">Premium Quality</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-primary/5 rounded-full text-primary"><Sun size={24} /></div>
                  <span className="text-sm font-bold text-gray-700">Fresh Harvest</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for story image */}
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary/30 text-2xl font-serif">Story Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-24 px-6 bg-[#F9F9F5]">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-accent font-bold tracking-widest uppercase text-sm">Our Collection</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-primary font-bold">Experience the ZLON Difference</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of premium tea packets, designed for every tea lover. Whether you need a daily brew or a gift for a loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/Contact Section Wrapper */}
      <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Join the ZLON Community</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive offers, tea brewing tips, and stories from the mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              className="px-6 py-3 rounded-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent w-full"
            />
            <button className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 font-medium transition-colors shadow-lg">
              Subscribe
            </button>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
