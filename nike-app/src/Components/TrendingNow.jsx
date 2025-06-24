import React from 'react';
import TrendingCard from './TrendingCard';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const TrendingNow = () => {
  const items = [
    {
      id: 1,
      name: "Nike Zoom Vomero 5",
      category: "Men's Shoes",
      price: "₹ 14 995.00",
      image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d130fcfa-7169-4172-8955-bf39cc544527/NIKE+VOMERO+18.png"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 3,
      name: "Nike Women's Artist Collection",
      category: "Women's Oversized Cropped Graphic T-Shirt",
      price: "₹ 2 195.00",
      image: "https://boathousestores.com/cdn/shop/files/NIK-BV6175-010-B.W-1.jpg?v=1749742917&width=1000"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 2,
      name: "Nike Motiva x NorBlack NorWhite",
      category: "Women's Walking Shoes",
      price: "₹ 10 795.00",
      image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
  ];

  return (
    <div id="trending">
      <div className="trending-header">
        <h2>Trending Now</h2>
        <div className="trending-icons">
          <div><MdArrowBackIos /></div>
          <div><MdArrowForwardIos /></div>
        </div>
      </div>

      <div className="trending-scroll">
        <div className="trending-list">
          {items.map(item => (
            <TrendingCard
              key={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
