import React, { useState, useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaReddit } from 'react-icons/fa';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm } from '../../store/redditSlice';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('');

    const searchTerm = useSelector(selectSearchTerm);
    const dispatch = useDispatch();

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
    };

    useEffect(() => {
        setSearchTermLocal(searchTerm);
      }, [searchTerm]);

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
      };

    return (
        <header>
            <div className="logo"> 
                <FaReddit className="logo-icon"/>
                <p>
                    Reddit<span>Go</span>
                </p>
            </div>
            <form className="search" onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTermLocal}
                    onChange={onSearchTermChange}
                    aria-label="Search posts"
                >
                </input>
                <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                    <BiSearchAlt />
                </button>
            </form>
        </header>
    );
};

export default Header;