import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import project1 from '../Assets/Voice-command.webp';
import project2 from '../Assets/IoT-association-with-electric-motorcycle.png';
import project3 from '../Assets/flight.jpg';
import project4 from '../Assets/project-img1.png';
import project5 from '../Assets/project-img2.png';
import project6 from '../Assets/project-img3.png';

export default function Project() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const projects = [
    {
      name: 'Google Assistant Based Device Control Over Internet',
      image: project1, 
      description: 'A system to control smart devices using Google Assistant over the internet.'
    },
    {
      name: 'Anti-Theft Alerting System for Two-Wheelers',
      image: project2, 
      description: 'A security system for two-wheelers with real-time alerting features.'
    },
    {
      name: 'Flight Booking System',
      image: project3, 
      description: 'A web application for booking flights and managing reservations.'
    },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: 'black', padding: '20px'  }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: '20px' }}>
        Projects
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}>
      These are the projects I have developed that showcase my expertise in building robust, scalable web applications.
       
      </Typography>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Tabs where each tab needs to be selected manually"
        indicatorColor="secondary"
        textColor="inherit"
        centered
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Ensure the tabs take up equal space
          width: '100%',
          borderRadius: '30px', // Rounded corners for tabs
          backgroundColor: '#333', // Dark background for the tabs
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Adding shadow for tabs
          '& .MuiTab-root': {
            borderRadius: '30px',
            textTransform: 'none',
            fontSize: '1.2rem', // Larger font size for tabs
            fontWeight: 'bold',
            color: 'white',
            transition: 'background-color 0.3s', // Smooth transition on hover
            flex: 1, // Ensure all tabs are evenly distributed
          },
          '& .MuiTab-root:hover': {
            backgroundColor: 'purple', // Hover effect for tabs (mix of pink and purple)
            color: 'pink',
          },
        }}
      >
        <Tab label="Tab 1" sx={{ borderRadius: '30px' }} />
        <Tab label="Tab 2" sx={{ borderRadius: '30px' }} />
        <Tab label="Tab 3" sx={{ borderRadius: '30px' }} />
      </Tabs>

      {/* Tab 1: Display Projects */}
      {value === 0 && (
        <Box sx={{ p: 3, color: 'white' }}>
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}> {/* Updated to make images occupy full width in grid */}
                <Box sx={{ textAlign: 'center' }}>
                  <img src={project.image} alt={project.name} style={{ width: '100%', height: '250px', borderRadius: '8px',objectFit:'cover' }} />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Tab 2: Placeholder Projects */}
      {value === 1 && (
        <Box sx={{ p: 3, color: 'white' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project4} alt="Placeholder Project 1" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 1
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project5} alt="Placeholder Project 2" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 2
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project6} alt="Placeholder Project 3" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 3
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Tab 3: Placeholder Projects */}
      {value === 2 && (
        <Box sx={{ p: 3, color: 'white' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project2} alt="Placeholder Project 1" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 1
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project4} alt="Placeholder Project 2" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 2
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <img src={project3} alt="Placeholder Project 3" style={{ width: '100%', height: '330px', borderRadius: '8px' }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Project 3
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
