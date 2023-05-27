import { Outlet } from "react-router-dom"
import Home from "../components/Pages/Home"
import Navbar from "../components/Share/Navbar"

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className="pt-24 pb-16">
        <Outlet/>
        </div>
        
    </div>
  )
}

export default Main
