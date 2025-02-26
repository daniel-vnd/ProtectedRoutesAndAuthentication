import { Link, Routes, Route } from "react-router-dom";
import { AuthData } from '../../auth/AuthWrapper'
import { nav } from './navigation'


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
    <div className="menu">
      {
        nav.map((r, i) => {
          if (! r.isPrivate && r.isMenu){
            return (
              <MenuItem key={i} r={r} />
            )
          } else if (user.isAuthenticated && r.isMenu) {
            return (
              <MenuItem key={i} r={r} />
            )
          } else {
            return false;
          }
        })
      }

      {
        user.isAuthenticated ? 
        <div className="menuItem"><Link to={'#'} onClick={logout}>Log Out</Link></div>
        :
        <div className="menuItem"><Link to={'/login'} onClick={logout}>Log In</Link></div>
      }
    </div>
  )
}

export  {RenderRoutes, RenderMenu};
