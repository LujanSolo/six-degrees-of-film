// src/components/ConnectionResult.js
const ConnectionResult = ({ result }) => {
  return (
    <div>
      <h2>Connection Result</h2>
      {result ? (
        <p>{result}</p>
      ) : (
        <p>No connection found. Try different names!</p>
      )}
    </div>
  );
};

export default ConnectionResult;
