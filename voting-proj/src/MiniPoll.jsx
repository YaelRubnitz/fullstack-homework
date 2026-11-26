// MiniPoll.jsx
import { useState } from "react";
import { PollLeader } from "./PollLeader";
import { PollOptionsList } from "./PollOptionsList";
import { AddOptionForm } from "./AddOptionForm";

const INITIAL_OPTIONS = [
  { id: "react", label: "React", votes: 0 },
  { id: "vue", label: "Vue", votes: 0 },
  { id: "svelte", label: "Svelte", votes: 0 },
];

export function MiniPoll() {
  const [options, setOptions] = useState(INITIAL_OPTIONS);
  const [showResults, setShowResults] = useState(false);

  function handleVote(id) {
    setOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    );
  }

  function handleAddOption(label) {
    const newOption = {
      id: `${label.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      label,
      votes: 0,
    };

    setOptions((prev) => [...prev, newOption]);
  }

  function handleResetVotes() {
    setOptions((prev) => prev.map((option) => ({ ...option, votes: 0 })));
  }

  return (
    <section className="poll">
      <h2 className="poll-title">Mini Poll</h2>

      <div className="poll-controls">
        <button
          type="button"
          className="poll-btn"
          onClick={() => setShowResults((prev) => !prev)}
        >
          Toggle Results
        </button>

        <button type="button" className="poll-btn" onClick={handleResetVotes}>
          Reset Votes
        </button>
      </div>

      <PollLeader options={options} showResults={showResults} />

      <PollOptionsList
        options={options}
        showResults={showResults}
        onVote={handleVote}
      />

      <AddOptionForm onAddOption={handleAddOption} />
    </section>
  );
}