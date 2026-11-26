// AddOptionForm.jsx
import { useState } from "react";

export function AddOptionForm({ onAddOption }) {
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = label.trim();

    if (!trimmed) {
      setError("Please enter a name.");
      return;
    }

    onAddOption(trimmed);
    setLabel("");
    setError("");
  }

  function handleChange(e) {
    setLabel(e.target.value);
    if (error) {
      setError("");
    }
  }

  return (
    <form className="poll-form" onSubmit={handleSubmit}>
      <div className="poll-form-row">
        <input
          type="text"
          className="poll-input"
          value={label}
          onChange={handleChange}
          placeholder="New option name"
        />
        <button type="submit" className="poll-btn poll-btn-primary">
          Add Option
        </button>
      </div>

      {error && <p className="poll-error">{error}</p>}
    </form>
  );
}