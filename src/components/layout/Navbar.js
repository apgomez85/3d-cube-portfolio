import React from 'react';
import PropTypes from 'prop-types';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';
import ClassIcon from '@material-ui/icons/Class';
import ComputerIcon from '@material-ui/icons/Computer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CubeLayout from './CubeLayout';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  var currentClass = '';

  const handleClick = e => {
    e.preventDefault();
    var cube = document.querySelector('.cube');
    var showClass = 'show-' + e.currentTarget.value;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    console.log(e.currentTarget);
    currentClass = showClass;
  };

  const drawer = (
    <div>
      <img
        src={require('../../images/profile_pic.jpg')}
        alt="profile_pic"
        height="auto"
        width="100%"
      />
      <h1 className={classes.content}>Web Developer</h1>
      <Divider />
      <List>
        <ListItem
          onClick={handleClick}
          value="front"
          component="button"
          button
          key={'Home'}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>

        <ListItem
          onClick={handleClick}
          value="back"
          component="button"
          button
          key={'Projects'}
        >
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary={'Projects'} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="right"
          component="button"
          button
          key={'Resume'}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={'Resume'} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="left"
          component="button"
          button
          key={'Blog'}
        >
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary={'Blog'} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="top"
          component="button"
          button
          key={'Contact'}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'Contact'} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="bottom"
          component="button"
          button
          key={'Certifications'}
        >
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary={'Certifications'} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Adrian Gomez
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <CubeLayout />
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === 'undefined' ? Object : Element
  )
};

export default ResponsiveDrawer;
