import React, { useEffect, useState } from "react";
import "./HomePage.css";
import SearchBar from "./SearchBar/SearchBar";
import SearchResultsList from "./SearchResultsList/SearchResultsList";
import Card from './Card';

function HomePage() {
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log(display)
  }, [display])
  

  return (
    <div className="container">
      <img className="git-logo" src="github-logo.jpg" alt="git-img"></img>
      <div className="inner-cont" style={{height: display ? "88vh" : "auto" }}>
        <div className="search-bar-part" style={{borderRadius: !display && "25px", margin: !display && " 20px 0"}}>
        <div className="top-part">
            <Card
              imageSrc="profile_img.png"
              description="You can search any"
              title="Github Users"
            />
        </div>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} setDisplay={setDisplay} />
        </div>
        </div>
        {display && <div className="search-result">
          <SearchResultsList results={results} display={display} />
        </div>}
      </div>
    </div>
  );
}

export default HomePage;
