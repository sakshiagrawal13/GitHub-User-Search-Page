import React from 'react';
import './SearchResult.css';
import '../Card.css';

export default function SearchResult({result, color}) {


    const handleProfileClick = () => {
        const githubProfileUrl = `https://github.com/${result.login}`;
        window.location.href = githubProfileUrl;
      };

  return (
    <div className="card-list" onClick={handleProfileClick}>
      <div className="left" style={{backgroundColor: color}}>
        <img className="card-image" src={result.avatar_url} alt={result.login}  />
      </div>
      <div className="right">
        <div className="card-content">
          <h2 className="card-result-title">{result.login}</h2>
        </div>
      </div>
    </div>
  )
}

