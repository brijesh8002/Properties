import React, { useContext } from 'react'
import "./Listing.css"
// import { MdOutlineLogin } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { dataContext } from '../../Context/Usercontext';

const Listing = () => {

   let {
    title, settitle,
    addListing, setaddListing,
    addImage1, setaddImage1,
    addImage2, setaddImage2,
    addImage3, setaddImage3,
    price, setPrice
} = useContext(dataContext)

  return (
    <div id="Listing" onSubmit={(e)=>{
        e.preventDefault()
        alert("Add Listing Successfully.....")
        setaddListing(true)
    }}>
      <form action="">
        <span id="title">Listing Your Home</span>
        <div className="list">
          <label htmlFor="title">Title</label>
          <input type="text" required id="htitle" onChange={(e)=>{
            settitle(e.target.value)
          }} value={title}/>
        </div>
        <div className="list">
          <label htmlFor="des">Description</label>
          <textarea name="des" id="des"></textarea>
        </div>
        
        <div className="list">
          <label htmlFor="img1">Image1</label>
          <input type="file" required id="img1" onChange={(e)=>{
            setaddImage1(e.target.files[0])
          }}/>
        </div>
        <div className="list">
          <label htmlFor="img2">Image2</label>
          <input type="file" required id="img2" onChange={(e)=>{
            setaddImage2(e.target.files[0])
          }}/>
        </div>
        <div className="list">
          <label htmlFor="img3">Image3</label>
          <input type="file" required id="img3" onChange={(e)=>{
            setaddImage3(e.target.files[0])
          }}/>
        </div>
        <div className="list">
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" onChange={(e)=>{
            setPrice(e.target.value)
          }} value={price} />
        </div>
        <div className="list">
          <label htmlFor="loc">Location</label>
          <input type="text"  id="loc" />
        </div>
        <button className="loginbtn2">Add<IoIosAddCircle /></button>
      </form>
    </div>
  )
}

export default Listing