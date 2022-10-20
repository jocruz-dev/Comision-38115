import React, {useState} from 'react'
import Contexts from './Items'

export default function ThemeContext({children}) {  

  const [state, setState] = useState(true)

  return (
    <Contexts.themeContext.Provider value={{value:state, func:setState}}>
        {children}
    </Contexts.themeContext.Provider>
  )
}
