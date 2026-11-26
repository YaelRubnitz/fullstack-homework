// PollOptionItem.jsx

export function PollOptionItem({ option, showResults, onVote }) {
  return (
    <li className="poll-item">
      <span className="poll-item-label">{option.label}</span>

      <button
        type="button"
        className="poll-btn poll-btn-primary"
        onClick={() => onVote(option.id)}
      >
        Vote
      </button>

      {showResults && (
        <span className="poll-item-votes">
          ({option.votes} {option.votes === 1 ? "vote" : "votes"})
        </span>
      )}
    </li>
  );
}