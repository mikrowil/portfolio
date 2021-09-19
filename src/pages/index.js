import React,{useEffect} from "react"
import '../css/styles.css'
import '../css/bootstrap.min.css'
import '../fontawesome/css/all.min.css'
import {Link} from "gatsby";
import CustomParticleBackground from "../components/CustomParticleBackground";
import NavBar from "../components/NavBar";
import Title from "../components/Title";


const IndexPage = () => {


  return (
    <main className={"index_main_container"}>
        <CustomParticleBackground/>
        <div className="tm-container">
            <div>
                <div className="tm-row pt-4">
                    <div className="tm-col-left">
                        <Title/>
                    </div>
                    <div className="tm-col-right">
                        <NavBar activePage = {'projects'}/>
                    </div>
                </div>

                <div className="tm-row">

                    <main className="tm-col-right">

                        <div className={"project_main_container"}>
                            <div className={"project_container"}>
                                <h3>UHDA</h3>
                                <div style={styles.summary}>
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
                                <h3>Restaurant Companion</h3>
                                <div style={styles.summary}>
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
                        </div>
                    </main>
                </div>
            </div>

            <div className="tm-row">

                <div className="tm-col-right tm-col-footer">

                </div>
            </div>


            <div className="tm-bg">
                <div className="tm-bg-left"></div>
                <div className="tm-bg-right"></div>
            </div>
        </div>
    </main>
  )
}

const styles = {
    summary:{

    },
    project_button_group:{
        backgroundColor:"white",
        flexDirection:'row',
        width:'50%',
        justifyContent:'space-evenly'
    }
}

export default IndexPage
