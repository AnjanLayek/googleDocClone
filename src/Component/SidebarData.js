import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TaskIcon from '@mui/icons-material/Task';

export const SidebarData = [
  {
    title: 'Google',
    path: '/google',
    icon: <GoogleIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Gmail',
    path: '/google',
    icon: <EmailIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Sheets',
    path: '/google',
    icon: <TaskIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Slides',
    path: '/google',
    icon: <SlideshowIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Docs',
    path: '/google',
    icon: <ArticleIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'GMeet',
    path: '/google',
    icon: <VideoCallIcon/>,
    cName: 'nav-text'
  },
  
];