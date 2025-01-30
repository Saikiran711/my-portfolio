import * as React from 'react';
import { Box, Card, CardContent, Typography, IconButton, CircularProgress, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function SkillsCard() {
  const [scrollIndex, setScrollIndex] = React.useState(0);
  const skills = [
    { label: 'JavaScript', percentage: 90 },
    { label: 'React', percentage: 85 },
    { label: '.NET', percentage: 75 },
    { label: 'MongoDB', percentage: 70 },
    { label: 'SQL', percentage: 80 },
    { label: 'Git', percentage: 90 },
    { label: 'HTML', percentage: 80 },
    { label: 'CSS', percentage: 70 },
    // Add more skills if needed
  ];

  const skillsPerPage = 3; // Number of skills to show at a time

  const handleLeftClick = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - skillsPerPage);
    }
  };

  const handleRightClick = () => {
    if (scrollIndex < skills.length - skillsPerPage) {
      setScrollIndex(scrollIndex + skillsPerPage);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 5,
        padding: 2,
      }}
    >
      <Card sx={{ width: '90%', maxWidth: 1000, backgroundColor: 'black',padding: 3, height: 400  }}>
        <CardContent>
          <Typography variant="h4" color="white" sx={{ fontWeight: 'bold', textAlign:'center' }} gutterBottom>
            Skills
          </Typography>
          <Typography variant="body1" color="white" paragraph sx={{ textAlign: 'center', marginBottom: 3 }}>
            These are my core skills. Scroll horizontally to see more.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Left Arrow Button */}
            <IconButton onClick={handleLeftClick} disabled={scrollIndex === 0} sx={{ color: 'white' }}>
              <ArrowBackIcon />
            </IconButton>

            {/* Circular Progress Indicators */}
            <Box
              sx={{
                display: 'flex',
                overflow: 'hidden',
                width: '80%',
                justifyContent: 'space-evenly', // Adjust space between circles
                alignItems: 'center',
              }}
            >
              <Grid container spacing={3} justifyContent="center">
                {skills.slice(scrollIndex, scrollIndex + skillsPerPage).map((skill, index) => (
                  <Grid item key={index}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CircularProgress
                        variant="determinate"
                        value={skill.percentage}
                        size={200}
                        thickness={9}
                        sx={{
                            color: 'pink',
                            marginBottom: 2,
                            marginTop:2,
                            position: 'relative',
                        }}
                        >
                    </CircularProgress>
                      <Typography variant="h6" color="white">
                        {skill.label}
                      </Typography>
                      <Typography variant="body2" color="white" sx={{ marginTop: 1 }}>
                        {skill.percentage}%
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Right Arrow Button */}
            <IconButton onClick={handleRightClick} disabled={scrollIndex >= skills.length - skillsPerPage} sx={{ color: 'white' }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
