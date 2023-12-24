import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tabs,
  Tab,
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Fragment, useState, useLayoutEffect } from 'react';
import { Turn as Hamburger } from 'hamburger-react'
import Sidebar from '../Sidebar/Index';


const Navbar = () => {
  const pages = ['Accueil', 'Portfolio', 'Actualites', 'Auteurs', 'Directeur Artisitique', 'A propos', 'Contact'];
  const [anchorEl, setAnchorEl] = useState(null);
  const [portfolioMenu, setPortfolioMenu] = useState(null);
  const [actualitesMenu, setActualitesMenu] = useState(null);
  const [aProposMenu, setAProposMenu] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [value, setValue] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState(false);


  useLayoutEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== navbarBackground) {
        setNavbarBackground(isScrolled);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [navbarBackground]);

  const handleClick = (event, page) => {
    setActiveTab(page);

    switch (page) {
      case 'Portfolio':
        setPortfolioMenu(event.currentTarget);

        break;
      case 'Actualites':
        setActualitesMenu(event.currentTarget);
        break;
      case 'A propos':
        setAProposMenu(event.currentTarget);
        break;
      default:
        setAnchorEl(event.currentTarget);
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: navbarBackground ? 'secondary.dark' : 'transparent' }} elevation={navbarBackground ? 2 : 0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontWeight: 700,
                letterSpacing: { xs: '.2rem', md: '.2rem' },
                color: 'inherit',
                textDecoration: 'none',
                fontSize: { xs: '15px', md: '18px', sm: '15px', lg: '18px', xl: '18px' }
              }}
            >
              THIERRY FOUOMENE
            </Typography>
            
            <Sidebar />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Tabs
                value={value}
                onChange={handleChange}
              >
                {pages.map((page) => (
                  <Tab
                    key={page}
                    icon={(page === 'Portfolio' || page === 'Actualites' || page === 'A propos') && <KeyboardArrowDownIcon sx={{ margin: 0 }} />}
                    iconPosition='end'
                    onClick={(e) => handleClick(e, page)}
                    sx={{
                      color: 'white',
                      // '&:hover': { backgroundColor: 'transparent', color: 'rgb(255, 149, 0)', letterSpacing: '2px', transition: 'all ease 0.5s' },

                      '.MuiSvgIcon-root': { margin: 0 },
                      padding: '6px 6px',
                      margin: 0,

                    }}
                    label={page}
                  >

                  </Tab>
                ))}
              </Tabs>
              <Menu
                elevation={3}
                sx={{ mt: 3 }}
                id="portfolio-menu"
                anchorEl={portfolioMenu}
                open={Boolean(portfolioMenu)}
                onClose={() => setPortfolioMenu(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => setPortfolioMenu(null)}>Projets</MenuItem>
                <MenuItem onClick={() => setPortfolioMenu(null)}>Production</MenuItem>
              </Menu>

              <Menu
                elevation={3}
                sx={{ mt: 3 }}
                id="actualites-menu"
                anchorEl={actualitesMenu}
                open={Boolean(actualitesMenu)}
                onClose={() => setActualitesMenu(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => setActualitesMenu(null)}>Coming soon</MenuItem>
                <MenuItem onClick={() => setActualitesMenu(null)}>Textes</MenuItem>
              </Menu>

              <Menu
                elevation={3}
                sx={{ mt: 3 }}
                id="a-propos-menu"
                anchorEl={aProposMenu}
                open={Boolean(aProposMenu)}
                onClose={() => setAProposMenu(null)}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => setAProposMenu(null)}>Biographie</MenuItem>
                <MenuItem onClick={() => setAProposMenu(null)}>Archive</MenuItem>
              </Menu>
            </Box>


          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar;
