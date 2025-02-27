import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container fluid>
       <Row>
          <Col md={12}>
          <h2>Home page</h2>
          <p>This is the text for the home page</p>
          </Col>
       </Row>
    </Container>
  )
}

export default Home