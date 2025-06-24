import React from 'react'

const Latest = () => {
  return (
    <div id='latest'>
      <h3>The Latest</h3>
      <div className="main">
      <div className="container">
       
        <img src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_438,c_limit/dff81043-a7a8-4632-bf55-fb77817f1398/nike-just-do-it.png" alt="" />
        
        <div className="container-detail">
          <h4>Breaking4</h4>
          <h2>Faith Kipyegon vs. The 4-Minute Mile on June 26th</h2>
          <button>Mark Your Calendar</button>
        </div>
      </div>
      <div className="container">
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZRgh6ESvmVe9urgE4h2iZ6qitt-ZSO9YTYW5E_QsCYxRmURl" alt="" />
          
        <div className="container-detail">
        <h4>Feed the Phantom</h4>
          <h2>The new Phantom 6-so precise, it's scary</h2>
          <button>Shop</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Latest