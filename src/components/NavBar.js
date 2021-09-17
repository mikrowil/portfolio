import React from 'react'
import {Link} from "gatsby";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import {Button, Menu, MenuItem} from "@material-ui/core";

const linkStyle = {
    color:"#9CC"
}
const activeStyle={
    color:"#52ce86"
}



const NavBar = ({activePage})=>{


    return <nav className="navbar navbar-expand-lg" id="tm-main-nav">
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>

                    <Button style={{color:'#d5f8fe'}} className="navbar-toggler" {...bindTrigger(popupState)}>
                        <i style={{fontSize:28}} className="fas fa-bars"/>
                    </Button>

                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                            <Link to={"/"} style={activePage==='projects'?activeStyle:linkStyle}>Projects</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            <Link to={"/about"} style={activePage==='about'?activeStyle:linkStyle}>About</Link>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                            <Link to={"/contact"} style={activePage==='contact'?activeStyle:linkStyle}>Contact</Link>
                        </MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
        <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
            <ul className="navbar-nav text-uppercase">


                <li className="nav-item">
                    <Link to={"/"} style={activePage==='projects'?activeStyle:linkStyle}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/about"} style={activePage==='about'?activeStyle:linkStyle}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contact"} style={activePage==='contact'?activeStyle:linkStyle}>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
}


export default NavBar
