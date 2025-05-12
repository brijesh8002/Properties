import React from 'react'
import "./Pool.css"
import Card from '../Card/Card'
import pa1 from "../../assets/poolhouse.jpg"
import pa2 from "../../assets/poolhouse2.jpg"
import pa3 from "../../assets/air1.avif"
import pa4 from "../../assets/air2.avif"
import pa5 from "../../assets/air3.avif"
import ga1 from "../../assets/village1.avif"
import ga2 from "../../assets/village2.avif"
import ga3 from "../../assets/village3.avif"

const Pool = () => {
  return (<>
  <h3 className='title-cat'>Pool Houses</h3>
    <div className='houses'>
      <Card img1={pa1} img2={pa3} img3={pa2} title={"Pool House in Maharashtra"} price={"20,099"}/>
      <Card img1={pa3} img2={pa2} img3={pa4} title={"Pool House in Gujrat"} price={"30,099"}/>
      <Card img1={ga1} img2={ga2} img3={ga3}  title={"Furished House in Village"} price={"20,001"}/>
      <Card img1={pa5} img2={pa3} img3={pa1} title={"Pool House in Kolkata"} price={"40,099"}/>
    </div>
    </>
  )
}

export default Pool