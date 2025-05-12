import React from 'react'
import "./Houses.css"
import Card from '../Card/Card'
import h1 from "../../assets/house.jpg"
import h2 from "../../assets/housekichen.jpg"
import h3 from "../../assets/houseliving.jpg"
import vl1 from "../../assets/villa.jpg"
import vl2 from "../../assets/villa1.jpg"
import vl3 from "../../assets/villa3.jpg"
// import h4 from "../../assets/houseroom.jpg"


const Houses = () => {
  return (<>
  <h3 className='title-cat'>Houses</h3>
    <div className='houses'>
      {/* <Card img1={h4} img2={h3} img3={h2}  title={"2BHK in Jhansi"} price={"20,000"}/> */}
      <Card img1={vl3} img2={vl2} img3={vl1}  title={"House in Banglore"} price={"29,088"}/>
      <Card img1={h1} img2={h3} img3={h2}  title={"Furished House in Hyderabad"} price={"20,000"}/>
      
    </div>
    </>
  )
}

export default Houses