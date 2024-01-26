import React from 'react'
import styles from "@/styles/products.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <h1>
            This is products Page
        </h1>
        <Link href={'/products/product1'} className={styles.productscard}>
            <h2>
                Product 1
            </h2>
            <p>
                This is product 1
            </p>
        </Link>
        <Link href={'/products/product2'} className={styles.productscard}>
            <h2>
                Product 2
            </h2>
            <p>
                This is product 2
            </p>
        </Link>
        <Link href={'/products/product3'} className={styles.productscard}>
            <h2>
                Product 3
            </h2>
            <p>
                This is product 3
            </p>
        </Link>
    </div>
  )
}

export default page