import React from 'react'
import './Home.css'
import g2 from '../../assets/img/pablo.jpg'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <section id="home" className='introSection'>
            <div className='homeIntro'>
                <div className='introTitle'>
                    <h1>Full-Stack Developer.</h1>
                    <p className="intro-p">Hi, I'm <span>Tomas Bianco</span>.
                        <br />
                        A passionate Full Stack Web Developer from Argentina.</p>
                    <ul class="intro-ul">
                        <li className='linkImg'>
                            <a href="https://github.com/tomasbianco09" target="_blank">
                                <i className="bx bx-md bxl-github"></i>
                            </a>
                        </li>
                        <li className='linkImg'>
                            <a href="https://www.linkedin.com/in/facundo-bianco-2625ab248/" target="_blank">
                                <i className="bx bx-md bxl-linkedin-square"></i>
                            </a>
                        </li>
                        <li className='linkImg'>
                            <a href="https://www.instagram.com/tomibianco/?hl=es-la" target="_blank">
                                <i class='bx bx-md bxl-instagram' ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='intro-img'>
                    <img className='homeImg' src={g2} alt="" />
                    <div className='homeFiles'>
                        <li>
                            <Link>
                                <i class='bx bx-md bxs-file'></i>
                            </Link>
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
            <div className='introSkills'>
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
                </div>
            </div>
        </section>
    )
}

export default Home