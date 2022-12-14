import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    content: {

        width: '100%',
        height: '500px',
        color: '#ccc'
    },
    active: {

        width: '100%',
        height: '500px',
        color: '#000',
        padding: '4rem'
    },
    H4: {
        fontFamily: "Mulish",
        fontStyle: "normal",
        position: "relative",
        width: "99%",
        height: "60px",
        borderRadius: "6px",
        color: "aliceblue",
        background:theme.palette.nineth.main,
        margin: "5px",
        padding: "10px"

    },
    '@media (max-width: 800px)': {
        H4: {
            height: "auto",

        }

    }
}));

export default useStyles;