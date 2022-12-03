import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
class Nav extends Component {
  render() {
    return (
      <nav className='navtop'>
        <h2>Namoosori</h2>
        <ul className='nav-links'>
          {/* 새로고침이되지않고 컴포넌트만 변경할수있도록 Link 컴포넌트사용 */}
          <li><NavLink exact to='/'>Main</NavLink></li>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='lessons'>Lessons</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;