import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFromApi = async () => {
    setIsLoading(true);
    const actorName = document.getElementById('keyword').value;
    const encodedActorName = encodeURIComponent(actorName);
  
    const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${encodedActorName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '40d5e8b600msh8c096a9cc653e9dp182fb0jsn39cf6a8a9916',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
  
    let response; // Declare the variable outside the try block
  
    try {
      response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Result:', result);
    } catch (error) {
      console.error('Error fetching data from API:', error.message);
      console.log('Response:', response ? await response.text() : 'Undefined response'); // Log the response for additional details
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>MoviesDatabase App</h1>
      <label htmlFor="keyword">Enter an Actor's Name</label>
      <input id="keyword" type="text" placeholder="Enter a name..." />
      <button onClick={() => fetchDataFromApi()}>Fetch Data</button>
      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default App;
