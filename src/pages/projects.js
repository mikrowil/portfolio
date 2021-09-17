import React from 'react'
import Particles from "react-tsparticles";
import '../css/styles.css'
import CustomParticleBackground from "../components/CustomParticleBackground";
const ProjectsPage = ()=>{

    return<div>
        <CustomParticleBackground/>
        <p>Projects</p>

    </div>
}

const styles = {
    header:{
        textAlign:'center'
    }
}

export default ProjectsPage
