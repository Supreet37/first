import React from "react";

const Card = ({image,title,body}) => {
  return(
    <div className="card">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Card;