import React from 'react';
import bitcoin from '../assets/bitcoin.jpg';

const Developers = () => {
  return (

    <div>

    <div className='bg-black  text-center' >

<h1 className='text-[#FFDA89] py-4 ' > Superpowers for DEFI developers. </h1>
<p className='text-[#C0C0C0]' >  Checkout the <span className="text-[#FFDA89]">documentation</span>, the <span className="text-[#FFDA89]">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.</p>
        

</div>
<div className='bg-black ' >
          <img  className=' w-full flex justify-center'   src={bitcoin} alt="" /> 
          </div>
    </div>


  )
}

export default Developers;