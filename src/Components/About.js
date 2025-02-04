import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import astronautImage from '../Assets/header-img.svg'; 
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '75vh',
        backgroundSize: 'cover',
        color: 'white',
        padding: '10px',
        paddingTop: '2px',
        position: 'relative',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden', // Prevent image overflow
      }}
    >
      {/* Left Section: Welcome Text and Animation */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '60%' },
          textAlign: { xs: 'center', md: 'left' },
          paddingTop: '30px',
          marginLeft: { xs: '0', md: '60px' }, // Adjust left margin for smaller screens
        }}
      >
        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', opacity: 0.7 }}>
            Welcome to My Portfolio
          </Typography>
        </motion.div>

        {/* Main Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginTop: '2px',
              marginBottom: '10px',
            }}
          >
            <Typewriter words={[' Hi! I’m Saikiran, Full Stack Developer']} loop={true} cursor />
          </h1>
        </motion.div>

        {/* Brief Content Below */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              maxWidth: '80%',
              opacity: 0.8,
            }}
          >
            As a Full Stack Developer, I specialize in creating end-to-end web applications using technologies like React, .Net, and MongoDB. I build responsive, scalable, and high-performance web solutions. 
            From crafting dynamic user interfaces to implementing backend logic, I bring projects to life with a focus on user experience and clean code.
          </Typography>
        </motion.div>
      </Box>

      {/* Right Section: Astronaut Image Animation */}
      <motion.div
        style={{
          width: '100%', // Ensure the image takes up full width of its container
          maxWidth: '400px', // Control the image size on larger screens
          height: 'auto',
          marginTop: { xs: '20px', md: '0' }, // Add top margin on small screens
        }}
        animate={{
          y: [0, -50, 0], // Floating effect
        }}
        transition={{
          repeat: Infinity, // Infinite loop for the floating effect
          duration: 3, // Duration of the floating animation
          ease: 'easeInOut',
        }}
      >
        <img
          src={astronautImage}
          alt="Astronaut"
          style={{
            width: '100%',
            maxWidth: '400px', // Ensure image doesn't stretch beyond this width
            height: 'auto',
            display: 'block',
            margin: '0 auto', // Center the image
          }}
        />
      </motion.div>
    </Box>
  );
};

export default About;
