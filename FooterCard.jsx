import React from 'react'

const FooterCard = (props) => {
  return (
      <div className='bg-black  underline-offset-8 ' >
    <div className=' text-[#FFDA89] py-4 font-semibold' > {props.heading} </div>
    <div className='text-[#FFDA89]'   > {props.items1}  </div>
    <div className='text-[#FFDA89]'   > {props.items2} </div>
    <div className='text-[#FFDA89]'   > {props.items3} </div>
    <div className='text-[#FFDA89]'   > {props.items4} </div>
    <div className='text-[#FFDA89]'   > {props.items5} </div>
<ul>
    <li className='text-[#FFDA89] font-medium   ' >Analytics</li>
    <li className='text-[#FFDA89] font-medium  ' >Tokelist</li>
    <li className='text-[#FFDA89] font-medium  ' >Defi</li>
  
</ul>
      </div>
  )
}
export default  FooterCard