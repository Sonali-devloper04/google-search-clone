import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

const SignIn = ({ setUser }) => {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Sign-in error", error);
    }
  };

  return (
    <button onClick={signIn} className="p-2 bg-blue-500 text-white rounded">
      Sign in with Google
    </button>
  );
};

export default SignIn;
