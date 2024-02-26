import { useState } from 'react';

const Voter = () => {
  const [vote, setVote] = useState(0);

  return (
    <div className="vote-container">
      <button
        className="vote-button"
        type="button"
        onClick={() => setVote((prevVote) => prevVote + 1)}
      >
        👍
      </button>
      <h1>{vote}</h1>
      <button
        className="vote-button"
        type="button"
        onClick={() => setVote((prevVote) => prevVote - 1)}
      >
        👎
      </button>
    </div>
  );
};

export default Voter;
