import React from 'react';
import ShoesCard from './ShoesCard';
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";

const Shoes = () => {
  const products = [
    {
      id: 1,
      name: "VOMERO 18",
      image:"https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 2,
      name: "V2K",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 3,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 4,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 5,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 6,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 7,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 8,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    },
    {
      id: 9,
      name: "PEGASUS 41",
      image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47b7945e-a379-4c24-b9df-98f4eef178e5/NIKE+AIR+MAX+PLUS.png"
    }
  ];
  return (
    <div id="shoes">
     <div className="shoe-icon">
      <h2>Shop by icons</h2>
      <div className="shoe-main">
      <div> <MdArrowBackIos/></div>
       <div><MdArrowForwardIos /></div>
       </div>
     </div>
     <div className="product-flex">
    <div className="product-list">
      {products.map((item) => (
        <ShoesCard key={item.id} image={item.image} name={item.name} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default Shoes;
