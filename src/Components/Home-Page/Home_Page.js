import React, { useEffect, useState } from 'react';
import './Home_Page.css'
import SearchBar from "../SearchBar/SearchBar";
// import SearchResultsList from "./SearchResultsList/SearchResultsList";

function Home_Page() {

    const [results, setResults] = useState([]);
    const [display, setDisplay] = useState(false);
  
    useEffect(() => {
      console.log(display)
    }, [display])

  return (
    <div className="container">
        <div className="background">
            <img className='bg-img' src="hero-bg.webp"></img>
        </div>
    <header>
      <div className="logo">
        <img src="git.png" alt="GitHub Logo" />
      </div>
      <div className="search-bar-container">
          <SearchBar setResults={setResults} setDisplay={setDisplay} />
      </div>
    </header>
    <div className='drone'>
        <img className='drone-img' src='./hero-drone.webp' />
    </div>
    <div className='main'>
      <div className='content'>
            <img src='lines-hero.svg' />
        <div className='helping-text'>
            <h1>Let's Search Github Users</h1>
            <p>The GitHub Search Users page allows you to discover and explore users on GitHub.
                you'll find a search bar where you can enter the name or 
                username of the user you're looking for.
            </p>
        </div>
      </div>
    </div>  
  </div>
  )
}

export default Home_Page