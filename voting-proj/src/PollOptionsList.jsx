// PollOptionsList.jsx
import { PollOptionItem } from "./PollOptionItem";

export function PollOptionsList({ options, showResults, onVote }) {
  if (options.length === 0) {
    return (
      <p className="poll-empty">
        No options yet. Add one below to start voting.
      </p>
    );
  }

  return (
    <ul className="poll-list">
      {options.map((option) => (
        <PollOptionItem
          key={option.id}
          option={option}
          showResults={showResults}
          onVote={onVote}
        />
      ))}
    </ul>
  );
}