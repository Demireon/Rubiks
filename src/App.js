import React from 'react';
import StepList from './components/StepList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>The Rubik's Cube and the Feynman Technique</h1>
      </header>
      <main>
        <StepList />
      </main>
      <footer className="app-footer">
      </footer>
    </div>
  );
}

export default App;