import React from "react";

const Details = ({name,course,place}) => {

  // let obj = {
  //   name: "Rahul",
  //   course: "ReactJS",
  //   place: 'delhi'
  // };
  // const { name,course,place} = obj;
  // console.log(name);
  // console.log(obj.course);


  return(
    <div className="student">
      <h1>Name: {name}</h1>
      <h1>Course: {course}</h1>
      <h1>Place: {place}</h1>
    </div>
  )
}

export default Details;