import React from 'react'
import "./Trending.css"
import Card from '../Card/Card'
import va from "../../assets/iso-certification.png"
import va1 from "../../assets/logo.png"
import va2 from "../../assets/user-img.jpg"

const Trending = () => {
  return (<>
  <h3 className='title-cat'>Trendings</h3>
    <div className='houses'>
      <Card img1={va} img2={va1} img3={va2} title={"2BHK in Jhansi"} price={"20,000"}/>
      <Card img1={va} img2={va1} img3={va2} title={"2BHK in Jhansi"} price={"20,000"}/>
      <Card img1={va} img2={va1} img3={va2} title={"2BHK in Jhansi"} price={"20,000"}/>
      <Card img1={va} img2={va1} img3={va2} title={"2BHK in Jhansi"} price={"20,000"}/>
    </div>
    </>
  )
}

export default Trending