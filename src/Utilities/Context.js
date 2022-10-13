import {createContext, useState, useContext} from "react";

export const userContext = createContext({
  userInfo: null,
  logIn: () => {},
  logOut: () => {},
});

const PERSON = { name: "Guest", isGuest: true };

export const UserContextProvider = (({children})=>{
    const [person, setPerson] = useState(PERSON)

    const logIn = ((setName)=>{
        setPerson({name: setName,  isGuest: false})
    })
    const logOut = (()=>{
        setPerson(PERSON)
    })

    return (
        <userContext.Provider value={{person, logIn, logOut}}>
              {children}
        </userContext.Provider>
    )
})

export const UseUserContext = (()=>{
    const {person, logIn, logOut} = useContext(userContext)

    return {person, logIn, logOut}
})
