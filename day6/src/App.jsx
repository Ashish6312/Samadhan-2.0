// src/App.jsx
// This is the main component where we will use our ProfileCard.

// 1. Import the ProfileCard component
import ProfileCard from './ProfileCard';
import './App.css'; // You can keep the default styling for now

function App() {
  return (
    <div className="App">
      <h1>Meet Our Team: Syntax Solvers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* 2. Use the component and pass props */}
        <ProfileCard
          name="Ashish Sharma"
          role="Team Lead / Backend Developer"
          team="Code Storm"
        />
        <ProfileCard
          name="Anjali kushwaha"
          role="Full Stack Enthusiast"
          team="Code Storm"
        />
        <ProfileCard
          name="preeti khachne"
          role="Frontend & Design"
          team="Code Storm"
        />
      </div>
    </div>
  );
}

export default App;