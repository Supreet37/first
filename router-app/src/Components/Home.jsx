import React, { useContext } from 'react'
import {example} from "../App"

const Home = () => {

  const data = useContext(example);
  console.log(data)

  return (
    <div>
      <h1>Home</h1>
      <p>{data.name}</p>
    </div>
  )
}

export default Home;