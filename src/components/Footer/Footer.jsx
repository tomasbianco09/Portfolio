import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

const Footer = () => {
  return (
    <div maxW='1320px'>
      <div className='footer-container '>
        <footer>
          <div className="foOter">
            {/* <Link to={"/"}>
              <img src={footerImg} alt="" width='50px' height='50px' />
            </Link> */}
            <span>&copy; 2023 Tomas Bianco</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer