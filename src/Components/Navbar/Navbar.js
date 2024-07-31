import React from 'react';
import './Navbar.css';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import filmpire_logo from '../../assets/filmpire.png';
import caret_icon from '../../assets/caret_icon.svg';
import human_icon from '../../assets/human_icon.svg'; // New icon

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={filmpire_logo} alt="Filmpire Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={human_icon} alt="Human Icon" className='icons' />
          <img src={caret_icon} alt="Caret Icon" className='icons' />
          <div className="profile-dropdown">
            <p>Settings</p>
            <p>Logout</p>
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
