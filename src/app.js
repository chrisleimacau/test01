import React, { useEffect, useState } from "react";

//imdbAPI 65f90792
//const API_URL = 'https://www.omdbapi.com?apikey=65f90792';
const API_URL = 'https://shadowverse-evolve.com/wordpress/wp-content/images/cardlist/';
//const API_URL = '';
//BP01/bp01_128.png
/*
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
*/
const Card = (props) => {
    return (
        <div className="col-md-2 col-xs-3 py-3">
            <div className="card rounded text-center">
                <img 
                    src={props.cardImage}
                    alt="This card doesn't exist, please re-enter the card/pack number"
                    className="card-image-top rounded"
                    onClick={(e) => props.remove(e.target.id)}
                    id={props.id}
                />
            </div>
        </div>
    );
}

const App = () => {

const cardPackOption = ["bp01","sd01"];
const [selectedPack, setSelectedPack] = useState("bp01");
const [selectedCard, setSelectedCard] = useState("001");
const [mainDeck, setMainDeck] = useState([]);
const [exDeck, setEXDeck] = useState([]);

useEffect(() => {
    //console.log(mainDeck);
}, [mainDeck]);

const removeCardFromMainDeck = (index) => {
    const temp = [];
    mainDeck.map(item => temp.push(item));
    temp.splice(index, 1);
    //console.log(temp)
    setMainDeck(temp);
}

    return (
        <div className="container text-center py-3">
            <h1 className="py-3">Shadowverse Evolve deck builder</h1>
            <div className="row">
                <div className="col-md-2 border">
                    <h2 className="pt-3 mb-3">Search</h2>
                    <select className="mb-2" onChange={e => setSelectedPack(e.target.value)}>
                        {cardPackOption.map((item, index) => <option value={item} key={index}>{item}</option>)}
                    </select>
                    <input 
                        type="search" 
                        className="mb-2 w-100"
                        placeholder="Enter 3-digit card code"
                        onChange={e => setSelectedCard(e.target.value)}
                    />
                    <div className="card mb-2">
                        <img 
                        src={ (selectedCard.length === 3 && selectedCard < 300) ? `${API_URL}${selectedPack.toUpperCase()}/${(selectedPack === "bp01") ? selectedPack : selectedPack.toUpperCase()}${selectedPack === "bp01" ? "_" : "-"}${selectedCard}.png` : "#"}
                        alt="This card doesn't exist, please re-enter the card/pack number"
                        className="card-image-top rounded"
                        />
                    </div>
                    <button 
                        className="btn w-100 btn-primary mb-2" 
                        onClick={() => setMainDeck(prev => [...prev, `${selectedPack.toUpperCase()}/${(selectedPack === "bp01") ? selectedPack : selectedPack.toUpperCase()}${selectedPack === "bp01" ? "_" : "-"}${selectedCard}.png`])}
                    >
                        Add to main
                    </button>
                    <button 
                        className="btn w-100 btn-primary mb-2" 
                        onClick={() => setEXDeck(prev => [...prev, `${selectedPack.toUpperCase()}/${(selectedPack === "bp01") ? selectedPack : selectedPack.toUpperCase()}${selectedPack === "bp01" ? "_" : "-"}${selectedCard}.png`])}
                    >
                        Add to EX
                    </button>
                </div>
                <div className="col-md-10 border">
                    <h2 className="mt-3">Deck</h2>
                    <h5 className="mb-3">Clicks the card to remove from list</h5>
                    <hr/>
                    <div className="row">
                        <div className="d-flex ml-3">
                            <h3 className="text-left">Main ({mainDeck && mainDeck.length})</h3>
                        </div>
                        {mainDeck.map((item, index) => <Card 
                                                            cardImage={`${API_URL}${item}`} 
                                                            key={`${index}_${item}`} 
                                                            id={index} 
                                                            remove={removeCardFromMainDeck}
                                                        />)}
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="d-flex ml-3">
                            <h3 className="text-left">EX ({exDeck.length})</h3>
                        </div>
                        {exDeck.map((item, index) => <Card cardImage={`${API_URL}${item}`} key={index} />)}
                    </div>
                </div>
            </div>  
        </div>
    );
}



export default App;