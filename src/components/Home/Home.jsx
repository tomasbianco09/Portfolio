import React from 'react'
import './Home.css'
import g2 from '../../assets/img/tomi.jpeg'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import css from '../../assets/img/css-8e01670c.svg'
import html from '../../assets/img/html-52732337.svg'
import git from '../../assets/img/git.svg'

import { Link } from 'react-scroll'


const Home = () => {
    return (
        <section id="home" className='home-container'>
            <div className='home-container-2'>
                <div className='home-title'>
                    <h1>Frondtend Developer.</h1>
                    <p className="home-p">Hi, I'm <span>Tomas Bianco</span>.
                        <br />
                        A passionate Frondtend Web Developer from Argentina.</p>
                    <ul class="home-ul">
                        <li className='home-link-img'>
                            <a href="https://github.com/tomasbianco09" target="_blank">
                                <i className="bx bx-md bxl-github"></i>
                            </a>
                        </li>
                        <li className='home-link-img'>
                            <a href="https://www.linkedin.com/in/facundo-bianco-2625ab248/" target="_blank">
                                <i className="bx bx-md bxl-linkedin-square"></i>
                            </a>
                        </li>
                        <li className='home-link-img'>
                            <a href="https://www.instagram.com/tomibianco/?hl=es-la" target="_blank">
                                <i class='bx bx-md bxl-instagram' ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='home-img'>
                    <img src={g2} alt="" />
                    <div className='home-files'>
                        <li>
                            <a href="/bianco-cv.pdf" target="_blank">
                                <i class='bx bx-md bxs-file'></i>
                            </a>
                        </li>
                        <li>
                            <Link to="projects"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            ><i class='bx bx-md bxs-briefcase-alt-2'></i></Link>
                        </li>
                    </div>
                    
                </div>
            </div>

            <div className='home-skills'>
                <div>
                    <h3>My Skills</h3>
                </div>
                <div className='skills'>
                    <div className='skill-a'>
                        <img src={javascript} alt="" />
                    </div>
                    <div className='skill-b'>
                        <img src={react} alt="" />
                    </div>
                    <div className='skill-c'>
                        <img src={css} alt="" />
                    </div>
                    <div className='skill-d'>
                        <img src={html} alt="" />
                    </div>
                    <div className='skill-e'>
                        <img src={git} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home