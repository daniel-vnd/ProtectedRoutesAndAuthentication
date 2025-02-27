import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
  return (

    <Container fluid>
       <Row>
          <Col md={12}>
          <h2>About page</h2>
          <p>This is the text for the about page</p>
          </Col>
       </Row>
    </Container>

  )
}

export default About