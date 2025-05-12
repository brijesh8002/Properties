import React from 'react'
import "./Cabin.css"
import Card from '../Card/Card'
import sk1 from "../../assets/ski.avif"
import sk2 from "../../assets/ski1.avif"
import sk3 from "../../assets/ski2.avif"

import r1 from "../../assets/room.jpg"
import r2 from "../../assets/room1.jpg"
import r3 from "../../assets/room2.jpg"
import rh1 from "../../assets/roomhouse.avif"
import rh2 from "../../assets/roomhouse2.avif"
import rh3 from "../../assets/roomhouse3.avif"


const Cabin = () => {
  return (<>
  <h3 className='title-cat'>Cabin</h3>
    <div className='houses'>
      <Card img1={r1} img2={r2} img3={r3} title={"2BHK in Delhi"} price={"20,081"}/>
      <Card img1={sk1} img2={sk2} img3={sk3}  title={"Cabin in Resort"} price={"20,088"}/>
      <Card img1={rh1} img2={rh2} img3={rh3} title={"4BHK in Gurgaon"} price={"35,099"}/>
    </div>
    </>
  )
}

export default Cabin