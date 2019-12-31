import React from "react";
import PropTypes from "prop-types";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AppBar from "@material-ui/core/AppBar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CubeLayout from "./CubeLayout";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    color: "#b8b6b6",
    fontFamily: "ostrich-sans-regular",
    justifyContent: "center"
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
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
  const [currentClass, setCurrentClass] = React.useState("");

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleClick = e => {
    e.preventDefault();
    let cube = document.querySelector(".cube");
    let showClass = "show-" + e.currentTarget.value;
    if (currentClass) {
      cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    setCurrentClass(showClass);
    let x = window.matchMedia("(max-width: 600px)");
    if (x.matches) {
      handleDrawerToggle();
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ maxHeight: "100%" }}>
      <img
        src={require("../../images/profile_pic.jpg")}
        alt="profile_pic"
        height="auto"
        width="100%"
      />
      <h1 className={classes.root}>Web Developer</h1>
      <Divider />
      <List>
        <ListItem
          onClick={handleClick}
          value="front"
          component="button"
          button
          key={"Home"}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem
          onClick={handleClick}
          value="back"
          component="button"
          button
          key={"Projects"}
        >
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="right"
          component="button"
          button
          key={"Resume"}
        >
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={"Resume"} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="left"
          component="button"
          button
          key={"Blog"}
        >
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary={"Blog"} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="top"
          component="button"
          button
          key={"Contact"}
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
        <ListItem
          onClick={handleClick}
          value="bottom"
          component="button"
          button
          key={"About"}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#2F2828" }}
        position="fixed"
        className={classes.appBar}
      >
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
          <Typography className={classes.root} variant="h4" noWrap>
            {currentClass === ""
              ? "Home"
              : currentClass === "show-front"
              ? "Home"
              : currentClass === "show-back"
              ? "Projects"
              : currentClass === "show-left"
              ? "Blog"
              : currentClass === "show-right"
              ? "Resume"
              : currentClass === "show-bottom"
              ? "About"
              : currentClass === "show-top"
              ? "Contact"
              : ""}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
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
        <Hidden smDown implementation="css">
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
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
