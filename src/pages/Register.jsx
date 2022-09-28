import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='fromContainer'>
        <div className='fromWrapper'>
            <span className='logo'>BlDonor Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='put your username'/>
                <input type="email" placeholder='put your email'/>
                <input type="password" placeholder='put your password'/>
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor='file'>
                  <img src={Add} alt="" />
                  <span>Add Image Here</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have account? Login Here</p>
        </div>
    </div>
  )
}

export default Register