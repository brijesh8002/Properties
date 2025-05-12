import React, { useContext } from 'react'
import "./Shop.css"
import Card from '../Card/Card'
import { dataContext } from '../../Context/Usercontext'
// import va from "../../assets/iso-certification.png"
// import va1 from "../../assets/logo.png"
// import va2 from "../../assets/user-img.jpg"

const Shop = () => {

   let {
        title, settitle,
        addListing, setaddListing,
        addImage1, setaddImage1,
        addImage2, setaddImage2,
        addImage3, setaddImage3,
        price, setPrice
    } = useContext(dataContext)
  return (<>
  <h3 className='title-cat'>Shop</h3>
    <div className='houses'>
       {addListing?<Card img1={URL.createObjectURL(addImage1)} img2={URL.createObjectURL(addImage2)} img3={URL.createObjectURL(addImage3)} title={title} price={price}/>:<><h1>Not Listed Yet</h1></>}
      
    </div>
    </>
  )
}

export default Shop