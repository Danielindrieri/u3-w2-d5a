import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const MyFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-5 pt-2 bg-success">
      <Container>
        <Row>
          <Col className="text-center">
            <a href="#home" className="fw-bold text-light text-decoration-none pe-3">
              Chi siamo
            </a> 
            <a href="#home" className="fw-bold text-light text-decoration-none pe-3">
              ISO 9001/WMO
            </a>
            <a href="#home" className="fw-bold text-light text-decoration-none pe-3">
              Contatti
            </a>
            <a href="#home" className="fw-bold text-light text-decoration-none pe-3">
              Policies
            </a>
            <a href="#home" className="fw-bold text-light text-decoration-none">
              Careers
            </a>
            <p className='pt-5'>© {year} Weather App </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
