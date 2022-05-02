import React from 'react'
import FooterCard from './FooterCard'


const Footer = () => {
  return (
    <div className='grid grid-cols-5 text-center ' >
< FooterCard heading='Products' items1='App' item1='Analytics' />
< FooterCard heading='Developers' items2='App'  />
< FooterCard heading='Community' items3='App'  />
< FooterCard heading='Governance' items4='App'  />
< FooterCard heading='About' items5='App'  />


    </div>
  )
}

export default Footer