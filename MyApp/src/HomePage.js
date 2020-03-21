import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


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
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
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
  </Container>
</Jumbotron>
</div> 
)}


export default HomePage; 