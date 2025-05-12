import React from 'react'
import "./Farm.css"
import Card from '../Card/Card'
import fa1 from "../../assets/farmhouse.jpg"
import fa2 from "../../assets/farmhouse1.jpg"
import fa3 from "../../assets/farmhouse2.jpg"
import fa4 from "../../assets/mountain.avif"
import fa5 from "../../assets/mountain1.avif"
import fa6 from "../../assets/mountain2.avif"
import fa7 from "../../assets/mountain3.avif"
import fa8 from "../../assets/old.avif"
import fa9 from "../../assets/old1.avif"
import fa10 from "../../assets/old2.avif"
import fa11 from "../../assets/old3.avif"

const Farm = () => {
  return (<>
  <h3 className='title-cat'>Farm Houses</h3>
    <div className='farm'>
         <Card img1={fa3} img2={fa2} img3={fa1} title={"Farm House in Pratapgarh"} price={"60,099"}/>
      <Card img1={fa7} img2={fa4} img3={fa6} title={"Hills Farm in Indore"} price={"67,099"}/>
      <Card img1={fa8} img2={fa9} img3={fa10} title={"Hills Farm in chattisgarh"} price={"90,099"}/>
    </div>
    </>
  )
}

export default Farm