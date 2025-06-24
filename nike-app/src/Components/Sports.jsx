import React from 'react';
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";
const sports = [
  {
    id: 1,
    name: "Running",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/9/4/d/-original-imagtcnu6t4ucx88.jpeg?q=20&crop=false"
  },
  {
    id: 2,
    name: "Football",
    image: "https://i0.wp.com/dagiperu.com/wp-content/uploads/2024/08/nike-just-do-it-8.webp?fit=594,405&ssl=1"
  },
  {
    id: 3,
    name: "Basketball",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/5b8b9f97-9905-480a-bb76-2cc0a7471985/nike-just-do-it.jpg"
  },
  {
    id: 4,
    name: "Training and Gym",
    image: "https://media.istockphoto.com/id/177132281/photo/yoga-pose-black-and-white.jpg?s=612x612&w=0&k=20&c=AbhpLHmgdbpnw1oFy5Bjvxf5eohpmzjYMGFut9L9zsE="
  },
  {
    id: 5,
    name: "Tennis",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/d9dad7de-7adb-4904-a61b-6d8ce762ff5f/nike-just-do-it.jpg"
  },
  {
    id: 6,
    name: "Yoga",
    image: "https://media.istockphoto.com/id/177132281/photo/yoga-pose-black-and-white.jpg?s=612x612&w=0&k=20&c=AbhpLHmgdbpnw1oFy5Bjvxf5eohpmzjYMGFut9L9zsE="
  },
  {
    id: 7,
    name: "Skateboarding",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/d9dad7de-7adb-4904-a61b-6d8ce762ff5f/nike-just-do-it.jpg"
  },
  {
    id: 8,
    name: "Dance",
    image: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_300,c_limit/43ac9f41-fb34-4b0b-acc2-7b479001adb1/nike-just-do-it.jpg"
  }
];

const Sports = () => {
  return (
    <div id="sports">
     <div className="shoe-icon">
           <h2>Shop by Sports</h2>
           <div className="shoe-main">
           <div> <MdArrowBackIos/></div>
            <div><MdArrowForwardIos /></div>
            </div>
          </div>
      <div className="sport-scroll-wrapper">
        {sports.map((item) => (
          <div className="sport-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <button className="sport-btn">{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
