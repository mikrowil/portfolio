import React from 'react'
import CustomParticleBackground from "../components/CustomParticleBackground";
import Title from "../components/Title";
import NavBar from "../components/NavBar";

const About = ()=>{
    return<main className={"index_main_container"}>
        <CustomParticleBackground/>
        <div className="tm-container">
            <div>
                <div className="tm-row pt-4">
                    <div className="tm-col-left">
                        <Title/>
                    </div>
                    <div className="tm-col-right">
                        <NavBar activePage={"about"}/>
                    </div>
                </div>

                <div className="tm-row">

                    <main className="tm-col-right">
                        <div className={"about_container"}>
                            <h2>What have I been up too?</h2>
                            <p>
                                For the past 4 years, I have worked as a server for Boston Pizza, allowing me to learn how to work in a stressful and fast paced environment.
                                While working, I went to Douglas College in the Computer and information systems program. After four years, I have completed my graduation, and I am
                                looking to further my career for the next chapter of my life.
                            </p>
                            <h2>Leadership skills</h2>
                            <p>
                                Before starting my job as a server, I taught taekwondo while being a member of a leadership program.
                                Being able to share my knowledge with others has always been something I enjoy.
                            </p>
                            <h2>Always looking for a challenge</h2>
                            <p>
                                Programming has become more than a hobby to me. After graduating from Douglas College I continued to research new technologies
                                to further my understanding of what modern and up to date skills would be needed. I love pushing myself to learn new skills and programming languages.
                                Coding challenges and projects are some of my favorite pass times.
                            </p>

                        </div>
                    </main>
                </div>
            </div>

        </div>
    </main>
}

export default About
