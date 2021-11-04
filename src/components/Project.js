import React from 'react'
import imgUHDA from "../images/TicketDisplay-Class_Diagram_mwi_18.png";

const Project = ({project})=>{
    return(
        <div className={"project_container"}>
            <h3>{project.title}</h3>

            <img src={imgUHDA} alt={"Project Image"}/>
            <p>
                UHDA(Untitled Help Desk Application) is A Java Spring MVC Application that was created by myself, along with two of my classmates. This system is useful to IT
                employees because users can upload tickets, while employees can monitor and update ticket states. Admins are given the permission to modify employee and user data, as
                well as assign tickets to individuals.
            </p>

            <div className={"project_button_group"}>
                <a className={"project_button"} href={"https://github.com/jake-pauls/Untitled_UHDA_Project/wiki"}>
                    <i style={{marginRight:5}} className="fab fa-github"/>
                    github
                </a>
            </div>
        </div>
    )
}


export default Project
