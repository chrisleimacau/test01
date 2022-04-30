import React, { useEffect } from "react";

//imdbAPI 65f90792
const API_URL = 'https://www.omdbapi.com?apikey=65f90792';

const App = () => {

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovie('Spiderman');
    }, []);

    return (
        <>
            <h1>My Movie App</h1>
        </>
    );
}

export default App;