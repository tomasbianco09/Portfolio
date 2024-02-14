import "./About.css";
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div id="about" className="about-container">
            <div className="about-title">
                <h2>About Me</h2>
            </div>
            <div className="about-container-2">
                <div className="about-text">
                    <h3>An a Web Developer &#128187;</h3>
                    <p>
                    I am currently studying JavaScript to reinforce my knowledge and continue learning.<br />
                    My approach to programming encompasses a wide spectrum of essential technologies, including <span>JavaScript</span>, <span>React.js</span>, <span>GitHub</span>, <span>HTML</span>, and <span>CSS</span>. <br />
                    My work philosophy is based on <span>perseverance</span> and <span>commitment</span>, which means I tirelessly dedicate myself to overcoming challenges. <br />
                    My goal is to continue growing as a Full Stack developer. <br />
                    I'm excited about the opportunities that may arise and I'm ready to bring my passion and experience to any team I join. <br />
                    <span>Thank you for visiting my portfolio!</span>
                    </p>
                    
                </div>
            </div>
            <div className="about-things">
                <h3>Education</h3>
                
                <ul className="about-education">
                    <li>
                        <div>
                            <h4>Web Developer</h4>
                            <p>CoderHouse</p>
                            <p>Jun 2022 - Aug 2022</p>
                        </div>
                        <Link to="https://www.coderhouse.com/certificados/63279b6cbe9fec069089fa4a?lang=es" target="_blank">
                            <i className='bx bxs-file bx-md about-descarga'></i>
                        </Link>
                    </li>
                    <li>
                        <div>
                            <h4>JavaScript</h4>
                            <p>CoderHouse</p>
                            <p>Nov 2022 - Feb 2023</p>
                        </div>
                        <Link to="https://www.coderhouse.com/certificados/63f82b4b6b3ab4000e74819c?lang=es" target="_blank">
                            <i className='bx bxs-file bx-md about-descarga'></i>
                        </Link>
                    </li>
                    <li>
                        <div>
                            <h4>React Js</h4>
                            <p>CoderHouse</p>
                            <p>Jul 2023 - Aug 2023</p>
                        </div>
                        <Link to="https://www.coderhouse.com/certificados/64f9107bb3ccc23f5cf3ca13?lang=es" target="_blank">
                            <i className='bx bxs-file bx-md about-descarga'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;