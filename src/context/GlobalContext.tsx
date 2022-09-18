import React, { createContext, FC, useContext } from 'react'

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<any>(null)

export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [showLoader, setShowLoader] = React.useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
