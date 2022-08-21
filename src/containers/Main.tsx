import React from "react"
import {
  BsFillCreditCard2BackFill,
  BsFillImageFill,
  BsBagFill,
  BsBadgeVrFill,
  BsChatRightTextFill,
  BsJoystick,
  BsKeyFill,
  BsShieldFillCheck,
} from "react-icons/bs"

function Main() {
  const RenderCard = (props: any) => {
    const { cardIcon, cardText } = props
    return (
      <>
        {" "}
        <div className="text-center relative items-center flex flex-col justify-center m-8 hover:-top-10 hover:bg-clrPrimaryRed  hover:h-full rounded-2xl hover:first::hidden ">
          <span className="text-2xl w-16 h-16 rounded-lg  items-center flex justify-center first bg-clrBackgroundPrimary text-clrPrimaryRed border-t-4 border-l-2 border-r-2 border-clrPrimaryRed/20">
            {cardIcon}
          </span>
          <p className="text-sm mt-4 font-bold last text-white">{cardText}</p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="h-full mt-28 rounded-2xl border-clrPrimaryRed/20 border-l-2 border-t-4 border-b border-r-2 grid md:grid-cols-4 grid-cols-2 md:grid-rows-2 items-center justify-center bg-gray-900/5 md:h-[30rem] relative">
        <RenderCard
          cardIcon={<BsFillCreditCard2BackFill />}
          cardText={"Payment"}
        />

        <RenderCard cardIcon={<BsFillImageFill />} cardText={"NFTs"} />
        <RenderCard cardIcon={<BsBagFill />} cardText={"Shopping"} />
        <RenderCard cardIcon={<BsBadgeVrFill />} cardText={"Imersion"} />
        <RenderCard cardIcon={<BsChatRightTextFill />} cardText={"Messaging"} />
        <RenderCard cardIcon={<BsJoystick />} cardText={"Games"} />
        <RenderCard cardIcon={<BsKeyFill />} cardText={"Security"} />
        <RenderCard cardIcon={<BsShieldFillCheck />} cardText={"Privacy"} />
      </div>
    </>
  )
}

export default Main
