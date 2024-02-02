import { useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchDataFromTMDB = async () => {
    setIsLoading(true);

    const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

    if (searchKeyword.trim() === "") {
      console.error('Please enter a valid search keyword');
      setIsLoading(false);
      return;
    }

    const encodedSearchKeyword = encodeURIComponent(searchKeyword);
    const url = `https://api.themoviedb.org/3/search/person?api_key=${tmdbApiKey}&query=${encodedSearchKeyword}`;

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
      <label htmlFor="searchInput">SEARCH FOR: </label>
      <input id="searchInput" type="text" value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
      <button onClick={fetchDataFromTMDB}>Fetch TMDB Data</button>
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default App;
