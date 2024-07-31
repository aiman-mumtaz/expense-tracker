import styled from "styled-components";
// import { MainLayout } from './styles/Layouts';
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";

function App() {
  const AppStyled = styled.div`
    height: 100vh;
    position: relative;
    main{
      flex: 1;
      background: rgba(252, 246, 249, 0.78);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
  `;
  return (
    <AppStyled className="App">
      <BackgroundAnimation/>
      {/* <MainLayout> */}
      {/* <h1>Hi</h1> */}
      {/* </MainLayout> */}
    </AppStyled>
  );
}

export default App;
