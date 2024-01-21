const ConnectionResult = ({ result }) => {
  return (
    <div>
      <h2>Connection Result</h2>
      {result ? (
        <p>{result}</p>
      ) : (
        <p>No connection found...</p>
      )}
    </div>
  );
};

export default ConnectionResult;