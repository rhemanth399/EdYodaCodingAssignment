import React from 'react'
import './style.css'


import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Header() {
  return (
    <div className='header'>
        <img src='assest/LOGO.png' alt='logo' className='companyname'/>
      <div className='coursesprograms'>
        
        <p>Courses </p><KeyboardArrowDownIcon/>
        <p>Programs </p>
        <KeyboardArrowDownIcon/>

      </div>
      <div className='search'>
      <input type='text'/>
      <SearchRoundedIcon/>
      </div>
      <div className='loginjoinnow'>
        <a href="login">Log in</a>
        <button type='submit'>JOIN NOW</button>

      </div>
    </div>
  )
}

export default Header
