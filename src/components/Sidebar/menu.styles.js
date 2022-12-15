import {Button} from '@material-ui/core'
import {makeStyles, withStyles} from '@material-ui/styles';
export const BootstrapButton = withStyles({
    root: {
        textTransform: 'none',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,

        fontFamily: ['Muli',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
export const useStyles= makeStyles(() => ({
    container: {
        marginLeft: 32,
        marginRight: 32,
    },
    title: {
        marginLeft: 12,
    },
    activeContainer: {
        backgroundColor: "rgba(221,226,255, 0.08)",
        borderLeft: "3px solid #DDE2FF",
      },
    
      activeBar: {
        borderLeft: "3px solid #DDE2FF",
      },
      activeTitle: {
        color: "#A4A6B3",
      
      },
     
      title: {
       
        fontFamily: "Muli",
        fontSize: 16,
        lineHeight: "1.25rem",
        letterSpacing: "0.01rem",
       
        marginLeft: 24,
        color: "#A4A6B3",
      },
    
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
}));

