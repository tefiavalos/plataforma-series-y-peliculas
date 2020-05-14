import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home'
import { Video } from '@styled-icons/feather/Video'
import { Tv } from '@styled-icons/feather/Tv'



const NavStyled = styled.nav`
display: flex;
justify-content: space-around;
width: 100%;
padding: 2% 0;
background-color: black;
.home, .movies, .tv{
    color:white;
    width: 30px;

}
`

const Nav = () => {

    return(
        <NavStyled>
        <Link className='home' to='/'><Home/></Link>
        <Link className='movies' to='/movies'><Video/></Link>
        <Link className='tv' to='/tv'><Tv/></Link>
        </NavStyled>

    )
}

export default Nav