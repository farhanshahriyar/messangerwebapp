import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user from here'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13570394/pexels-photo-13570394.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Farhana</span>
        </div>
      </div>    
    </div>
  )
}

export default Search
