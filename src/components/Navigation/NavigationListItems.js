import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AccountCircle, Dashboard, History, LocationOn, PowerSettingsNew } from '@material-ui/icons';

import { auth } from '../../firebase/firebase';

export const listItems = (
    <div>
        <NavLink to='/dashboard' className='nav-style'>
            <ListItem button>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
            </ListItem>
        </NavLink>
        {/* <NavLink to='/share' className='nav-style'> */}
        <ListItem button>
            <ListItemIcon>
                <LocationOn />
            </ListItemIcon>
            <ListItemText primary='Maps' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <History />
            </ListItemIcon>
            <ListItemText primary='History' />
        </ListItem>
    </div>
);

export const otherListItems = (
    <div>
        <NavLink to='/account' className='nav-style'>
            <ListItem button>
                <ListItemIcon>
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary='My Account' />
            </ListItem>
        </NavLink>
        <ListItem button onClick={
            () => auth.signOut()
        }>
            <ListItemIcon>
                <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText primary='Logout' />
        </ListItem>
    </div>
);
