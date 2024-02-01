import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFromTMDB = async () => {
    setIsLoading(true);

    const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
    const personName = "Judi Dench";

    const url = `https://api.themoviedb.org/3/search/person?api_key=${tmdbApiKey}&query=${personName}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} = ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Result:', result);
    } catch (error) {
      console.error('Error fetching data from TMDB:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>6 DEGREES OF FILM</h1>
      <button onClick={fetchDataFromTMDB}>Fetch TMDB Data</button>
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default App;
