import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { FaReddit } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(searchTerm);
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
                    value={searchTerm}
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