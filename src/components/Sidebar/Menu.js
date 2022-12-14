import React, { useState } from "react";
import "./Menu.css";
import logo from "./iconos/logo.png";
import Button from "./iconos/Button";
import SettingsIcon from '@mui/icons-material/Settings';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Menu = () => {
    const [Clicked,setCliked] = useState(false);
    const handlerClick = ()=>{
        setCliked(!Clicked);
    }
    return (
        <Router>
            <div className="burguer">
              <Button Clicked={Clicked} handlerClick={handlerClick}/>
            </div>
            <div className={Clicked ? 'movil':'sidebar'}>
                <ul>
                    <div className="desktop"><img className="logo" src={logo}/>Plagio Control</div>
                    <li>
                        <DonutSmallIcon className="icon"/>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <LocalActivityIcon className="icon"/>
                        <Link to="/">Trabajos</Link>
                    </li>
                    <li>
                        <LightbulbIcon className="icon"/>
                        <Link to="/">Revisar Tesis</Link>
                    </li>
                    <li>
                        <GroupsIcon className="icon"/>
                        <Link to="/">Listar Tesis</Link>
                    </li>
                    <li>
                        <FilePresentIcon className="icon"/>
                        <Link to="/">Publicar Tesis</Link>
                    </li>
                    <li>
                        <ArticleIcon className="icon"/>
                        <Link to="/">Reportes Generales</Link>
                    </li>
                    <hr/>
                    <li>
                        <SettingsIcon className="icon"/>
                        <Link to="/">Settings</Link>
                    </li>
                </ul>  
            </div>
        </Router>
    )
}
export default Menu;