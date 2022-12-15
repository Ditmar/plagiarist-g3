import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import Detail from './pages/detail';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Latestdocument from './components/LatestDocuments/index';
import {estilos} from './app.styles';

function App() {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      
    </Box>
  );
  const classes = estilos();
 
  return (
    <Theme>
      <LoaderSpinnerContextProvider>
        <BrowserRouter>
          <LoaderComponent />
          <Routes>
            <Route path="/" element={<>
              <Dashboard>
              <Grid container spacing={2}>
            
                  <Grid item xs={12}>
                    <React.Fragment>
                      <CssBaseline />
                      <Container maxWidth="full" >
                        <Box className={classes.fondo} > 
                        
                          <Box sx={{ padding: '10px'}}>
                            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' ,fontSize: '1.6rem' }}>
                             
                              Ultimos Documentos Publicados
                               
                            </Typography>
                            <Typography className={classes.support}
                            >
                              <span > Group: </span> <span>Support</span>
                            </Typography>
                          </Box>

                          <List className={classes.li}
                          >
                            
                           <Latestdocument/>
                          </List>

                        </Box>
                        
                      </Container>
                    </React.Fragment>
                  </Grid>
                </Grid>

              </Dashboard>
            </>} />
            <Route path="/upload" element={<>
              <Dashboard>
                <UploadComponent />
              </Dashboard>
            </>} />
            <Route path="/detail/:slug" element={<>
              <Dashboard>
                <Detail />
              </Dashboard>
            </>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </LoaderSpinnerContextProvider>
    </Theme>
  );
  
}

export default App;
