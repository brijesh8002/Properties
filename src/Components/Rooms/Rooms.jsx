import React from 'react'
import "./Rooms.css"
import Card from '../Card/Card'
import r1 from "../../assets/room.jpg"
import r2 from "../../assets/room1.jpg"
import r3 from "../../assets/room2.jpg"
import rh1 from "../../assets/roomhouse.avif"
import rh2 from "../../assets/roomhouse2.avif"
import rh3 from "../../assets/roomhouse3.avif"
import rc1 from "../../assets/roomnew.avif"
import rc2 from "../../assets/roomnew2.avif"
import rc3 from "../../assets/roomnew1.avif"

const Rooms = () => {
  return (<>
    <h3 className='title-cat'>Rooms</h3>
    <div className='rooms'>
      <Card img1={r1} img2={r2} img3={r3} title={"2BHK in Delhi"} price={"20,081"}/>
      <Card img1={rh1} img2={rh2} img3={rh3} title={"4BHK in Gurgaon"} price={"35,099"}/>
      <Card img1={rc1} img2={rc2} img3={rc3} title={"3BHK in Chennai"} price={"25,999"}/>
    </div>
    </>
  )
}

export default Rooms