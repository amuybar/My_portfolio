import React, { useState, useRef, useEffect} from 'react';
import { FaBars,} from 'react-icons/fa';
import { alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import { pink } from '@mui/material/colors';
import '../styles/Header.css'

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

function Header({ toggleTheme }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();


  // Function to toggle menu visibility
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // Function to close menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
          
      <div className="header-content">
        {/* Display name and theme toggle button */}
        <div className="header-left">
          <span className="name">Barrack Amuyunzu</span>
          <div className='switch'> <PinkSwitch {...label} onClick={toggleTheme}/></div>
        </div>
        
        {/* Display navigation buttons or menu icon */}
        <div className="header-right">
          {/* For small screens: Display menu icon */}
          <FaBars className="menu-icon" onClick={toggleMenu} />
          {/* For larger screens: Display navigation buttons */}
          <nav ref={menuRef} className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
