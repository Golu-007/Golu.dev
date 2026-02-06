import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ color: 'tomato' }}>Contact Me</Typography>
        <Typography variant="body1" sx={{ color: 'tan' }}>Let's build something together!</Typography>
      </Box>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TextField label="Name" variant="filled" fullWidth sx={{ bgcolor: '#333', borderRadius: 1 }} InputLabelProps={{ style: { color: '#aaa' } }} />
        <TextField label="Email" variant="filled" fullWidth sx={{ bgcolor: '#333', borderRadius: 1 }} InputLabelProps={{ style: { color: '#aaa' } }} />
        <TextField label="Message" multiline rows={4} variant="filled" fullWidth sx={{ bgcolor: '#333', borderRadius: 1 }} InputLabelProps={{ style: { color: '#aaa' } }} />
        <Button variant="contained" size="large" sx={{ bgcolor: 'tomato', '&:hover': { bgcolor: '#ff6347' } }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;