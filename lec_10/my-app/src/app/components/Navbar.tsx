import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href={"/"}>
            <button>
                Home
            </button>
        </Link>
        <Link href={"/contact"}>
            <button>
                Contact
            </button>
        </Link>
        <Link href={"/about"}>
            <button>
                About
            </button>
        </Link>
        <Link href={"/auth/login"}>
            <button>
                Login
            </button>
        </Link>
        <Link href={"/auth/signin"}>
            <button>
                Signin
            </button>
        </Link>
        <Link href={"/products"}>
            <button>
                Products
            </button>
        </Link>

    </div>
  )
}

export default Navbar