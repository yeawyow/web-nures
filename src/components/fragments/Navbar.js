import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  grow: { flexGrow: 1 },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
    fontSize: 18,
    margin: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navLinks = [
    { title: `หน้าหลัก`, path: `/` },
    { title: `ข้อมูลหน่วยงาน`, path: `/about` },
    { title: `ภาพกิจกรรม`, path: `/` },
    { title: `บุคลากร`, path: `/blog` },
    { title: `ดาวน์โหลดเอกสาร`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ];
  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="long-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
    >
      {navLinks.map(({ title, path }) => (
        <MenuItem
          component={NavLink}
          onClick={handleClose}
          to={`${process.env.PUBLIC_URL}` + `${path}`}
        >
          <p>{title}</p>
        </MenuItem>
      ))}
    </Menu>
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionDesktop}>
            {navLinks.map(({ title, path }) => (
              <Button
                onClick={() =>
                  history.push(`${process.env.PUBLIC_URL}` + `${path}`)
                }
                className={classes.linkText}
                color="primary"
              >
                {title}
              </Button>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              //  aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
