import { css } from 'styled-components'
import colors from '<Styles>/colors'
import fonts from '<Styles>/fonts'
import media from '<Styles>/media-queries'

export default css`
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: ${fonts.family.system};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    line-height: 1.15;
    text-size-adjust: 100%;

    @media (${media.screenMdMin}) {
      max-width: 768px;
      margin: 0 auto;
    }

    > div#root {
      height: inherit;

      > div {
        height: inherit;
      }
    }
  }
`
