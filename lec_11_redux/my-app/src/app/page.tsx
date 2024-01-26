"use client";

import { decrement, increment, incrementByAmount } from "@/redux/features/valueSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function Home() {

  let a = 10;

  const dispatch = useDispatch<AppDispatch>();

  const valueObj = useAppSelector((state) => state.valueReducer);

  console.log(valueObj);

  return (
   
   <div className="">

    <h1>
      this is home page
    </h1>
    <h1 className=" text-5xl text-center text-cyan-700 italic py-5">
      a = {valueObj.value}
    </h1>

    <div className=" flex gap-6 justify-center items-center">
      <button onClick={ () => {
        dispatch( increment())
      }}
      className="button">
        Increment
      </button>

      <button onClick={ () => {
        dispatch(decrement())
      }}
      className="button">
        Decrement
      </button>

      <button onClick={() => {
        dispatch( incrementByAmount(10))
      }}
      className="button">
        Increment By 10
      </button>

      <button onClick={() => {
        dispatch( incrementByAmount(20))
      }}
      className="button">
        Increment By 20
      </button>

    </div>
   </div>
  );
}
