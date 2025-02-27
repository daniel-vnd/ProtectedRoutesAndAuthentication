import { Link, Routes, Route } from "react-router-dom";
import { AuthData } from '../../auth/AuthWrapper'
import { nav } from '../structure/navigation'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {
        nav.map((r, i) =>{
          if (r.isPrivate && user.isAuthenticated) {
            return <Route key={i} path={r.path} element={r.element} />
          } else if (! r.isPrivate) {
            return <Route key={i} path={r.path} element={r.element} />
          } else {
            return false;
          }
        })
      }
    </Routes>
  )
}


const RenderMenu = () => {
  const { user, logout} = AuthData();

  const MenuItem = ({r}) => {
    return (
      <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
    )
  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">Authentication tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" class="ms-auto justify-content-end">
          <Nav className="me-auto">
              {
                nav.map((r, i) => {
                  if (! r.isPrivate && r.isMenu){
                    return (
                      <Nav.Link href={r.path}>{r.name}</Nav.Link>
                    )
                  } else if (user.isAuthenticated && r.isMenu) {
                    return (
                      <Nav.Link href={r.path}>{r.name}</Nav.Link>
                    )
                  } else {
                    return false;
                  }
                })
              }

              {
                user.isAuthenticated ? 
                <Nav.Link href="/">Log Out</Nav.Link>
                :
                <Nav.Link href="/login">Log In</Nav.Link>
              }
          </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>

    
      
    
  )
}

export  {RenderRoutes, RenderMenu};
