import { useMemo, useState } from "react";
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts';
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bg});
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
  
  const [active,setActive] = useState(1);

  return (
    <AppStyled bg={bg} className="App">
      <BackgroundAnimation/>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
      </MainLayout>
    </AppStyled>
  );
}

export default App;
