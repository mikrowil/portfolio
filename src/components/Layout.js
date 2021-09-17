import React from 'react'
import NavBar from "./NavBar";


const Layout = ({children})=>{
    return <div className={"layout"}>
        <NavBar/>
        <div className={"content"}>
            {children}
        </div>
    </div>
}
export default Layout
