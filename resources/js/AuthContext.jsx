import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
function AuthProvider() {

    // State de login
    const [userLogged, setUserLogged] = useState(false);

    // State del token
    const [token, setToken] = useState('');

    // State del id del usuario
    const [user, setUser] = useState({});


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUserLogged(true);
            setToken(token);
        }

        const user = localStorage.getItem('user');
        setUser(JSON.parse(user));
    }, [])

    return (
        <AuthContext.Provider
            value={{
                userLogged,
                setUserLogged,
                user,
                setUser,
                token,
                setToken
            }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;