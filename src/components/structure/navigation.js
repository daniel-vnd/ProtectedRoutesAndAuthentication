import  Home  from "../pages/Home"
import  About  from "../pages/About"
import  Login  from "../pages/Login"
import  Private  from "../pages/Private"
import  Account  from "../pages/Account"

export const nav = [
    { path: "/",        name: "Home",    element: <Home />,    isMenu: true,  isPrivate: false },
    { path: "/about",   name: "About",   element: <About />,   isMenu: true,  isPrivate: false },
    { path: "/login",   name: "Login",   element: <Login />,   isMenu: false, isPrivate: false },
    { path: "/private", name: "Private", element: <Private />, isMenu: true,  isPrivate: true },
    { path: "/account", name: "Account", element: <Account />, isMenu: true,  isPrivate: true },
]
