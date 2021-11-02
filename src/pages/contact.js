import React, {useState} from 'react'
import CustomParticleBackground from "../components/CustomParticleBackground";
import Title from "../components/Title";
import NavBar from "../components/NavBar";
import Axios from 'axios'
import FormOMine from '../components/FormOMine'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component{


    render() {
        return(<main className={"index_main_container"}>
            <CustomParticleBackground/>
            <div className="tm-container">
                <div>
                    <div className="tm-row pt-4">
                        <div className="tm-col-left">
                            <Title/>
                        </div>
                        <div className="tm-col-right">
                            <NavBar activePage={"contact"}/>
                        </div>
                    </div>

                    <div className="tm-row">

                        <main className="tm-col-right">
                            <section className={'contact_container'}>
                                <h2>Contact Me</h2>
                                <p>If you would like to get in touch, send me an email or follow me on my
                                    social accounts.</p>
                                <FormOMine />
                            </section>
                        </main>
                    </div>
                </div>

            </div>
        </main>)
    }
}

export default Contact
