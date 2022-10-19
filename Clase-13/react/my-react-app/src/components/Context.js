import React from 'react'

export default function Context({children}) {
const TestContext = React.createContext("Test")
  return (
    <TestContext.Provider value={"Test"}>
        {children}
    </TestContext.Provider>
  )
}
