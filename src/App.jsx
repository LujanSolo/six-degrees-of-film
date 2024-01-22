import { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ConnectionResult from './components/ConnectionResult';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [connectionResult, setConnectionResult] = useState("");

  const getActorId = async (name) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${name}`);

      const actor = response.data.results.find((result) => result.known_for_department === 'Acting');
      return actor ? actor.id : null;
    } catch (error) {
      console.error("Error fetching actor ID", error.message);
      throw error;
    }
  };

  const getActorFilmography = async (actorId) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/combined_credits?api_key=${API_KEY}`
      );

      return response.data.cast.map((credit) => ({
        title: credit.title || credit.name,
        id: credit.id,
      })
      );
    } catch (error) {
      console.error("Error fetching actor filmography", error.message);
      throw error;
    }
  };

  const handleSearch = async (name1, name2) => {
    try {
      const actorId1 = await getActorId(name1);
      const actorId2 = await getActorId(name2);

      if (!actorId1 || !actorId2) {
        throw new Error('Actor not found. Please check the names and try again.');
      }

      const filmography1 = await getActorFilmography(actorId1);
      const filmography2 = await getActorFilmography(actorId2);

      const result = `The connection between ${name1} and ${name2} is ${getDegreesOfSeparation(filmography1, filmography2)}`;
      setConnectionResult(result);
    } catch (error) {
      console.error('Error in handleSearch', error.message);
      setConnectionResult('Error finding connection. Please try again');
    }
  }
  return (
    <>
      <h1>Six Degrees of Film and Television</h1>
      <SearchForm onSearch={handleSearch} />
      <ConnectionResult result={connectionResult} />
    </>
  );
}

export default App;
