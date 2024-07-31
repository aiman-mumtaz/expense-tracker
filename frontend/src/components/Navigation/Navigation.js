import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems';
import { logout } from '../../utils/icons';

export default function Navigation() {
    const NavStyled = styled.nav`
        width : 375px;
        padding: 20px 10px;
        height: 100%;
        border-radius: 20px;
        background: rgba(234, 232, 239, .78);
        border : 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content : space-between;
        gap:2rem;
        
    .userContainer {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
    }
    `;
  return (
    <NavStyled>
        <div className='userContainer'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfU6QUaoLZ2rLSY3nevyzqHCp4vvg_ozc8Q&s'></img>
            <div className='userInfo'>
                <h2>Aiman</h2>
                <p>Balance</p>
            </div>
        </div>
        <ul className='menuItems'>
            {
            menuItems.map((item)=>{
                return <li key={item.id}>
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            })
            }
        </ul>
        <div className='bottomNav'>
            <li>{logout} Log Out</li>
        </div>
    </NavStyled>
  )
}
