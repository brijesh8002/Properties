import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Houses from './Components/Houses/Houses.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import Farm from './Components/Farm/Farm.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Forest from './Components/Forest/Forest.jsx'
import Cabin from './Components/Cabin/Cabin.jsx'
import Tent from './Components/Tent/Tent.jsx'
import Pool from './Components/Pool/Pool.jsx'
import Listing from './Components/Listing/Listing.jsx'
import Usercontext from './Context/Usercontext.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='' element={<Home />} />
    <Route path='Login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='Houses' element={<Houses />} />
    <Route path='Rooms' element={<Rooms />} />
    <Route path='Farm' element={<Farm />} />
    <Route path='Tent' element={<Tent />} />
    <Route path='Forest' element={<Forest />} />
    <Route path='Shop' element={<Shop />} />
    <Route path='Cabin' element={<Cabin />} />
    <Route path='Pool' element={<Pool />} />
    <Route path='Listing' element={<Listing />} />
    <Route path='Contact' element={<Contact />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Usercontext>
      <RouterProvider router={router} />
    </Usercontext>
  </StrictMode>,
)
