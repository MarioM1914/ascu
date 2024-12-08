import React from "react";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="max-w-full h-screen mt-3">
          <img
            src={props.heroImg}
            alt="HeroImg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 top-0 flex justify-center items-start pt-20">
          <p className="font-replyRegular text-white text-center text-md sm:text-xl md:text-2xl mx-12 uppercase font-bold">
            {props.name}
          </p>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-40">
          <h1 className="font-boogyBrutRegular text-white text-center font-bold uppercase text-2xl sm:text-3xl md:text-5xl pb-2 mb-8">
            {props.title}
          </h1>
          <p className="font-replyRegular text-white text-center text-sm sm:text-lg md:text-2xl mx-12 mt-4">
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
