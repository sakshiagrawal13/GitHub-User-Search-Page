import React, { useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export default function SearchBar({setResults, setDisplay,setIsVisible, setDisplayName}) {

    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
        if (e.key === 'Enter') {
          handleSearchClick()
        }

    }

    const handleSearchClick = async() => {
      try {
        setIsVisible(true);
        const response = await fetch(`https://api.github.com/search/users?q=${input}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data.items)
          console.log(data)
          setDisplay(true)
          setDisplayName(input)
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
      
    };

  return (
    <div className="input-wrapper">
       <input className='header-search-input jump-to-field' placeholder="Search Github" value={input} onChange={(e) => handleChange(e)} onKeyDown={handleChange}/>
       <FaSearch id='search-icons' onClick={handleSearchClick}/>
    </div>
  )
}
