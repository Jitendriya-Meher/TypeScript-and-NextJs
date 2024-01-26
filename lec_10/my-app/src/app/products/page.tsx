"use client";

import Link from 'next/link'
import React from 'react'

import { useRouter } from 'next/navigation';


const page = () => {

    const router = useRouter();

    const gotoPath = ( path : string ) => {
        router.push(path);
    }

  return (
    <div>
        <Link href={"/products/product1"}>
            <p>product 1</p>
        </Link>
        <Link href={"/products/product2"}>
            <p>product 2</p>
        </Link>
        <Link href={"/products/product3"}>
            <p>product 3</p>
        </Link>
        <Link href={"/products/product4"}>
            <p>product 4</p>
        </Link>

        <div className="">
            <button onClick={ () => gotoPath("/")}>
                Go To Home
            </button>
        </div>
    </div>
  )
}

export default page