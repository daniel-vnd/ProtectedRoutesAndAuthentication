import { createContext, useContext, useState } from "react"
import RenderHeader from "../components/structure/Header"

const AuthContext = createContext();
const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
    const [ user, setUser ] = useState({ userName: "", isAuthenticated: false});

    const login = (userName, password) => {
        // Make a call to the authentication API to check  the username
        return new Promise((resolve, reject) => {
            if(password === "password") {
                setUser({userName: userName, isAuthenticated: true});
                resolve("success");
            } else {
                reject("Incorrect password");
            }
        })
        // Here after login we shouls save the data into a local storage so that when the page is refreshed not to send it back to the login 
        // if he login already, and also a timestamp after what time the session is expired and the user will be send back to login.
    }


    const logout = () => {
        setUser({...user, isAuthenticated: false});
    }


    return (
        <AuthContext.Provider value={{user, login, logout}} >
            <>
                <RenderHeader />
            </>
        </AuthContext.Provider>
    )
}

export {AuthData, AuthWrapper}