import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-black pb-20 text-center py-3 ' >
           <h1 className='text-[#FFDA89] py-3 ' > Join Our Defi Community  </h1>
            <div className='py-4  pr-3' >
                <input className='mx-6 rounded-2xl p-2 bg-[#C0C0C0] 
                border-[#FFDA89] border-4  '
                 type="email" name="email" id='email'
                   placeholder='enter your gmail' />
                <button  >Signup </button>
            </div>
            <h3 className='text-[#FFDA89]' > <input type="checkbox" 
            className='bg-[#FFDA89]'  /> yes,
         i accept the Defi community guidelines    </h3>
              
    </div>
  )
}

export default Subscribe