import React, { useState } from 'react';
import '../Styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ArticleIcon from '@mui/icons-material/Article';
import { TextField,IconButton,InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function Navbar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='nav-main-container'>
     <ul className='nav-logo'>
      <div>
     <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon  onClick={showSidebar} style={{fontSize:'xx-large',color:'grey'}} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <h3>Google Apps</h3>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </div>
        <li><ArticleIcon style={{color:"blue",fontSize:'xx-large'}}/></li>
        <li style={{color:'grey',fontSize:'x-large'}}>Docs</li>
     </ul>
     <ul className='nav-input'>
     <TextField style={{width: '100%',size:'xx-small'}}
      rows={1}
  label="Search"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon/>
        </IconButton>
      </InputAdornment>
    )
  }}
/>
     </ul>
     <ul className='nav-end'>
        <li><AppsIcon style={{fontSize:'xx-large'}}/></li>
        <li>  <Stack direction="row" >
      <Avatar>AL</Avatar>
    </Stack></li>
     </ul>
    </div>
  )
}

export default Navbar
