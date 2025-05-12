import React from 'react'
import "./Tent.css"
import Card from '../Card/Card'
import hu1 from "../../assets/hut1.avif"
import hu2 from "../../assets/hut2.avif"
import hu3 from "../../assets/hut3.avif"
import hu4 from "../../assets/huthouse.jpg"
import hu5 from "../../assets/huthouse1.jpg"
import hu6 from "../../assets/huthouse2.jpg"

const Tent = () => {
  return (<>
  <h3 className='title-cat'>Tent Houses</h3>
    <div className='houses'>
      <Card img1={hu3} img2={hu2} img3={hu1}  title={"Hut House in Asam"} price={"40,069"}/>
      <Card img1={hu4} img2={hu5} img3={hu6}  title={"Hut House in Manipur"} price={"42,088"}/>
    </div>
    </>
  )
}

export default Tent