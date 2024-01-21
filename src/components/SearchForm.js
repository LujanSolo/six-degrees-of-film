import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  const handleSearch = () => {
    onSearch(name1, name2);
  };

  return (
    <form>
      <label htmlFor="first-entry">
        Name 1:
        <input type="text" id="first-entry" value={name1} onChange={(e) => setName1(e.target.value)} />
      </label>
      <br />
      <label htmlFor="second-entry">
        Name 2:
        <input type="text" id="second-entry" value={name2} onChange={(e) => setName2(e.target.value)} />
      </label>
      <br />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
};

SearchForm;