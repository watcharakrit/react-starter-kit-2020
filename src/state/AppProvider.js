import React, { createContext, useState } from 'react'

export const AppContext = createContext()

function AppProvider({ children }) {
  // Loading Popup
  const [isLoadingPage, setIsLoadingPage] = useState(true)

  // User Line Profile
  const [userProfile, setUserProfile] = useState('User Profile A')
  const [accessToken, setAccessToken] = useState('')

  // Language
  const [lang, setLang] = useState(null)

  // Ref
  const [referrerUrl, setReferrerUrl] = useState('')

  const value = {
    userProfile,
    setUserProfile,
    accessToken,
    setAccessToken,
    isLoadingPage,
    setIsLoadingPage,
    lang,
    setLang,
    setReferrerUrl,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
