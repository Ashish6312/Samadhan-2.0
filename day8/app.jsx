// src/App.jsx
import ProfileCard from './ProfileCard'; // Assuming this is from Day 6
import Counter from './components/Counter'; // Import Counter
import LivePreview from './components/LivePreview'; // Import LivePreview
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Day 6 Task: Profile Cards</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ProfileCard name="Ashish Sharma" role="Team Lead" team="Code Storm" />
        <ProfileCard name= "Anjali Kushwaha" role="Full Stack" team="Code Storm" />
        <ProfileCard name="Preeti Khachne" role="Frontend" team="Code Storm" />
      </div>

      <hr style={{ margin: '40px 0' }} />

      <h1>Day 7 Task: State Management</h1>
      <Counter />
      <LivePreview />
    </div>
  );
}

export default App;