import React,{useEffect} from "react"
import '../css/styles.css'
import '../css/bootstrap.min.css'
import '../fontawesome/css/all.min.css'
import {Link} from "gatsby";
import CustomParticleBackground from "../components/CustomParticleBackground";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import ProjectsList from "../components/ProjectsList";


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
                            <ProjectsList/>
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
