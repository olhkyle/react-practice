import { css, Global } from '@emotion/react'

const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1.5;
  }

  html {
    width: 100%;
    height: 100%;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding-left: 0;
  }
`

const GlobalStyle = (): JSX.Element => {
  return <Global styles={style}></Global>
}

export default GlobalStyle
