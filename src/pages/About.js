import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 10, display: 'flex', justifyContent: 'center', position: 'relative' }}>
      
      {/* 1. The Colorful Background Glow Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '60%',
          background: 'linear-gradient(45deg, #ff6347, #00bfff)',
          filter: 'blur(80px)', // This creates the soft "aura" effect
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* 2. The Animated Border Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1, // Keeps the card above the glow
          padding: '3px',
          borderRadius: '16px',
          background: 'linear-gradient(90deg, #ff6347, #ff1493, #00bfff, #ff6347)',
          backgroundSize: '400% 400%',
          animation: 'moveBorder 4s linear infinite',
          '@keyframes moveBorder': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        <Paper 
          elevation={0} 
          sx={{ 
            p: 5, 
            borderRadius: '14px', 
            bgcolor: '#1a1a1a', 
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: 'tomato', fontWeight: 'bold' }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#ccc' }}>
            I specialize in building modern web applications using React and Material UI.
            I love turning complex problems into simple, beautiful interface designs.
            Whether it's front-end aesthetics or back-end logic, I strive for perfection 
            in every line of code.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;

