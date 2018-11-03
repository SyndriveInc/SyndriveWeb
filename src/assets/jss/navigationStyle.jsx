const drawerWidth = 270;

const navigationStyle = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        // width: '100%',
        // height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        height: '60px',
        overflow: 'hidden', //mew
        display: 'flex', //new
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%', //new
        // marginLeft: drawerWidth,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
        whiteSpace: 'nowrap', //new
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
});

export default navigationStyle;