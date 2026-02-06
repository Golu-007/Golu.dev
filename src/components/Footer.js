import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        sx={{ background: '#111', '& .MuiSvgIcon-root': { fill: 'tan', '&:hover': { fill: 'tomato' } } }}
      >
        <BottomNavigationAction icon={<LinkedInIcon />} onClick={() => window.open('https://www.linkedin.com/in/golu-kumar-9207183a2')} />
        <BottomNavigationAction icon={<GitHubIcon />} onClick={() => window.open('https://github.com/Golu-007')} />
        <BottomNavigationAction icon={<LanguageIcon />} onClick={() => window.open('https://golu-007.github.io/Genius-g-try-2-On-Diwali-2025/')} />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;