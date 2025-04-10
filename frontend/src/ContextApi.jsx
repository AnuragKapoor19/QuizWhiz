import { createContext, useContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [authenticated, setauthenticated] = useState(false)
    const [user, setuser] = useState({})
    const [questions, setquestions] = useState([])
    const [score, setscore] = useState(0)
    const [users, setusers] = useState([])
    const [allQuestions, setallQuestions] = useState([])
    const [updateQuestion, setupdateQuestion] = useState({})

    return (
        <Context.Provider value={{ authenticated, setauthenticated, user, setuser, questions, setquestions, score, setscore, users, setusers, allQuestions, setallQuestions, updateQuestion, setupdateQuestion }}>
            {children}
        </Context.Provider>
    )
}

export const ContextState = () => {
    return useContext(Context);
}

export default ContextProvider;