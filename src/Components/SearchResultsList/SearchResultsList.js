import React from "react";
import "./SearchResultsList.css";
import SearchResult from "../SearchResult/SearchResult";

export default function SearchResultsList({ results, display }) {

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red}, ${green}, ${blue}, 0.4)`;
  }  

  return (
    <>
      {display && <div className="results-list">
        {results &&
          results?.map?.((result, id) => {
            const color = getRandomColor();
            return (
              <div className="results">
                <SearchResult result={result} key={id} color={color} />
              </div>
            );
          })}
      </div>}
    </>
  );
}
