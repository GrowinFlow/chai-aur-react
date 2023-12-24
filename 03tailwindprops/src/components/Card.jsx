import React from "react";
import Img from "../assets/logo.png";

function Card({ userName = "Product", btnText = "Explore now" }) {
  return (
    <>
      <div class="relative h-[400px] w-[300px] rounded-md mt-6 shadow-sm shadow-slate-100">
        <img
          src={Img}
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{userName}</h1>

          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
