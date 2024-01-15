import { useState } from "react";
import { 
  Box, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  ListItemIcon, 
  Divider, 
  Typography, 
  Avatar,
  IconButton
} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { blueGrey } from '@mui/material/colors';
import profil from '../../assets/images/avatar.jpg';
import { Article, Close, ContactPage, Folder, Home, Info, Menu, NoteAlt, Person } from "@mui/icons-material";

const Sidebar = () => {

  const [state, setState] = useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw', color: "white", bgcolor: '#212529', height: '100%',  }}
      role="presentation"
    
      onKeyDown={toggleDrawer(anchor, false)}

    >
      <Box 
        bgcolor="white" 
        color="black" 
        zIndex={5} 
        position="sticky" 
        top={0} 
        p={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        > 
        <Typography variant="h6" ml={1}>Thierry Fouemene </Typography>
        <IconButton sx={{colorr: '#212529'}} onClick={toggleDrawer(anchor, false)} >
          <Close sx={{ fontSize: '25px' }} />
        </IconButton>
      </Box>
      <List>
        <ListItem onClick={toggleDrawer(anchor, false)} disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <Home sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItemButton>

        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}  disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <Folder sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Portfolio' />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}  disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <Article sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Actualites' />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}  disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <Person sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Auteurs' />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)}  disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <NoteAlt sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Directeur artistique' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItem onClick={toggleDrawer(anchor, false)} disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <Info sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='A propos' />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={toggleDrawer(anchor, false)} disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <ContactPage sx={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText primary='Contact' />
          </ListItemButton>
        </ListItem>
      </List> 
    </Box>
  );

  return (

    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
      <Button sx={{ color: 'white', '&:hover': { backgroundColor: 'transparent' }, position: 'relative', left: '20px' }} onClick={toggleDrawer('left', true)} disableRipple>
        <Menu sx={{ fontSize: '35px' }} />
      </Button>
      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </Box>
  )
}

export default Sidebar
