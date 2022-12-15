import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paperStyle: { 
        padding: '30px 20px', 
        width: 420, 
        margin: '40px auto', 
        elevation: '20px' 
    },
    headerStyle: { 
        margin: 0, 
        fontSize: '19px' 
    },
    avatarStyle: { 
        backgroundColor:theme.palette.sixth.main, 
    },
    typeFont: { 
        fontFamily : 'arial' 
    },
    sizeFont: { 
        fontSize : '19px' 
    },
    sizeFontSecondary: { 
        fontSize : '12px' 
    },
    colorFont: { 
        color : '#A4A6B3' 
    },
    opacityFont: { 
        opacity : '0.7'
    },
    borderLabel: {
        borderRadius : '8px'
    },
}))
export default useStyles;