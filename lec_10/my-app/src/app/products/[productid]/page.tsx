import React from 'react'

type Props = {
    params:{
        productid: string;
    }
}

const page = ({params}:Props) => {
  return (
    <h2>
        this is single {params.productid} page 
    </h2>
  )
}

export default page