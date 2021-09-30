import React from 'react'

const ProjectsList = ()=>{
    return(
        <>
            <div className={"project_container"}>
                <h3>UHDA</h3>

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
            <div className={"project_container"}>
                <h3>Mixology</h3>

                    <p>
                        Mobile application that runs on react-native. Choose from over 600 unique and classic cocktails with instructions on how to make.
                        Keep a list of you're favorites or even have our mood tester pick a drink for you. Happy hour is almost here.
                    </p>

                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/MixologyV2"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Blockchain - Backend</h3>

                    <p>
                        The backend for a blockchain and crypto currency. Blockchains are an immutable and public database, tasked with keeping track of crypto transactions.
                        Server set up and class details are served here.

                    </p>

                <div className={"project_button_group"}>

                        <a href={"https://github.com/mikrowil/block-chain-backend"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Restaurant Companion</h3>

                    <p>
                        A PHP app that displays employee data from an SQL database.
                    </p>

                <div className={"project_button_group"}>
                    <a  href={"https://github.com/mikrowil/restaurant-companion"}>
                        <i style={{marginRight:5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectsList
