import React from "react";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import IconOverview from "./iconos/icon-overview.js";
import IconTickets from "./iconos/icon-tickets.js";
import IconIdeas from "./iconos/icon-ideas.js";
import IconContacts from "./iconos/icon-contacts";
import IconAgents from "./iconos/icon-agents";
import IconArticles from "./iconos/icon-articles";
import IconSettings from "./iconos/icon-settings";
import { useStyles } from "./menu.styles";
import { slide as Menu } from "react-burger-menu";
import useMenuComponent from "./useMenuComponent";

const styles = {
  bmBurgerButton: {
    position: "absolute",
    width: 26,
    height: 20,
    left: 24,
    top: 20,
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    display: "none",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: 255,
  },
  bmMenu: {
    background: "#373a47",
  },
  bmItem: {
    outline: "none",
    ":focus": {
      outline: "none",
    },
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const MenuComponent = () => {
  const classes = useStyles();
  const {
    isOpen,
    isActive,
    onMenuItemClicked,
  } = useMenuComponent({ defaultPath: "/overview" });

  const isMobile = window.innerWidth <= 1080;

  return (
    <Menu
      isOpen={!isMobile || isOpen}
      noOverlay={!isMobile}
      disableCloseOnEsc
      styles={styles}
    >
      <div style={{ paddingTop: 30, paddingBottom: 30 }}>
        <LogoComponent />
      </div>

      <MenuItemComponent
        title="Inicio"
        icon={IconOverview}
        onClick={() => onMenuItemClicked("/overview", { isCollapsible: true })}
        active={isActive("/overview")}
      />
      <MenuItemComponent
        title="Trabajos"
        icon={IconTickets}
        onClick={() => onMenuItemClicked("/tickets")}
        active={isActive("/tickets")}
      />
      <MenuItemComponent
        title="Revisar Tesis"
        icon={IconIdeas}
        onClick={() => onMenuItemClicked("/ideas", { isCollapsible: true })}
        active={isActive("/ideas")}
      />
      <MenuItemComponent
        title="Listar Tesis"
        icon={IconContacts}
        onClick={() => onMenuItemClicked("/contacts")}
        active={isActive("/contacts")}
      />
      <MenuItemComponent
        title="Publicar Tesis"
        icon={IconAgents}
        onClick={() => onMenuItemClicked("/agents")}
        active={isActive("/agents")}
      />
      <MenuItemComponent
        title="Reportes Generales"
        icon={IconArticles}
        onClick={() => onMenuItemClicked("/articles")}
        active={isActive("/articles")}
      />
      <div className={classes.separator}></div>
      <MenuItemComponent
        title="Settings"
        icon={IconSettings}
        onClick={() => onMenuItemClicked("/settings")}
        active={isActive("/settings")}
      />
    </Menu>
  );
};

export default MenuComponent;
