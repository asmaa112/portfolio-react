import React from 'react'

export default function Navbar(props) {
//   const verf = (e)=>{
//  e.target.classList.add('hov');
//   }
  return (
    <div>
      <nav className='navbar'>
      <h2>{props.logo}</h2>
      <ul className='Navbar-list'>
        <a href='#Header' ><li className='Navbar-list-elements'>{props.list1}</li></a>
        <a href='#About-Section'><li className='Navbar-list-elements'>{props.list2}</li></a>
        <a href='#Projects-Section'><li className='Navbar-list-elements'>{props.list3}</li></a>
        <a href='#section-cv'><li className='Navbar-list-elements'>{props.list4}</li></a>
        <a href='#Contact-Section'><li className='Navbar-list-elements'>{props.list5}</li></a>
      </ul>
    </nav>
    </div>
  )
}
