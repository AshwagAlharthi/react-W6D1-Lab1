import { Link } from "react-router-dom"
import About from "./About"
import Register from "./Register"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="bg-white w-[70%] h-screen flex justify-between items-center max-sm:flex-col max-sm:justify-center max-sm:gap-5">
          <button className="btn w-80 h-60 text-lg bg-cyan-800 text-white hover:bg-cyan-700"><Link to='/about'>JS BootCamp</Link></button>
          <button className="btn w-80 h-60 text-lg bg-cyan-800 text-white hover:bg-cyan-700"><Link to='/register'>Join with us</Link></button>
        </div >
      </div>

    </>
  )
}

export default Home