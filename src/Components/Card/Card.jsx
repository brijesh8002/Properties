import React from 'react'
import "./Card.css"

const Card = ({img1,img2,img3,title,price}) => {
  return (
    <div className='card'>
        <div className="images">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            {/* <img src={img4} alt="" /> */}
        </div>
        <span className='title'> {title}</span>
        <span className='price'> Rs {price}/Month </span>
    </div>
  )
}

export default Card