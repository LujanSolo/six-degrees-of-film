import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ConnectionResult from './components/ConnectionResult';

function App() {
  const [connectionResult, setConnectionResult] = useState("");

  const handleSearch = (name1, name2) => {
    setConnectionResult(`Connection between ${name1} and ${name2} is: `);
  };

  return (
    <>
      <h1>Six Degrees of Film and Television</h1>
      <SearchForm onSearch={handleSearch} />
      <ConnectionResult connectionResult={connectionResult} />
      
    </>
  );
}

export default App;
