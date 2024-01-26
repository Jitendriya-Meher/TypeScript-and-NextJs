"use client";

import React, { useEffect } from 'react'

import { usePathname } from 'next/navigation'
import path from 'path';

const Footer = () => {

    const pathname = usePathname();

    useEffect( () => {
        console.log(pathname);
    },[pathname]);

  return (
    <div>
        <h1>
            Footer
        </h1>
        <p>
            you are at path = {pathname}
        </p>
    </div>
  )
}

export default Footer