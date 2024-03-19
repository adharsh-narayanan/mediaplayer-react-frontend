import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
faVideo

function Header() {
  return (
    <Navbar className="bg-body-dark">
    <Container>
      <Navbar.Brand >
      <FontAwesomeIcon icon={faVideo} style={{color:'orange',fontSize:'30px'} } />{' '}
       <span style={{color:`white`,fontSize:'30px'}} className=''> Media Player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header