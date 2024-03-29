import "./Projects.css";
import { Link } from 'react-router-dom'
import javascript from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import css from '../../assets/img/css-8e01670c.svg'
import html from '../../assets/img/html-52732337.svg'

function Proyects() {
  return (
    <section id="projects" className="proyects-container">
      <div className="proyects-title">
        <h2>My Projects</h2>
      </div>
      <div className="proyects-card-container">
        <div className="proyect-1 proyect-container">
          <div className="top">
            <div className="proyect-text">
              <h3 className="proyect-title">Noir Store</h3>
              <p className="proyect-description">
                A personalized ecommerce for an eSports store. Beautiful, functional
                and minimalistic.
              </p>
            </div>
            <div className="bottom">
              <h3>Tech used</h3>
              <div className="proyect-skills">
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
              </div>
            </div>
          </div>

          <div className="down">
            <Link
              to="https://noiresports.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="img-proyect-1"></div>
            </Link>
            <div className="proyect-links">
              <Link
                to="https://noiresports.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-globe"></i>
              </Link>
              <Link to="https://github.com/tomasbianco09/Proyect-ReactJs"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bx bx-sm bx-code-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proyects;