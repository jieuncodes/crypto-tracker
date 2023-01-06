import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLightAtom } from "./atoms";
import { lightTheme, darkTheme } from "./theme";


const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Rubik', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }`;

const ThemeToggleButton = styled.button`
display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
  top: 10px;`;

function App() {
  const [isLight, setIsLightAtom] = useRecoilState(isLightAtom);
  const toggleTheme = () => setIsLightAtom((current) => !current);
  return (
    <>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Router />
        <ThemeToggleButton onClick={toggleTheme}>
          {isLight ? "LightMode" : "DarkMode"}
        </ThemeToggleButton>
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
      
    </>
  );
}

export default App;
