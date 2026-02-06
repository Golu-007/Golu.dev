

import React from 'react';
import { Box, Typography, Button, Avatar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const hours = new Date().getHours();
  const greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <Avatar src="/avatar.jpg" sx={{ width: 180, height: 180, mb: 4, border: '5px solid tomato' }} />
        </motion.div>
        
        <Typography variant="h5" sx={{ color: 'tan', mb: 1 }}>{greeting}, I'm</Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1 }}>GOLU KUMAR</Typography>
        <Typography variant="h5" sx={{ color: 'tomato', mb: 4 }}>FULL STACK DEVELOPER</Typography>
        
        <Button variant="outlined" component={Link} to="/About" sx={{ px: 4, py: 1.5 }}>Explore Portfolio</Button>
      </Box>
    </Container>
  );
};

export default Home;