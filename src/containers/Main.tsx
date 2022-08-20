import React from "react";
import {
  BsFillCreditCard2BackFill,
  BsFillImageFill,
  BsBagFill,
  BsBadgeVrFill,
  BsChatRightTextFill,
  BsJoystick,
  BsKeyFill,
  BsShieldFillCheck,
} from "react-icons/bs";

function Main() {
  const RenderCard = (props: any) => {
    const [cardIcon, cardText] = props;
    return (
      <>
        {" "}
        <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
          <div className="bg-clrPrimaryRed w-16 h-16 rounded text-black items-center flex justify-center">
            {cardIcon}
          </div>
          <p className="text-sm mt-2">{cardText}</p>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="mt-28 relative grid md:grid-cols-4 grid-rows-4 md:grid-rows-2 items-center justify-center bg-gray-900 h-[30rem] relative ">
        <RenderCard
          cardIcon={
            <BsFillCreditCard2BackFill className="text-3xl rounded  " />
          }
          cardText={"Payment"}
        />
        <p className="text-sm mt-2">Payment</p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsFillImageFill className="text-3xl rounded  " />
        <p className="text-sm mt-2">NFT</p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsBagFill className="text-3xl rounded  " />
        <p className="text-s  m mt-2">Shopping</p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsBadgeVrFill className="text-3xl rounded  " />
        <p className="text-sm mt-2">3D Reality</p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsChatRightTextFill className="text-3xl rounded  " />
        <p className="text-sm mt-2">Messaging</p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsJoystick className="text-3xl rounded  " />
        <p
          className="text-s
  m mt-2"
        >
          Gaming
        </p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsKeyFill className="text-3xl rounded  " />
        <p
          className="text-sm
   mt-2"
        >
          Security
        </p>
      </div>
      <div className=" hover:bg-clrPrimaryRed text-center  hover:h-full relative hover:-top-20 items-center flex flex-col justify-center m-8 rounded-2xl hover:text-black text-white">
        <BsShieldFillCheck className="text-3xl rounded  " />
        <p className="text-sm mt-2">Privacy</p>
      </div>
      Main
    </>
  );
}

export default Main;
