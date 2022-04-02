import { StyledMain } from "./styles/Main.styled"
import Author from "./Author"
import Share from "./Share";

const Main = () => {
  return (
    <StyledMain>
        <h1 className="article">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p className="desc">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        <Author />
        <Share />
    </StyledMain>
  )
}

export default Main