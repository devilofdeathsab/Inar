import React from "react";

const About = () => {
  return (
    <div className="bg-black text-cream min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8 text-gold-light">
          About INAR Fragrances
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-6 text-lg">
              INAR Fragrances is a luxury perfume brand that brings the art of
              perfumery to discerning customers. Our mission is to create
              unique, high-quality scents that capture the essence of
              individuality and sophistication.
            </p>
            <p className="mb-6 text-lg">
              Founded in Karachi, Pakistan, INAR has quickly become synonymous
              with elegance and innovation in the world of fragrances. We blend
              traditional perfumery techniques with modern sensibilities to
              craft scents that are both timeless and contemporary.
            </p>
            <p className="text-lg">
              At INAR, we believe that every person deserves to find their
              signature scent. That's why we offer a diverse range of fragrances
              for both men and women, as well as our budget-friendly series for
              those who want quality at an accessible price point.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carouselmain-6NZs8PU6VerkfIZiZGQQ7k95EMn0TB.jpeg"
              alt="INAR Fragnances"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
