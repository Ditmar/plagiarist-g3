import React, {useState, useEffect} from 'react'
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import Link from '@mui/material/Link';
import socket from '../../async/services/socketIO'
import {estilos} from '../../app.styles';

const Latestdocument = () => { 
     const [documentos, setDocumentos] = useState([])

     useEffect( () => {
     socket().then(response => setDocumentos(response))
}, []) 
const classes = estilos();
     return(

        <div>
            {    
        
                documentos.slice(0,5).map((Documentos ) => (  
                        <ListItem 
                              key={Documentos.id}
                              sx={{ borderBottom: 'solid #DFE0EB 0.1rem', display:'flex'}}
                           > 
                            <p className={classes.itemTitle}>{Documentos.title}</p>
                                
                                <IconButton aria-label="comment" 
                                className={classes.IconButtom}>   
                                  <Link className={classes.Link} href="#">
                                    View details
                                  </Link> 
                                  <Typography className={classes.Typography} >
                                   {Math.floor((Math.random() * (250 - 200 + 1)) + 200)}pag
                                  </Typography>
                                  
                                </IconButton>
                                
                              
                            </ListItem> 
                       
                         
                ))
            }
        </div>
     )
}
 
export default Latestdocument