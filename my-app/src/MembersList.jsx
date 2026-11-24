import MemberCard from './MemberCard';

function MembersList({ members, layout, selectedMemberId, onSelectMember }) {
  if (members.length === 0) {
    return <p>No members to show.</p>;
  }

  return (
    <div className={`members-list ${layout}`}>
      {members.map((member) => (
        <MemberCard
          key={member.id}
          member={member}
          isSelected={member.id === selectedMemberId}
          onSelect={onSelectMember}
        />
      ))}
    </div>
  );
}

export default MembersList;