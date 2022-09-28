import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className='fromContainer'>
        <div className='fromWrapper'>
            <span className='logo'>BlDonor Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='enter your email here'/>
                <input type="password" placeholder='enter your password here'/>
                <button>Login</button>
            </form>
            <p>Dont have account? Register Here</p>
        </div>
    </div>
  )
}

export default Login