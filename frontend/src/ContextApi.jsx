import { createContext, useContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [authenticated, setauthenticated] = useState(false)
    const [user, setuser] = useState({role: 'admin'})

    return (
        <Context.Provider value={{ authenticated, setauthenticated, user, setuser }}>
            {children}
        </Context.Provider>
    )
}

export const ContextState = () => {
    return useContext(Context);
}

export default ContextProvider;