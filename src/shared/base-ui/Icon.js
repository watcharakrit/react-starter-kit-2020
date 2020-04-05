/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Icon
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

export default ({ name, ...rest }) => {
  rest.className = `${rest.className ? `${rest.className} ` : ''}icon-custom-${name}`
  return <IconStyles {...rest} />
}

const IconStyles = styled.i`
  font-size: ${(props) => (props.size ? props.size : '16px')};
  color: ${(props) => (props.color ? props.color : '')};
`
