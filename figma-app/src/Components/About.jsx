import React from "react";
import img1 from "../assets/Icon (1).png"
import img2 from "../assets/Icon (2).png"
import img3 from "../assets/Icon (3).png"
import Card from "./Card.jsx"

const About = () => {

  const inform = [
    {
      image:img1,
      title:"Membership Organisations",
      body:"Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image:img2,
      title:"Membership Organisations",
      body:"Our membership management software provides full automation of membership renewals and payments",
    },
    {
      image:img3,
      title:"Membership Organisations",
      body:"Our membership management software provides full automation of membership renewals and payments",
    }
  ]

  return(
    <div id="about">
     <div className="about-head">
      <h1>Manage your entire community in a single system</h1>
      <p>Who is Nexcent suitable for ?</p>
     </div>
     <div className="about-cards">
     {inform.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            body={item.body}
          />
        ))}
     </div>
    </div>
  )

}

export default About;