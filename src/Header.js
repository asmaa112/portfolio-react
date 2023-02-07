import React from 'react'
import Navbar from './Navbar'
import avatar from  './avatar.jpg'
export default function Header() {
  return (
   
      <header id='Header'>
    <Navbar logo='Asmaa Larche' list1='Home' list2='About' list3='My Projects' list4='CV'list5='Contact' />
    <div className='Avatar-box'>
      <img src={avatar} alt='logo'/>
  
    </div>
    <div className="logo">
            <h1>ASMAA</h1>
            <h1>ASMAA</h1>

        </div>
    
   </header>
   
    
  )
}
