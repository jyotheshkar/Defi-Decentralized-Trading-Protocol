
import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border border-[#FFDA89] text-left rounded-2xl py-12 px-8'>
    <div>
      <div className='bg-[#FFDA89] inline-flex p-2 rounded-full text-black '>
        {props.icon}
      </div>
      <h3 className='text-xl font-bold py-4 text-[#C0C0C0] '>{props.heading}</h3>
      <p className='text-[#C0C0C0]' >
        {props.text}
      </p>
    </div>
  </div>
  )
}

export default AboutCard