import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        width: 750,
        height: 500,
        margin: 'auto',
        marginTop: 200,
        backgroundColor: '#FBFAFC',
        padding: 10,
        position: 'relative',
    },
    body: {
        display: 'flex',
        width: '80%',
        height: '55%',
        margin: 'auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
    },
    fields: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        height: '75%',
        overflowX: 'hidden',
        overflow: 'scroll',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'min-content',
        backgroundColor: '#201853',
        color: 'white',
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 5,
    },
    textField: {
        marginBottom: 15,
    },
    text: {
        textAlign: 'center',
        marginTop: 70,
    },
    par: {
        textAlign: 'left',
        width: '80%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 5,  
        alignSelf: 'center',
    },
    delete: {
        fontSize: '1.3rem',
        alignSelf: 'center',
        marginRight: 5,
        cursor: 'pointer',
        '&:hover': {
            color: '#46D999',
        },
    },
    title: {
        fontFamily: "Rothek-Bold",
        textAlign: 'center',
        color: '#201853',
    },
    button: {
        backgroundColor: '#46D999',
        color: '#201853',
        borderRadius: 15,
        width: 100,
        margin: 'auto',
        marginTop: 10,
        '&:hover': {
            backgroundColor: '#6E60FF',
            color: 'white',
        },
    },
    bigButton: {
        backgroundColor: '#46D999',
        color: '#201853',
        borderRadius: 15,
        width: 150,
        margin: '0 310px',
        marginTop: 50,
        '&:hover': {
            backgroundColor: '#6E60FF',
            color: 'white',
        },
    },
    error: {
        fontSize: '0.8rem',
        textAlign: 'center',
        color: 'red',
        marginTop: 10,
    },
    cancel: {
        position: 'absolute',
        top: -16,
        right: -15,
        color: '#46D999',
        backgroundColor: '#201853',
        borderRadius: '50%',
        fontSize: '2rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'white',
            color: '#6E60FF',
        },
    },
}));