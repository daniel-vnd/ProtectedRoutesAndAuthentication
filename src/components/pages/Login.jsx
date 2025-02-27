import { useReducer, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { AuthData } from '../../auth/AuthWrapper'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Login = () => {

  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer((formData, newItem) => {
    return ({...formData, ...newItem})
  }, {userName: "", password: ""});
  const [errorMessage, setErrorMessage] = useState(null)

  const doLogin = async () => {
    try {
      await login(formData.userName, formData.password)
      navigate("/account");
    } catch (error) {
      setErrorMessage(error)
    }
  }

  return (

  <Container fluid class="justify-content-between">
      <div className="title-holder">
          <h2>Login Page</h2>
          <div className='subtitle'>Get connected with us</div>
      </div>

      <Form className='contact-form'>
        <Row>
            <Col sm={12}>
                <Form.Control name="userName" type="text" defaultValue={formData.userName} placeholder="Username" onChange={(e) => setFormData({userName: e.target.value})} required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
                <Form.Control name="password" type='password' defaultValue={formData.password}  onChange={(e) => setFormData({password: e.target.value})} placeholder="Password" required />
            </Col>
        </Row>
        
        {errorMessage ? (<Row><Col sm={12} className="bg-warning">{errorMessage}</Col></Row>) : null}
        
        <Row>
          <Col sm={12}>
            <Button variant="primary" type='button' onClick={doLogin} >Submit</Button>
          </Col>
        </Row>
    </Form>
  </Container>
  )
}

export default Login