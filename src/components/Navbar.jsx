import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">Messanger</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/12930643/pexels-photo-12930643.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>Abir</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar