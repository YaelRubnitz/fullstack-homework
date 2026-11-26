// pollUtils.js

export function getLeaderStatus(options) {
  if (!options.length) {
    return { type: "empty" };
  }

  const maxVotes = Math.max(...options.map((item) => item.votes));

  if (maxVotes === 0) {
    return { type: "none" };
  }

  const leaders = options.filter((item) => item.votes === maxVotes);

  if (leaders.length > 1) {
    return { type: "tie" };
  }

  return { type: "winner", leader: leaders[0] };
}