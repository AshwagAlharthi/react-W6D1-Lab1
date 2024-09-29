import Navbar from "../components/Navbar"

function About() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-start gap-6 w-[60vw] bg-gray-300 p-10  text-black rounded-xl">
          <h1 className="text-6xl pb-5 font-bold max-sm:text-3xl">JavaScript BootCamp</h1>
          <p className="text-sm w-full font-bold text-cyan-800">Description:</p>
          <p className="text-lg">The bootcamp aims to acquire the knowledge and skills necessary to build and design websites using the JavaScript language and frameworks such as React and Express. It also covers a comprehensive set of the latest technical topics that contribute to building advanced applications and websites that facilitate your entry into the field of work and facilitate user experience technology.</p>
          <p className="text-sm w-full font-bold text-cyan-800">Duration:</p>
          <p className="text-lg">10 Weeks</p>
        </div>
      </div>
    </div>
  )
}

export default About