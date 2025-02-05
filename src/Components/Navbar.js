import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { motion } from 'framer-motion'; 
import { HashLink } from 'react-router-hash-link';  // Import HashLink for smooth scrolling

const pages = ['About', 'Skills', 'Projects', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = pages.map(page => document.getElementById(page.toLowerCase()));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Midpoint of viewport

      let active = null;
      sections.forEach(section => {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.clientHeight > scrollPosition) {
          active = section.id;
        }
      });
      setActiveSection(active); // Set the active section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <HashLink smooth to={`#${page.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: activeSection === page.toLowerCase() ? 1.1 : 1,
                      backgroundColor: activeSection === page.toLowerCase() ? '#663399' : 'transparent',
                    }}
                   
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '5px',
                      display: 'inline-block',
                    }}
                  >
                    {page}
                  </motion.div>
                  </HashLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' ,position:'relative'}}>
                <HashLink smooth to={`#${page.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none' }}>
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{
                      scale: activeSection === page.toLowerCase() ? 1.1 : 1,
                      backgroundColor: activeSection === page.toLowerCase() ? '#663399' : 'transparent',
                    }}
                    whileHover={{
                      scale: 1.1, 
                      color: '#ffffff', // Change text color to white on hover
                      backgroundColor: '#441a75', // Darken the background color when hovered
                  
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '5px',
                      display: 'inline-block',
                    }}
                  >
                    {page}
                  </motion.div>
                </HashLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="Media.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
