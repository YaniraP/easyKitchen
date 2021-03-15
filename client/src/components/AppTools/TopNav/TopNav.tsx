import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "sticky",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "flex",
    color: "black"
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "170px",
    height: "45px",
    marginTop: "18px",
    marginBottom: "15px",
  }
}));

function TopNav () {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path: string) => {
    history.push(path);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} role='menubar'>
      <AppBar position="static">
        <Toolbar style={{ background: '#EEE' }}>
          <Link to="/get_started">
          <img
            src={"/Logo-easykitchen.png"}
            alt="logo"
            className={classes.logo} />
          </Link>
          <Typography
            variant="h6"
            className={classes.title}>
          </Typography>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              role='button'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem role='menuitem' onClick={() => handleMenuClick('/add_dish')}>Add a dish</MenuItem>
              <MenuItem role='menuitem' onClick={() => handleMenuClick('/create_menu')}>Create a menu</MenuItem>
              <MenuItem role='menuitem' onClick={() => handleMenuClick('/menu')}>See menus</MenuItem>
              <MenuItem role='menuitem' onClick={() => handleMenuClick('/order')}>See orders</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div >
  );
}

export default withRouter(TopNav);


