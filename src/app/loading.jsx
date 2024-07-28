import { Spinner } from 'flowbite-react'
import React from 'react'

const loading = () => {
  return (
    <div className="text-center ">
        <Spinner aria-label="Extra large spinner example" className='my-52' size="xl" />
    </div>
  )
}

export default loading