import React from 'react';
import { AppBar, Toolbar, Typography, IconButton , makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='Menu'>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    Syndrive
                </Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;