import React from "react";

//imdbAPI 65f90792
//const API_URL = 'https://www.omdbapi.com?apikey=65f90792';
const API_URL = 'https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/';
//BP01/bp01_128.png

const wishlist = [
    'BP01/bp01_026.png',
    'BP01/bp01_026.png',
    'BP01/bp01_026.png',
    'BP01/bp01_032.png',
    'BP01/bp01_032.png',
    'BP01/bp01_032.png',
    'BP01/bp01_034.png',
    'BP01/bp01_034.png',
    'BP01/bp01_034.png',
    'BP01/bp01_043.png',
    'BP01/bp01_043.png',
    'BP01/bp01_043.png',
    'BP01/bp01_033.png',
    'BP01/bp01_033.png',
    'BP01/bp01_033.png',
    'BP01/bp01_048.png',
    'BP01/bp01_048.png',
    'BP01/bp01_048.png',
    'BP01/bp01_042.png',
    'BP01/bp01_046.png',
    'BP01/bp01_036.png',
    'BP01/bp01_036.png',
                ];

const wishlist2 = [
    'BP01/bp01_027.png',
    'BP01/bp01_027.png',
    'BP01/bp01_035.png',
    'BP01/bp01_035.png',
    'BP01/bp01_044.png',
    'BP01/bp01_044.png',
    'BP01/bp01_t06.png',
    'BP01/bp01_t06.png',
    'BP01/bp01_t04.png',
    'BP01/bp01_t04.png',
    'BP01/bp01_t04.png',
    ];

const Card = (props) => {
    return (
        <div className="col-md-2 col-xs-3 py-3">
            <div className="card rounded text-center">
                <img 
                    src={props.cardImage}
                    alt="This is the poster of movie"
                    className="card-image-top rounded"
                />
            </div>
        </div>
    );
}

const App = () => {

    return (
        <div className="container text-center py-3">
            <h1 className="py-3">Shadowverse Evolve card wishlist</h1>
            <div className="row">
                <div className="col-md-2 border">
                    <h2 className="pt-3">Search</h2>
                </div>
                <div className="col-md-10 border">
                    <h2 className="pt-3">Deck</h2>
                    <div className="row">
                        {wishlist.map(item => <Card cardImage={`${API_URL}${item}`}/>)}
                    </div>
                    <hr/>
                    <div className="row">
                        {wishlist2.map(item => <Card cardImage={`${API_URL}${item}`}/>)}
                    </div>
                </div>
            </div>  
        </div>
    );
}



export default App;