import {StyledBanner} from "./Components/styles/Banner.styled"
import Main from "./Components/Main";
import { StyledContainer } from "./Components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Components/Global";


const theme = {
  colors: {
    headings: "hsl(217, 19%, 35%)",
    p: "hsl(214, 17%, 51%)",
    span: "hsl(212, 23%, 69%)",
    background: "hsl(210, 46%, 95%)"
  },
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
      <StyledContainer >
        <StyledBanner />
        <Main />
      </StyledContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
