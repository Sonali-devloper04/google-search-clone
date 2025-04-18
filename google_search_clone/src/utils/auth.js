
// utils/auth.js
import { auth, provider, signInWithPopup } from "../firebase";

export const signIn = async (setUser) => {
  try {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    localStorage.setItem("user", JSON.stringify(result.user)); 
  } catch (error) {
    console.error("Sign-in error", error);
  }
};

