import React from 'react'

const ProjectsList = ()=>{
    return(
        <>
            <div className={"project_container"}>
                <h3>UHDA</h3>
                <div>
                    <p>
                        UHDA(Untitled Help Desk Application) is A Java Spring MVC Application that was created by myself, along with two of my classmates.
                    </p>
                </div>
                <div className={"project_button_group"}>
                    <a href={"https://github.com/jake-pauls/Untitled_UHDA_Project/wiki"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Mixology</h3>
                <div>
                    <p>
                        Mobile application that runs on react-native. Choose from a variety of cocktails,
                        and save your favorites for later.
                    </p>
                </div>
                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/MixologyV2"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Blockchain</h3>
                <div>
                    <p>
                        Full stack blockchain application. A React frontend connected to a python backend.
                    </p>
                </div>
                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/MixologyV2"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Restaurant Companion</h3>
                <div>
                    <p>
                        A PHP app that displays employee data from an SQL database.
                    </p>
                </div>
                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/restaurant-companion"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectsList
