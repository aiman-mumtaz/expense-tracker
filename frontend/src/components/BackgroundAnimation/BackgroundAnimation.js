import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

export default function BackgroundAnimation() {
  const { width, height } = useWindowSize();


  const animate = keyframes`
    0%{
      transform:translate(0,0);
    }
    25%{
      transform:translate(${width/4}px,${height}px);
    }
    50%{
      transform:translate(${width/2}px,${height/2}px);
    }
    75%{
    transform:translate(${3*width/4}px,${height}px);
    }
    100%{
      transform:translate(${width}px,0);
    }
  `;
  const BackgroundStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position : absolute;
    margin-left: -37vh;
    margin-top: -37vh;
    // background : linear-gradient(180deg,#E2DAD6 0%, #F5EDED 100%); cream
    // background : linear-gradient(180deg,#03346E 0%, #6EACDA 100%); blue
    // background: linear-gradient(180deg,#F56692 0%, #F2994A 100%); red
    // background : linear-gradient(180deg,#88D66C 0%, #B4E380 100%); green
    background : linear-gradient(180deg,#2E236C 0%, #03346E 100%);
    filter: blur(400px);
    border-radius : 50%;
    animation : ${animate} 15s alternate linear infinite;
  `;
  return (
    <BackgroundStyled/>
  )
}
