import Images from "../images/Images"
import {BsPlayCircle} from "react-icons/bs"
const Hero = () => {
  return (
    <main>
      <div className="mt-40  flex flex-col md:flex-row relative text-left items-center justify-center gap-x-4 ">
        <div className="flex flex-col max-w-sm md:max-w-lg items-left ">
          <h1 className="text-4xl font-extrabold">
            Let's explore your own{" "}
            <span className="text-clrPrimaryRed">metaverse</span> world.
          </h1>
          <p className="mt-6 font-light text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Architecto, veritatis maxime nesciunt nostrum voluptas doloremque
            obcaecati odio magni. Vel ex minima omnis voluptas commodi est,
            ducimus repellendus doloribus numquam iure!
          </p>
          <div className="flex flex-row items-center mt-6 space-x-6 w-full">
            <button className="bg-clrPrimaryRed text-black border py-2 px-6 rounded-xl font-semibold">              Explore Now
            </button>
            <button className="bg-transparent border py-2 px-6 rounded-xl flex items-center gap-2">
              <BsPlayCircle className="text-2xl"/> Learn More 
            </button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:ml-auto border-2 border-clrPrimaryRed rounded-bl-lg rounded-tr-lg rounded-br-3xl rounded-tl-3xl relative">

    <img
            className="flex flex-col max-w-sm relative -top-5 -left-5"
            src="../src/images/meta1.png"
            alt=""
          />

      
        </div>
      </div>
      <p className="text-center mt-24 text-4xl font-black w-1/2 mx-auto">
        Let's explore your own{" "}
        <span className="text-clrPrimaryRed">metaverse</span> world.{" "}
      </p>
    </main>
  )
}

export default Hero
