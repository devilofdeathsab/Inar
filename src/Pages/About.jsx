import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About INAR Perfumes</h1>
      <p className="text-lg mb-4">
        INAR Perfumes is dedicated to bringing you the finest fragrances from
        around the world. Our passion for perfumery and commitment to quality
        ensures that each scent in our collection is a masterpiece.
      </p>
      <p className="text-lg mb-4">
        Founded in [year], we have been serving our customers with a curated
        selection of perfumes for every occasion and preference. From classic
        scents to modern blends, we offer a diverse range that caters to all.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p className="text-lg mb-4">
        To provide our customers with high-quality, authentic fragrances that
        enhance their personal style and leave a lasting impression.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose INAR?</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>Authentic products sourced directly from manufacturers</li>
        <li>Wide range of fragrances for all preferences</li>
        <li>Expert advice from our fragrance specialists</li>
        <li>Competitive pricing and regular promotions</li>
        <li>Excellent customer service</li>
      </ul>
    </div>
  );
};

export default About;
