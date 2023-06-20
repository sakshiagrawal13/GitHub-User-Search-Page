import React, { useEffect, useState } from "react";
import "./Home_Page.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";

function Home_Page() {
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayName, setDisplayName] = useState();

  useEffect(() => {
    console.log(display);
  }, [display]);

  return (
    <>
      <div className="container">
        <div className="background">
          <img className="bg-img" src="hero-bg.webp"></img>
        </div>
        <header>
          <div className="logo">
            <img src="git-image.png" alt="GitHub Logo" />
          </div>
          <div className="search-bar-container">
            <SearchBar setResults={setResults} setIsVisible={setIsVisible} setDisplay={setDisplay} setDisplayName={setDisplayName} />
          </div>
        </header>
        <div className="drone">
          <img className="drone-img" src="./hero-drone.webp" />
        </div>
        <div className="main">
          <div className="content">
            <img src="lines-hero.svg" className="img1" />
            <div className="helping-text">
              <h1>Let's Search Github Users</h1>
              <p>
                The GitHub Search Users page allows you to discover and explore
                users on GitHub. you'll find a search bar where you can enter
                the name or username of the user you're looking for.
              </p>
            </div>
          </div>
        </div>
      </div>

      {isVisible ? (
        <div className="fixed-black">
          <div className="user-search">
            <span className="x-ico" onClick={() => setIsVisible(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </span>
            <h6 className="search-heading">
              Search result for :
              <span className="decorate-text"> { displayName }</span>
            </h6>
            <div className="main-body">
               {
                display ? (results.length > 0 ? results.map((key , id) =>  <SearchResult result={key} key={id} color={'#fff'} />) : <img className="no-search-img" src='search_no_result.webp' /> ) : null
               }
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Home_Page;
