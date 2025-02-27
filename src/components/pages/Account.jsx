import { AuthData } from '../../auth/AuthWrapper'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Account = () => {

  const { user } = AuthData();

  return (
    <Container fluid>
       <Row>
          <Col md={12}>
          <h2>Account page</h2>
          <p>Username: { user.userName }</p>
          </Col>
       </Row>
    </Container>
  )
}

export default Account