import { createContext, useContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [authenticated, setauthenticated] = useState(false)
    const [user, setuser] = useState({ role: 'admin' })
    const [questions, setquestions] = useState([])

    return (
        <Context.Provider value={{ authenticated, setauthenticated, user, setuser, questions, setquestions }}>
            {children}
        </Context.Provider>
    )
}

export const ContextState = () => {
    return useContext(Context);
}

export default ContextProvider;