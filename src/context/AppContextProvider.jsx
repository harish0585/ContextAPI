import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext =  createContext();

const AppContextProvider = ({children}) => {
    const [token, setToekn] = useState("asdfgbvaqwerfghn");
    const [theme, setTheme] = useState("Pavan theme")
    
  return (
    <AppContext.Provider value={{token, theme}} >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
