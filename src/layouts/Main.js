import React, { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import globalStyles from '<Styles>/global-styles'
import { AppContext } from '<State>/AppProvider'

export default ({ children, hideNavFooter }) => {
  const { accessToken, isLoadingPage } = useContext(AppContext)

  return (
    <ContainerStyled>
      <GlobalStyle />
      <Content>{children}</Content>

      {isLoadingPage && <LoadingOverlay>Loading...</LoadingOverlay>}
    </ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Content = styled.div`
  flex: 1;
  background-color: white;
`

const LoadingOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 9999;
`

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`
