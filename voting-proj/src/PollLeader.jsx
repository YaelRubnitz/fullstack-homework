// PollLeader.jsx
import { getLeaderStatus } from "./pollUtils";

export function PollLeader({ options, showResults }) {
  if (!showResults) {
    return null;
  }

  const status = getLeaderStatus(options);

  if (status.type === "empty" || status.type === "none") {
    return null;
  }

  if (status.type === "tie") {
    return <p className="poll-leader">It’s a tie!</p>;
  }

  return (
    <p className="poll-leader">
      Leader: {status.leader.label} ({status.leader.votes} votes)
    </p>
  );
}