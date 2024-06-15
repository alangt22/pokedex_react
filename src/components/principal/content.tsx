import React, { useState, useEffect } from 'react';
import * as C from './style';
import * as S from './styleCart';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
}

const Content: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(null);
  const [showGenerationButtons, setShowGenerationButtons] = useState<boolean>(true);
  const [showBackButton, setShowBackButton] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (selectedGeneration !== null) {
      fetchGenerationPokemon(selectedGeneration);
    }
  }, [selectedGeneration]);

  const fetchGenerationPokemon = async (generation: number) => {
    try {
      let offset = 0;
      let limit = 0;

      if (generation === 1) {
        offset = 0;
        limit = 151;
      } else if (generation === 2) {
        offset = 151;
        limit = 100;
      } else if (generation === 3) {
        offset = 251;
        limit = 135;
      } else if (generation >= 4 && generation <= 8) {
        offset = (generation - 4) * 135 + 386;
        limit = 135;
      } else {
        throw new Error('Invalid generation');
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Pokémon');
      }
      const data = await response.json();
      const results: { name: string }[] = data.results;
      const promises = results.map(result => fetchPokemon(result.name));
      const pokemonData = await Promise.all(promises);
      setPokemonList(pokemonData);
      setShowGenerationButtons(false);
      setShowBackButton(true);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const fetchPokemon = async (pokemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error(`Pokemon ${pokemonName} not found`);
    }
    return await response.json();
  };

  const handleGenerationClick = (generation: number) => {
    setSelectedGeneration(generation);
  };

  const handleBackButtonClick = () => {
    setSelectedGeneration(null);
    setPokemonList([]);
    setShowGenerationButtons(true);
    setShowBackButton(false);
    setSelectedPokemon(null); 
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePokemonClick = async (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon); 
 
  };

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <C.Img src="https://github.com/alangt22/pokedex_react/blob/main/assests/fundo.jpg?raw=true"/>
      
      {showGenerationButtons && (
        <C.Btn>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(generation => (
            <button key={generation} onClick={() => handleGenerationClick(generation)}>
              Generation {generation}
            </button>
          ))}
        </C.Btn>
      )}
      
      {showBackButton && (
        <S.Input type="text" placeholder="Search Pokémon" value={searchTerm} onChange={handleInputChange} />
      )}
      
      <S.Poke>
        {filteredPokemonList.map(pokemon => (
          <div key={pokemon.name} onClick={() => handlePokemonClick(pokemon)}> {}
            <div className='card'>
               <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          </div>
        ))}
        {showBackButton && <button onClick={handleBackButtonClick}>Voltar</button>}
      </S.Poke>

      {}
      {selectedPokemon && (
      <S.Details>
        <S.DetailsTitle>Detalhes do Pokémon</S.DetailsTitle>
        <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
        <p>Name: {selectedPokemon.name}</p>
        <p>Abilities: {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        <p>Types: {selectedPokemon.types.map(type => type.type.name).join(', ')}</p>
        <S.DetailsButton onClick={() => setSelectedPokemon(null)}>Fechar</S.DetailsButton>
      </S.Details>
      )}
    </>
  );
};

export default Content;
