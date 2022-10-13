import styled, { css } from 'styled-components'
import {
    Colors
} from '../../utils/theme/colors'


export const StyledSubHeaderNav = styled.nav `
    width: 100vw;
    padding-inline: 8rem;
    background-color: #020202;
    box-shadow: 0 0.4rem 0.4rem rgba(0,0,0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    p {
        color: #A2A6B0; 
    } 
    
    nav ul {
        display: inline-flex;
        list-style: none;
        padding-left: 1.4rem;
    }

    nav ul li.title-list{
        padding-block: 1rem;
        color: #A2A6B0;
    }

    .sub-menu-1 hr {
        margin-top: 1.6rem;
        border: 1px solid #CACDD8;
    }

    .black {
        color: #000;
        font-weight: 500;
        
    }
    .black img {
        padding-right: 1.4rem;
        
    }
    .black.thin {
        color: #000;
        font-weight: 400;   
    }
    .black.thin img {
        padding-right: 1.4rem;
    }
    .black-p{ 
        color: #000;
    }

    .blue {
        color: #0156FF;
    }

    .margin-top {
        margin-top: 1.8rem;
    }
    .margin-top.bottom {
        margin-bottom: 1.8rem;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    a.contact-us {
        border-bottom: 2px solid #fff;
        border-radius: 0.2rem;
    }

    a.call-us { 
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    a.call-us img {
        margin-left: 1.4rem;
    }

    .sub-menu-1{
        display: none;
        user-select: none;
        z-index: 110;
        box-shadow: 0.2rem 0.2rem 1rem rgba(0,0,0, 0.25);
    }


    .sub-menu-1 ul li.margin{
        margin-left: 5rem;
    }


    nav ul li:hover .sub-menu-1 {
        display: block;
        position: absolute;
        background-color: #fff;
        margin-top: 1rem;
        margin-left: -3.8rem;
    }

    nav ul li:hover .sub-menu-1 ul{
        display: block;
    }

    nav ul li:hover .sub-menu-1 ul li{
        width: 26.2rem;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        transition: 0.5s;
        padding-block: 0.2rem;
        
    }
    nav ul li:hover .sub-menu-1 ul li a:hover{
        color: #0156FF;
        cursor: default;
        -webkit-user-drag: none;
    }
    
    @media (max-width: 900px) {
        nav, p, a {
            font-size: 1rem;
        }
      
        padding-inline: 2rem;
        
    }
`
export const StyledHeader = styled.div `
    .Header {
        height: 9.2rem;
        max-width: 100vw;
        background-color: #fff;
        border-bottom: 2px solid #CACDD8;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .Header nav {
        display: flex;
        text-align: center;
        justify-content: center;
        text-decoration: none;
        align-items: center;
    }

    .Header img{
        padding-right: 1.2rem;
        margin-left: 1.2rem;
    }

    .Logo {
        width: 10rem;
    }

    .Header nav a, .Button{
        color: #000;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 2.25rem;
        padding-block: 1rem;
        padding-inline: .5rem;
        transition: transform .2s; /* Animation */
    }
    .Header nav a:hover {
        transform: scale(1.2);
        transition: .1s;
        color: ${Colors.defaultBlue};
    }

    .Header .Button {
        color: ${Colors.whiteText};
        height: 3.7rem;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.1rem;
        padding: 2rem 2.6rem;
        gap: 1rem;
        background: ${Colors.defaultBlue};
        border: 2px solid ${Colors.defaultBlue};
        border-radius: .5rem;
        transition: .2s;
        cursor: pointer;
    }
    .Header .Button:hover {
        color: ${Colors.defaultBlue};
        background: none;
        transition: .3s;
    }

    .Header .user-area {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer
    }

    .search-box{
        position: relative;
        height: 60px;
        width: 60px;
        border-radius: 50%;
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .search-box.active{
        width: 70vw;
    }
    .search-box input{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50px;
        outline: none;
        padding: 0 60px 0 20px;
        font-size: 18px;
        opacity: 0;
    }
    .search-box input.active{
        opacity: 1;
        background: ${Colors.searchBarBackground};
    }

    .search-box .search-icon{
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        height: 60px;
        width: 60px;
        text-align: center;
        line-height: 60px;
        font-size: 22px;
        cursor: pointer;
        z-index: 1;
    }
    .search-box .search-icon.active{
        right: 5px;
        height: 50px;
        line-height: 50px;
        width: 50px;
        font-size: 20px;
        background: none;
        color: #fff;
    }

    .mobile {
        cursor: pointer;
        margin-inline: 2rem;
    }

    @media (max-width: 900px) {
        .Header {
            height: 6.2rem;
        }

        .Header nav a{
            font-size: 2rem;
            width: 60vw;
            padding-block: 2rem;
        }

        .Header img{
            margin-right: 0rem;
            margin-left: 0rem;
        }

        .Header .Button {
            height: 1.7rem;
            font-size: 3rem;
            line-height: 1.5rem;
            padding: 3.3rem 2.9rem;
        } 

        .Header nav a, .Button{

            margin-left: 0rem;
        }

        .input-alpha.active {
            font-size: 1.2rem;
        }
        .search-box.active{
            height: 4.5rem;
        }
    }

    @media (max-width: 1024px) {
        .Header .Logo {
            width: 8rem;
        }

        .Header {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-inline: 0rem;
            padding-inline: 0rem;
        }

        .Header nav a {
            color: ${Colors.whiteText};
        }
    }
`
export const StyledContainer = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);

    background: ${Colors.mobile.background};

    opacity: 0;
    pointer-events: none;


    transition: .7s;
    transform: translateY(10rem);
    
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: ${Colors.whiteText};
        transform: rotate(75deg);
        transition: .7s;
    }
    
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .5rem;
        transform: scale(0.3);
        transition: .7s;
    }
    nav a, button{
        transform: translateY(130px);
        transition: .7s;
    }
    
    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0rem);

        > svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1);
        }
        nav a, button {
            transform: translateY(0px);
        }

    `}
`;