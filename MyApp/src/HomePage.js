import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FlightContainer from './FlightContainer'



function HomePage () {
 return(  
    <div> 
    <br />
    <Navbar bg="primary" variant="dark" >
      <Navbar.Brand href="#home">Happy Airways</Navbar.Brand>
      <Nav className="mr-auto" md={{ span: 4, offset: 4 }}>
        <Nav.Link href="#book">Book</Nav.Link>
        <Nav.Link href="#signup">Sign-Up</Nav.Link>
        <Nav.Link href="#login">Log-In</Nav.Link>
      </Nav>
      
    </Navbar>
  
    <br />     
<Jumbotron fluid>
  <Container>
    <h1>Happy Airways</h1>
    <p>
      Always the best flight. Always the best price. Stay happy. 
    </p>
    <ButtonGroup toggle>
    <ToggleButton variant="outline-primary" type="radio" name="radio" defaultChecked value="1">
      Roundtrip 
    </ToggleButton>
    <ToggleButton variant="outline-primary" type="radio" name="radio" value="2">
      One-Way
    </ToggleButton>
  </ButtonGroup>
  <br></br>
  <br></br>
  <Row>
  <Col>Depart  
    <InputGroup className="mb-3">
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
     </InputGroup>
    </Col>
  <br></br>
  <Col>Arrive 
    <InputGroup className="mb-3">
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
     </InputGroup>
    </Col>
    <Col>Depart Date 
    <InputGroup className="mb-3">
    <FormControl
      aria-label="Default"
      placeholder="mm/dd/yyyy"
      aria-describedby="inputGroup-sizing-default"
    />
     </InputGroup>
    </Col>
    <Col>Return Date 
    <InputGroup className="mb-3">
    <FormControl
      aria-label="Default"
      placeholder="mm/dd/yyyy"
      aria-describedby="inputGroup-sizing-default"
    />
     </InputGroup>
     <Button variant="primary" class="float--right"> 
      Book
    </Button>
    </Col>
    </Row>
  </Container>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h1>Today's Specials</h1>
    <FlightContainer />
  </Container>
</Jumbotron>

<Jumbotron fluid>
  <Container>
    <h1>Happy Airways Information</h1>
  </Container>
</Jumbotron>
</div> 
)}


export default HomePage; 