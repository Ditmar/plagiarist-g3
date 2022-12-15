
import { makeStyles } from "@material-ui/styles";
import { Title } from "@mui/icons-material"; 
import { listClasses } from "@mui/material";
import List from '@mui/material/List';
export const estilos = makeStyles(() => ({

    fondo:{
        background: 'white',
        height: '100%',
        borderRadius: '0.5rem',
        border: '0.063rem solid #DFE0EB',
        
    }, 
    itemTitle:{
        width: '100%',
        bgcolor: 'background.paper', 
        padding: '10px', 
        height: '1.25rem',
        left: '2rem',
        right: '8.5rem',
    
    },
     ListItem:{  
        borderBottom: 'solid #DFE0EB 0.1rem ',
        
    },
    IconButtom:{
        marginTop: '0.2rem',
        fontSize: '1rem'
    },
    Link:{
        fontSize: '1rem'
    },
    Typography:{
        marginLeft: '5px',
        fontSize: '1rem'
    },
    supprt:{
        mb: 1.5, 
        fontSize: '0.8rem',
        color: 'black' 
    }

}));
