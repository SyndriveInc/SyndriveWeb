const authComponentStyle = theme => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    multilineTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 420,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: '7px',
        display: 'block',
        margin: 'auto auto',
        color: '#FFFFFF',
        // float: 'center',
    },
    rightIcon: {
        margin: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

export default authComponentStyle;