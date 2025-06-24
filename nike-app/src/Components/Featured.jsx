import React from 'react'

const Featured = () => {
  return (
    <div id='featured'>
      <h2>Featured</h2>
      <div className="feature-container">
        <div className="feature-grid">
          <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_410,c_limit/62f6a464-9551-4996-ae98-96d5d9093826/image.png" alt="" />
          <h3>Cool For The Summer</h3>
        </div>
        <div className="feature-grid">
          <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_410,c_limit/0493f0bc-c949-4b3d-8413-cbd7f6b05512/nike-just-do-it.png" alt="" />
          <h3>Gear for Every Rep</h3>
        </div>
        <div className="feature-grid">
          <img src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/2d52879d-cf37-430c-976f-c68c9c5c1185/nike-kids.png" alt="" />
          <h3>Kids' Pegasus 41</h3>
        </div>
      </div>
    </div>
  )
}

export default Featured