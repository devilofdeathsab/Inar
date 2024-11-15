import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black text-cream">
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carouselmain-6NZs8PU6VerkfIZiZGQQ7k95EMn0TB.jpeg"
        alt="INAR Perfume Collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif font-bold text-gold-light mb-4"
      >
        INAR Perfumes
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-cream mb-8"
      >
        Discover Your Signature Scent
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/perfumesforhim"
          className="bg-gold-light text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gold-dark transition duration-300 mr-4"
        >
          Shop Men's
        </Link>
        <Link
          to="/perfumesforher"
          className="bg-transparent border-2 border-gold-light text-gold-light px-8 py-3 rounded-full text-lg font-medium hover:bg-gold-light hover:text-black transition duration-300"
        >
          Shop Women's
        </Link>
      </motion.div>
    </div>
  </section>
);

const FeaturedCategories = () => (
  <section className="py-16 bg-cream text-black">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-gold-dark mb-8 text-center">
        Our Collections
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CategoryCard
          title="For Him"
          description="Masculine fragrances for the modern gentleman."
          link="/perfumesforhim"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ganymede-FU8gGZ1vCzUo7JVCZDVm6FtJg0WZ9T.jpeg"
        />
        <CategoryCard
          title="For Her"
          description="Elegant scents that captivate and inspire."
          link="/perfumesforher"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Femme%20Carousel-lZt5MQcX1onCafNXwBLNytBhEp2VJx.jpeg"
        />
        <CategoryCard
          title="Budget Series"
          description="Quality fragrances at affordable prices."
          link="/budgetseries"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-i7VTmG6oGscBGWAZFRHdLYd9VNkQ52.jpeg"
        />
      </div>
    </div>
  </section>
);

const CategoryCard = ({ title, description, link, image }) => (
  <Link to={link} className="group">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition duration-300 group-hover:bg-opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-serif font-bold text-gold-light mb-2">
          {title}
        </h3>
        <p className="text-cream">{description}</p>
      </div>
    </div>
  </Link>
);

const FeaturedProducts = () => (
  <section className="py-16 bg-black text-cream">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-serif font-bold text-gold-light mb-8 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProductCard
          name="Phantasia"
          description="Inspired by imagination."
          price="Rs 1800"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Phantasia-G9AU3nHsMxoHvE4OulwVcyVHap105U.jpeg"
        />
        <ProductCard
          name="YOYO"
          description="Inspired by YSL Y."
          price="Rs 1100"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yoyo-i7VTmG6oGscBGWAZFRHdLYd9VNkQ52.jpeg"
        />
        <ProductCard
          name="Ozone"
          description="Fresh and invigorating scent."
          price="Rs 1800"
          image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ganymede-FU8gGZ1vCzUo7JVCZDVm6FtJg0WZ9T.jpeg"
        />
      </div>
    </div>
  </section>
);

const ProductCard = ({ name, description, price, image }) => (
  <div className="bg-cream rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-serif font-bold text-gold-dark mb-2">
        {name}
      </h3>
      <p className="text-black mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-gold-dark">{price}</span>
        <button className="bg-gold-light text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gold-dark transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default Home;
