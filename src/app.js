import React, { useEffect, useState } from "react";

//imdbAPI 65f90792
const API_URL = 'https://www.omdbapi.com?apikey=65f90792';

const MovieCard = (props) => {
    return (
        <div className="col-md-3 col-xs-8 py-3">
            <div className="card rounded text-center">
                <img 
                    src={props.poster}
                    alt="This is the poster of movie"
                    className="card-image-top rounded"
                />
                <div className="card-body">
                    {props.movieName}
                </div>
            </div>
        </div>
    );
}

const App = () => {

    const [searchTitle, setSearchTitle] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchMovie = async (searchTitle) => {
        const response = await fetch(`${API_URL}&s=${searchTitle}}`);
        const data = await response.json();
        //console.log(data.Search);
        setSearchResult(data.Search);
    }

    useEffect(() => {
        searchMovie('spiderman');
    }, []);

    return (
        <div className="container text-center py-3">
            <h1>My Movie App</h1>
            <div className="d-flex flex-wrap justify-content-center mb-3">
                <input 
                    className="col-md-10 col-sm-12"
                    type="search" 
                    placeholder="Search for movies"
                    onChange={(e) => setSearchTitle(e.target.value)}
                    value={searchTitle}
                />
                <button 
                    className="btn btn-default btn-outline-primary col-2"
                    onClick={() => searchMovie(searchTitle)}
                >Search</button>
            </div>
            <div className="row">
                {searchResult.map(item => <MovieCard movieName={item.Title} key={item.imdbID} poster={item.Poster}/>)}
            </div>
        </div>
    );
}



export default App;