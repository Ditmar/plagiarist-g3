import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import {Register} from './pages/Register/Register';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
import MenuComponent from './components/Sidebar/MenuComponent';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import Detail from './pages/detail';
function App() {

  const items = [
    {
      to: '/',
      name: 'Home'  
    },
    {
      to: '/searchgiffs',
      name: 'Search Memes'
    },
    {
      to: '/login',
      name: 'Login'
    }
  ];

  return (
    
      <Theme>
        
        <LoaderSpinnerContextProvider>
          <BrowserRouter>
            <LoaderComponent />
            <Routes>
              <Route path="/" element={<>
                <MenuComponent />                
              </>}/>
              <Route path="/upload" element={<>
                <Dashboard> 
                  <UploadComponent />
                </Dashboard>
              </> } />
              <Route path="/detail/:slug" element={<>
                <Dashboard> 
                  <Detail />
                </Dashboard>
              </> } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </LoaderSpinnerContextProvider>
      </Theme>
  );
}

export default App;
