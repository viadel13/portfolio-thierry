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
  Avatar
} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { blueGrey } from '@mui/material/colors';
import profil from '../../assets/images/avatar.jpg';

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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, color: "white"  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
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
        }}
        > 
        <Avatar src={profil} alt="profil" /> 
        <Typography variant="h6" ml={1}>Thierry Fouemene </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Portfolio' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Actualites' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Auteurs' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Directeur artistique' />
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='A propos' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton >
            <ListItemIcon>
              <InboxIcon />
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
        <MoreVertIcon sx={{ fontSize: '35px' }} />
      </Button>
      <Drawer
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        sx={{
          '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
            background: `${blueGrey[900]}`,
          },
        }}
      >
        {list('left')}
      </Drawer>
    </Box>
  )
}

export default Sidebar
