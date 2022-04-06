import axios from "axios";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <><div className="title">
      <h1> Pokédesk</h1>
      

    </div>
    
    <div className="App">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="nombre del pokemon" />
          </label>
        </form>
        {/* <ul>{pokemonData}</ul> */}
        {/* <p>{[pokemonData]}</p> */}
        {pokemonData.map((data) => {
          return (
            <><div className="container">
                <img src={data.sprites["front_default"]} />
                <div className="divTable">
                  <div className="divTableBody">
                    <div className="divTableRow">
                      <div className="divTableCell">Tipo</div>
                      <div className="divTableCell">{pokemonType}</div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Altura</div>
                      <div className="divTableCell">
                        {" "}
                        {Math.round(data.height * 3.9)}"
                      </div>

                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Peso</div>
                      <div className="divTableCell">
                        {" "}
                        {Math.round(data.weight / 4.3)} lbs
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Numero de batallas</div>
                      {<div className="divTableCell">{data.game_indices.length}</div> }
                      
                      
                    </div>
                  </div>
                </div>
              </div></>
          );
        }
        
          

        )
        
        }  
      </div>
      
      <>
      <div className="footer">
      <h1> Cristian Hernandez</h1>
      <h3> 2022</h3>
      

    </div>  
      </>

      </> 

      
  );
};

export default App;
