import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AppContext } from '<State>/AppProvider'

import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import media from '<Styles>/media-queries'

import MainLayout from '<Layouts>/Main'

function About() {
  const { userProfile, setIsLoadingPage } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false)
    }, 500)
  })

  return (
    <MainLayout>
      <AppContainer className="App">About</AppContainer>
    </MainLayout>
  )
}

export default About

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  color: ${colors.green};
  font-weight: ${fonts.bold};

  @media (${media.screenMdMax}) {
    color: ${colors.purpleCi};
    font-weight: ${fonts.regular};
  }
`

const Username = styled.span`
  .no-touch &:hover,
  .touch &.touch {
    color: yellow;
  }
`
