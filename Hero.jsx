import React from 'react'
import heroVid from '../assets/video.mp4'
const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px] flex flex-col justify-center items-center '  >
<video className=' object-cover h-full w-full absolute -z-10'
 src={heroVid} autoPlay loop muted />
  <div className='flex flex-col items-center '  >
<h1  className='text-[#C0C0C0] py-1 font-extrabold text-4xl '> Decentralized  </h1>
<h1 className='text-[#C0C0C0] py-2 font-extrabold text-4xl '  >  <span className=' text-[#FFDA89] ' >  Trading </span>  Protocol  </h1>
<p  className=' text-center py-4 text-[#C0C0C0]  text-xl font-bold  '  > Guarenteed liquidity trading protocol for millions of users and top Ethereum applications  </p>
  </div>
<div>
  <button className='m-2' > Use Defi </button>
  <button className='m-2 bg-transperent '> FAQ</button>
</div>
<div className=' pt-40' >
        <p className='text-center text-[#C0C0C0] text-2xl font-bold'>Total Volume Secured: $42,104,783,662.47</p>
      </div>
    </div>
  )
}

export default Hero