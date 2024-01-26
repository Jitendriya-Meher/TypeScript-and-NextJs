import React from 'react'

type PageProps ={
    params:any;
}

const page = ({params}:PageProps) => {
  return (
    <div>
        <h1>
            id = {params.product}
        </h1>
    </div>
  )
}

export default page