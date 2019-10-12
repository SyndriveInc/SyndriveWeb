import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Divider, Drawer, Hidden, List } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// TODO: import CardList

// import { Menu } from '@material-ui/icons';

import { listItems/* , otherListItems */ } from '../../components/Navigation/NavigationListItems';
import CardList from '../../components/CardList/CardList';
import navigationStyle from '../../assets/jss/navigationStyle.jsx';

import './Navigation.css';

// const drawerWidth = 240;

const NavDrawer = (props) => {
    const [ mobileOpen, setMobileOpen ] = React.useState(false);
    const handleDrawerToggle = () => { setMobileOpen(!mobileOpen); }

    const { classes, theme } = props;

    const drawer = (
        <div style={{height: '100vh'}} className='sidebar-div'>
            <h2 className='ttu' style={{textAlign: 'center'}}>Syndrive</h2>
            <Divider style={{margin: '0px 10px'}} />
            <List>{listItems}</List>
        </div>
    );

    return (
        <div className={classes.root}>
            {/* <AppBar position='fixed' color='primary' className={classes.appBar}>
                <Toolbar className='header'>
                    <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleDrawerToggle}
                        className={classes.navIconHide}
                    >
                        <Menu style={{ color: 'black' }} />
                    </IconButton>
                    <NavLink to='/dashboard' className='nav-style'>
                        <Typography
                            className='ml1'
                            variant='h4'
                            color='inherit'
                            style={{ fontFamily: 'Lato', fontWeight: 600 }}>
                            <span>Syndrive</span>
                        </Typography>
                    </NavLink>
                </Toolbar>
            </AppBar> */}
            {/* <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={handleDrawerToggle}
                className={classes.navIconHide}
            >
                <Menu style={{ color: 'black', position: 'absolute', top: 2, left: 3 }} />
            </IconButton> */}
            <Hidden mdUp>
                <Drawer
                    variant='temporary'
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation='css'>
                <Drawer
                    variant='permanent'
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <main className={classes.content} style={{ background: '#f3f4f770' }}>
                <div className={classes.toolbar} />
                {/* <p>{uagent}</p> */}
                <CardList />
            </main>
        </div>
    );
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default connect()(withStyles(navigationStyle, { withTheme: true })(NavDrawer));
// export default NavDrawer;