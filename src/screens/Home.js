import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AppContext } from '<State>/AppProvider'

import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import media from '<Styles>/media-queries'
import { Icon, Container } from '<UI>'

import MainLayout from '<Layouts>/Main'

function Home() {
  const { userProfile, setIsLoadingPage } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingPage(false)
    }, 500)
  })

  return (
    <MainLayout>
      <AppContainer className="App">
        <Icon name="recommendation" /> Edit <code>src/App.js</code> and save to reload.{' '}
        <Username className="button">{userProfile}</Username> {process.env.REACT_APP_API_HOSTNAME}
        ทดสอบภาษาไทย
      </AppContainer>
    </MainLayout>
  )
}

export default Home

const AppContainer = styled(Container)`
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
