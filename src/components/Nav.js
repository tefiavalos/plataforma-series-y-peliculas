import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home'
import { Video } from '@styled-icons/feather/Video'
import { Tv } from '@styled-icons/feather/Tv'
import { Search } from '@styled-icons/feather/Search'
import SearchSection from './SearchSection'
import useFetch from '../hooks/useFetch';



const NavStyled = styled.nav`
display: flex;
justify-content: flex-start;
width: 100%;
padding: 1% 0;
background-color: rgb(35, 39, 42);
.container-icons{
    width: 50%;
    display: flex;
    justify-content: space-around;
    .home, .movies, .tv{
        color:rgb(220, 221, 222);
        width: 35px;
        : hover{
            color: #2196f3;
        }
        : focus{
            color: #2196f3;
        }
    }
    form{
        display: flex;
        .search{
        color:rgb(220, 221, 222);
        width: 35px;
        margin:0;
        : hover{
            color: #2196f3;
        }
        : focus{
            color: #2196f3;
        }
        }
    input{
        width:300px;
        font-size: 20px;
    color: rgb(220, 221, 222);
    cursor: pointer;
    background: transparent;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 10px 20px 5px 40px;
    outline-color: rgb(220, 221, 222);
}
}
    }
    
}
@media(max-width: 910px){
    display:flex;
    justify-content: space-between;
    .container-icons{   
        width: 100%;
        .home, .movies, .tv, .search{
            width: 20px;
        }
    form{
        flex-direction: row;
        .search{
            width: 20px;
        }
    input{
        width: 80px;
        height: 10px;
        font-size: 12px;
        padding: 5px 10px 2px 20px;
    }
}
}

@media(max-width: 375px){
    display:flex;
    justify-content: space-between;
    .container-icons{   
        width: 100%;
        margin: 5px 0;
        .home, .movies, .tv, .search{
            width: 20px;
        }
    form{
        flex-direction: row;
        .search{
            width: 20px;
        }
    input{
        width: 80px;
        height: 10px;
        font-size: 12px;
        padding: 5px 10px 2px 20px;
    }
}
}

`

const SearchInput = styled.input``

const Nav = () => {

    const history = useHistory();
    const [formSearch, setFormSearch] = useState('');



    const handleChange = (e) => {
        setFormSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${formSearch}/page`);
        setFormSearch('')
    }



    return (
        <NavStyled>
            <div className="container-icons">
                <Link className='home' to='/'><Home /></Link>
                <Link className='movies' to='/movie'><Video /></Link>
                <Link className='tv' to='/tv'><Tv /></Link>
                <form onSubmit={handleSubmit}>
                    <Search className="search" />
                    <input type="text"
                        placeholder="Search"
                        onChange={handleChange}
                        value={formSearch}
                    />
                </form>
            </div>
        </NavStyled>

    )
}

export default Nav