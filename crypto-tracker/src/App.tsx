import reset from "styled-reset";
import { ReactQueryDevtools } from "react-query/devtools";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import Router from "./Router";
import { isLightAtom } from "./atoms";
import { lightTheme, darkTheme } from "./theme";
// import Nav from "./components/Nav";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";

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
  top: 10px;
`;

const Contents = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-areas:
    "header header"
    "nav body";
  grid-template-columns: 70px auto;
  grid-template-rows: 50px auto;
`;

const Header = styled.div`
  grid-area: header;
  z-index: 10;
  position: fixed;
  display: flex;
  width: 100vw;
  top: 0;
  background-color: grey;
  padding: 1.25rem;
  height: 3.5rem;
  align-items: center;
`;

const Nav = styled.div`
  grid-area: nav;
  width: 100%;
  position: fixed;
  top: 90px;
`;

const Body = styled.div`
  grid-area: body;
  width: auto;
  margin: 40px;
  display: flex;
`;

function App() {
  const [isLight, setIsLightAtom] = useRecoilState(isLightAtom);
  const toggleTheme = () => setIsLightAtom((current) => !current);
  return (
    <>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        {/* <Contents className="dark"> */}
        <Contents>
          <Header>
            <Logo />
            <SearchBar />
          </Header>
          <Nav>
            <div>Home</div>
            <div>Favorite</div>
            <div>Theme</div>
            <div>Gas fee</div>
            <div>Settings</div>
          </Nav>
          <Body>
            <Router />
          </Body>
        </Contents>

        <ThemeToggleButton onClick={toggleTheme}>
          {isLight ? "LightMode" : "DarkMode"}
        </ThemeToggleButton>
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
