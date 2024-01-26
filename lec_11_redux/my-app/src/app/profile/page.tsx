"use client";

import { useAppSelector } from '@/redux/store';
import React from 'react'

const page = () => {

    const valueObj = useAppSelector((state) => state.valueReducer);

  return (
    <div>
        <h1>
            this is profile page
        </h1>
        <h1>
            a = {valueObj.value}
        </h1>
    </div>
  )
}

export default page