import React from 'react'
import imgMixology from '../images/imgMixology.png'
import imgUHDA from '../images/TicketDisplay-Class_Diagram_mwi_18.png'
import imgBlockchain from '../images/block.jpg'
import imgRestaurant from '../images/imgRestaurant.png'

const ProjectsList = () => {
    return (
        <>
            <div className={"project_container"}>
                <h3>Help Desk Ticketing Application</h3>
                <p style={{
                    fontStyle: 'italic'
                }}
                >
                    <em>Technologies used</em>: Java, Spring MVC, JSP, HTML, CSS, Javascript
                </p>
                <img src={imgUHDA} alt={"Project Image"}/>
                <p>
                    UHDA(Untitled Help Desk Application) is A Java Spring MVC Application that was created by myself,
                    along with two of my classmates. This system is useful to IT
                    employees by allowing users to upload tickets, while employees can monitor and update ticket states.
                    Admins are given the permission to modify employee and user data, as
                    well as assign tickets to individuals.
                </p>

                <div className={"project_button_group"}>
                    <a className={"project_button"} href={"https://github.com/jake-pauls/Untitled_UHDA_Project/wiki"}>
                        <i style={{marginRight: 5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Mixology</h3>
                <p style={{
                    fontStyle: 'italic'
                }}
                >
                    <em>Technologies used</em>: Javascript, React-native, Firebase, Axios, Redux
                </p>
                <img src={imgMixology} alt={"Project Image"}/>
                <p>
                    Mobile application that runs on react-native. Choose from over 600 unique and classic cocktails with
                    instructions on how to make.
                    Keep a list of you're favorites or even have our mood tester pick a drink for you. Happy hour is
                    almost here.
                </p>

                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/MixologyV2"}>
                        <i style={{marginRight: 5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Blockchain - Full stack</h3>
                <p style={{
                    fontStyle:'italic'
                }}
                >
                    <em>Technologies used</em>: Python, Javascript, Flask, Cryptography, React
                </p>
                <img src={imgBlockchain} alt={"Project Image"}/>
                <p>
                    Full stack blockchain application built on a flask backend and hooked up to a react frontend.

                </p>

                <div className={"project_button_group"}>

                    <a href={"https://github.com/mikrowil/block-chain-backend"}>
                        <i style={{marginRight: 5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
            <div className={"project_container"}>
                <h3>Restaurant Companion</h3>
                <p style={{
                    fontStyle:'italic'
                }}
                >
                    <em>Technologies used</em>: PHP, HTML, CSS, Bootstrap
                </p>
                <img src={imgRestaurant} alt={"Project Image"}/>
                <p>
                    A PHP app that displays employee data from an SQL database. Some of the features include
                    authorization,
                    API usage / creation and sessions. If you would like to see the code or run it on a local machine,
                    please follow
                    the github link.
                </p>

                <div className={"project_button_group"}>
                    <a href={"https://github.com/mikrowil/restaurant-companion"}>
                        <i style={{marginRight: 5}} className="fab fa-github"/>
                        github
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProjectsList
