import Button from './Button';

function ProfileCard({ avatar, name, description, personType }) {
  return (
    <div className="profile-card">
      <img className="avatar" src={avatar} alt={name} />
      <h3 className="profile-name">{name}</h3>
      <p className="profile-description">{description}</p>
      <Button type={personType} label={personType} />
    </div>
  );
}

export default ProfileCard;