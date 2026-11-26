import Header from './Header';
import ProfileCard from './ProfileCard';
import Footer from './Footer';
import './App.css';

const PROFILES = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/100',
    name: 'Dana Levi',
    description: 'Loves coding games and helping classmates with bugs.',
    personType: 'Friend',
  },
  {
    id: 2,
    avatar: 'https://via.placeholder.com/100',
    name: 'Dr. Alon Cohen',
    description: 'Teaches algorithms and systems programming.',
    personType: 'Teacher',
  },
  {
    id: 3,
    avatar: 'https://via.placeholder.com/100',
    name: 'Noa Mizrahi',
    description: 'First-year CS student exploring web development.',
    personType: 'Student',
  },
];

function App() {
  return (
    <div className="profile-page">
      <Header title="My Profile Page" />

      <main className="profiles-grid">
        {PROFILES.map((profile) => (
          <ProfileCard
            key={profile.id}
            avatar={profile.avatar}
            name={profile.name}
            description={profile.description}
            personType={profile.personType}
          />
        ))}
      </main>

      <Footer text="© 2025 My App" />
    </div>
  );
}

export default App;