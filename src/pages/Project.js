

import React from 'react';

import { Typography, Grid, Card, CardContent, CardMedia, Container,  } from '@mui/material';

const Project = () => {
  const projects = [
    { 
      title: "Trying to build a app for galaxy riders!!!", 
      desc: "Searching building ideas", 
      image: "/project1.jpg" // Path to image in public folder
    },
    { 
      title: "We should make an amezing app for farmers", 
      desc: "Knocking ideas", 
      image: "/project2.jpg" // Path to image in public folder
    },
  ];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'tomato' }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((p, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#1a1a1a', color: 'white' }}>
              {/* This is where the image goes! */}
              <CardMedia
                component="img"
                height="250"
                image={p.image}
                alt={p.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>{p.title}</Typography>
                <Typography variant="body2" sx={{ color: '#ccc' }}>{p.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;