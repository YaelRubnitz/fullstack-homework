function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function getRoleColor(role) {
  if (role === 'Leader') return 'blue';
  if (role === 'Member') return 'green';
  if (role === 'Guest') return 'purple';
  return 'gray';
}

function MemberCard({ member, isSelected, onSelect }) {
  const initials = getInitials(member.name);
  const buttonColor = getRoleColor(member.role);

  return (
    <div
      className={`member-card ${!member.isActive ? 'inactive' : ''} ${
        isSelected ? 'selected' : ''
      }`}
      onClick={() => onSelect(member.id)}
    >
      <div className="avatar">{initials}</div>
      <div>
        <h3>{member.name}</h3>
        <span className="role-badge">{member.role}</span>
      </div>
      <button
        type="button"
        style={{ backgroundColor: buttonColor }}
        disabled={!member.isActive}
        onClick={(e) => e.stopPropagation()}
      >
        {member.role}
      </button>
    </div>
  );
}

export default MemberCard;