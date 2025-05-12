import React, { useContext } from 'react'
import "./Home.css"

import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'

import r1 from "../../assets/room.jpg"
import r2 from "../../assets/room1.jpg"
import r3 from "../../assets/room2.jpg"
import rh1 from "../../assets/roomhouse.avif"
import rh2 from "../../assets/roomhouse2.avif"
import rh3 from "../../assets/roomhouse3.avif"
import rc1 from "../../assets/roomnew.avif"
import rc2 from "../../assets/roomnew2.avif"
import rc3 from "../../assets/roomnew1.avif"

import pa1 from "../../assets/poolhouse.jpg"
import pa2 from "../../assets/poolhouse2.jpg"
import pa3 from "../../assets/air1.avif"
import pa4 from "../../assets/air2.avif"
import pa5 from "../../assets/air3.avif"
import ga1 from "../../assets/village1.avif"
import ga2 from "../../assets/village2.avif"
import ga3 from "../../assets/village3.avif"

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

import h1 from "../../assets/house.jpg"
import h2 from "../../assets/housekichen.jpg"
import h3 from "../../assets/houseliving.jpg"
import vl1 from "../../assets/villa.jpg"
import vl2 from "../../assets/villa1.jpg"
import vl3 from "../../assets/villa3.jpg"


import hu1 from "../../assets/hut1.avif"
import hu2 from "../../assets/hut2.avif"
import hu3 from "../../assets/hut3.avif"
import hu4 from "../../assets/huthouse.jpg"
import hu5 from "../../assets/huthouse1.jpg"
import hu6 from "../../assets/huthouse2.jpg"

import sk1 from "../../assets/ski.avif"
import sk2 from "../../assets/ski1.avif"
import sk3 from "../../assets/ski2.avif"







const Home = () => {

  let {
      title, settitle,
      addListing, setaddListing,
      addImage1, setaddImage1,
      addImage2, setaddImage2,
      addImage3, setaddImage3,
      price, setPrice
  } = useContext(dataContext)
  return (
    <div className='home'>
  
      <Card img1={r1} img2={r2} img3={r3} title={"2BHK in Delhi"} price={"20,081"}/>
      <Card img1={rh1} img2={rh2} img3={rh3} title={"4BHK in Gurgaon"} price={"35,099"}/>
      <Card img1={rc1} img2={rc2} img3={rc3} title={"3BHK in Chennai"} price={"25,999"}/>

      <Card img1={pa1} img2={pa3} img3={pa2} title={"Pool House in Maharashtra"} price={"20,099"}/>
      <Card img1={pa3} img2={pa2} img3={pa4} title={"Pool House in Gujrat"} price={"30,099"}/>
      <Card img1={pa5} img2={pa3} img3={pa1} title={"Pool House in Kolkata"} price={"40,099"}/>
      <Card img1={ga1} img2={ga2} img3={ga3}  title={"Furished House in Village"} price={"20,001"}/>

      <Card img1={fa3} img2={fa2} img3={fa1} title={"Farm House in Pratapgarh"} price={"60,099"}/>
      <Card img1={fa7} img2={fa4} img3={fa6} title={"Hills Farm in Indore"} price={"67,099"}/>
      <Card img1={fa8} img2={fa9} img3={fa10} title={"Hills Farm in chattisgarh"} price={"90,099"}/>

      

      <Card img1={hu3} img2={hu2} img3={hu1}  title={"Hut House in Asam"} price={"40,069"}/>
      <Card img1={hu4} img2={hu5} img3={hu6}  title={"Hut House in Manipur"} price={"42,088"}/>

      <Card img1={sk1} img2={sk2} img3={sk3}  title={"Resort in Kashmir"} price={"20,088"}/>

      <Card img1={vl3} img2={vl2} img3={vl1}  title={"House in Banglore"} price={"29,088"}/>
      <Card img1={h1} img2={h3} img3={h2}  title={"Furished House in Hyderabad"} price={"20,000"}/>

      

      {addListing?<Card img1={URL.createObjectURL(addImage1)} img2={URL.createObjectURL(addImage2)} img3={URL.createObjectURL(addImage3)} title={title} price={price}/>:""}
      

    </div>
  )
}

export default Home