import Images from "../images/Images"
const Hero = () => {
  return (
    <main>
      <div className="mt-12  flex flex-col md:flex-row relative text-left items-center justify-center ">
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
            <button className="bg-clrPrimaryRed text-black border py-2 px-6 rounded-xl">
              Explore Now
            </button>
            <button className="bg-transparent border py-2 px-6 rounded-xl">
              Learn More &gt;
            </button>
          </div>
        </div>
        <div className="md:ml-auto">
          <img
            className="flex flex-col max-w-sm mt-6 border-2 p-4 rounded-tr-xl rounded-tl-3xl rounded-br-3xl rounded-bl-xl border-clrPrimaryRed "
            src="../src/images/meta1.png"
            alt=""
          />
        </div>
      </div>
      <p className="text-center mt-12 text-2xl font-bold w-1/2 mx-auto">
        Let's explore your own{" "}
        <span className="text-clrPrimaryRed">metaverse</span> world.{" "}
      </p>
    </main>
  )
}

export default Hero
