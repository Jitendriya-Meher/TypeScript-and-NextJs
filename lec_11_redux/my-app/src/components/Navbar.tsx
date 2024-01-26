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
        <Link href={"/profile"}>
            <button>
                Profile
            </button>
        </Link>
    </div>
  )
}

export default Navbar