import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {user ? <Home /> : <SignIn setUser={setUser} />}
    </div>
  );
}

export default App;
