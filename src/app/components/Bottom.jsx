import { Footer } from 'flowbite-react'
import React from 'react'

const Bottom = () => {
  return (
    <Footer container className='bg-gradient-to-l from-fuchsia-900 to-fuchsia-950'>
      <div className="w-full text-center">
        <Footer.Copyright className='text-white' href="/" by="QuickCook" year={2024} />
      </div>
    </Footer>
  )
}

export default Bottom