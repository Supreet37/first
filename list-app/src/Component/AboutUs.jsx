import React from "react";
import FeedbackCard from "./FeedbackCard";
import profileImage from "../assets/5aab5459786b226d5d70e39a1dfa0e817fee1e4d.jpg";

const feedbacks = [
  {
    id: 1,
    name: "Shruti Sharma",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
    image: profileImage,
  },
  {
    id: 2,
    name: "Shruti Sharma",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
    image: profileImage,
  },
  {
    id: 3,
    name: "Shruti Sharma",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
    image: profileImage,
  },
  {
    id: 4,
    name: "Shruti Sharma",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibu lum nibh.Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Phasellus viverra orci sed risus tinci dunt tempor. Nulla malesuada vestibulum nibh.",
    image: profileImage,
  },
];

const AboutUs = () => {
  return (
    <div id="customer">
      <div className="customer-head">
        <h1>What Customers Say About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum
          nibh.
        </p>
      </div>

      <div className="customer-section">
        {feedbacks.map((item) => (
          <FeedbackCard
            key={item.id}
            name={item.name}
            role={item.role}
            feedback={item.feedback}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
