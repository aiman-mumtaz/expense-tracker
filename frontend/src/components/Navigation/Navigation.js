import React from 'react'
import styled from 'styled-components'
import { menuItems } from '../../utils/menuItems';
import { logout } from '../../utils/icons';

export default function Navigation({ active, setActive }) {
    const NavStyled = styled.nav`
        padding: 2rem 1.5rem;
        width: 374px;
        height: 100%;
        background: rgba(234, 232, 239, .78);
        border : 3px solid #FFFFFF;
        backdrop-filter: blur(4.5px);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        gap: 2rem;
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
        h2{
            color : #063970;
        }
        p{
            color: rgba(6, 57, 112, .6);
        }
    }
    .menuItems{
        flex:1;
        display:flex;
        flex-direction:column;
        li{
            display:grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(6, 57, 112, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(6, 57, 112, .6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(6, 57, 112, 1) !important;
        i{
            color: rgba(6, 57, 112, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #063970;
            border-radius: 0 10px 10px 0;
        }
    }
    `;


  return (
    <NavStyled>
        <div className='userContainer'>
            <img alt='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfU6QUaoLZ2rLSY3nevyzqHCp4vvg_ozc8Q&s'></img>
            <div className='userInfo'>
                <h2>Aiman</h2>
                <p>Balance</p>
            </div>
        </div>
        <ul className='menuItems'>
            {
            menuItems.map((item)=>{
                return (
                <li onClick={()=>setActive(item.id)} key={item.id} className={active === item.id ? 'active':null}>
                    {item.icon}
                    <span>{item.title}</span>
                </li>
                )
            })
            }
        </ul>
        <div className='bottomNav'>
            <li>{logout} Log Out</li>
        </div>
    </NavStyled>
  )
}
