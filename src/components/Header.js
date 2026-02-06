

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { WbSunny, NightlightRound } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ mode, setMode }) => {
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppBar position="static" sx={{ background: mode === 'dark' ? '#111' : '#fff', color: mode === 'dark' ? '#fff' : '#111' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "inherit", fontWeight: 'bold' }}>Golu Kumar</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mode}
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <WbSunny sx={{ color: '#ffcf33' }} /> : <NightlightRound sx={{ color: '#000' }} />}
              </IconButton>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


