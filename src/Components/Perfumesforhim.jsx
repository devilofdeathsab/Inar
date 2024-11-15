import React from "react";
import Product from "./Products/product";
import {
  ADG,
  Azure,
  BR540,
  Gum,
  Maidan,
  PDM,
  Phantasia,
  Vanilla,
  Yoyo,
} from "../assets/images";
import { image } from "framer-motion/client";
const Perfumesforhim = () => {
  const perfumes = [
    {
      id: 1,
      image: Yoyo,
      name: "Yoyo",
      description: "Inspired by YSL Y",
      price: "Rs 1100",
    },
    {
      id: 2,
      image: Phantasia,
      name: "Phantasia",
      description: "Inspired by LV Imagination",
      price: "Rs 1800",
    },
    {
      id: 3,
      image: ADG,
      name: "ADG",
      description: "Inspired by ADG",
      price: "Rs 1100",
    },
    {
      id: 4,
      image: BR540,
      name: "540",
      description: "Inspired by BR540",
      price: "Rs 1800",
    },
    {
      id: 5,
      image: PDM,
      name: "92.97",
      description: "Inspired by PDM Greenley.",
      price: "Rs 1800",
    },
    {
      id: 6,
      image: Gum,
      name: "Gum",
      description: "Inspired by Rasasi Hawas",
      price: "Rs 1800",
    },
    {
      id: 7,
      image: Azure,
      name: "Azure Sapphire",
      description: "Inspired by Blue Sapphire",
      price: "Rs 1800",
    },
    {
      id: 8,
      image: Maidan,
      name: "Maidan",
      description: "Inspired by TSOD Maidan",
      price: "Rs 1800",
    },
    {
      id: 9,
      image: Vanilla,
      name: "Vanilla Musk",
      description: "Inspired by PDM Althair",
      price: "Rs 1800",
    },
    {
      id: 6,
      image: Gum,
      name: "Gum",
      description: "Inspired by Rasasi Hawas",
      price: "Rs 1800",
    },
    {
      id: 6,
      image: Gum,
      name: "Gum",
      description: "Inspired by Rasasi Hawas",
      price: "Rs 1800",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Perfumes for Him</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <Product perfume={perfume} />
        ))}
      </div>
    </div>
  );
};

export default Perfumesforhim;
