import React from 'react'
import "./Forest.css"
import Card from '../Card/Card'
import fa4 from "../../assets/mountain.avif"
import fa5 from "../../assets/mountain1.avif"
import fa6 from "../../assets/mountain2.avif"
import fa7 from "../../assets/mountain3.avif"
import fa8 from "../../assets/old.avif"
import fa9 from "../../assets/old1.avif"
import fa10 from "../../assets/old2.avif"
import fa11 from "../../assets/old3.avif"

import ga1 from "../../assets/village1.avif"
import ga2 from "../../assets/village2.avif"
import ga3 from "../../assets/village3.avif"

const Forest = () => {
  return (<>
  <h3 className='title-cat'>Forest Houses</h3>
    <div className='houses'>
      <Card img1={fa7} img2={fa4} img3={fa5} title={"Hills Farm in Indore"} price={"67,099"}/>
      <Card img1={ga1} img2={ga2} img3={ga3}  title={"Furished House in Village"} price={"20,001"}/>
      <Card img1={fa8} img2={fa9} img3={fa10} title={"Hills Farm in chattisgarh"} price={"90,099"}/>
    </div>
    </>
  )
}

export default Forest