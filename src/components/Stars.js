import React from 'react';
import { Box } from '@mui/material';

const Stars = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {[...Array(60)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            animation: `twinkle ${Math.random() * 4 + 2}s infinite ease-in-out`,
            '@keyframes twinkle': {
              '0%, 100%': { opacity: 0.2, transform: 'scale(1)' },
              '50%': { opacity: 1, transform: 'scale(1.5)' },
            },
          }}
        />
      ))}
    </Box>
  );
};

export default Stars;