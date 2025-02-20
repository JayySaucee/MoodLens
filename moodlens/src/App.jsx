import React, { useState } from 'react';
import SignInForm from './components/SignInForm';
import LandingPage from './pages/LandingPage';

function App() {
  const [signInButton, setsignInButton] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LandingPage />
    </div>
  );
}

export default App;