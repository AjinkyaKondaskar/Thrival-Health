import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

export default function SupabaseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // 👈 Toggle between login and signup

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    let response;

    if (isSignUp) {
      // 👤 Sign Up Flow
      response = await supabase.auth.signUp({
        email,
        password,
      });
      if (response.error) {
        setErrorMsg(response.error.message);
      } else {
        setSuccessMsg('Sign up successful! Check your email for confirmation.');
      }
    } else {
      // 🔐 Login Flow
      response = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (response.error) {
        setErrorMsg(response.error.message);
      } else {
        setSuccessMsg('Logged in successfully!');
        navigate('/productlisting'); // ✅ Redirect to /productlisting
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-600 to-cyan-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isSignUp ? 'Create an Account' : 'Login to Your Account'}
        </h2>

        {errorMsg && <div className="mb-4 text-red-600 text-sm">{errorMsg}</div>}
        {successMsg && <div className="mb-4 text-green-600 text-sm">{successMsg}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
        >
          {loading ? (isSignUp ? 'Signing up...' : 'Logging in...') : isSignUp ? 'Sign Up' : 'Log In'}
        </button>

        <p className="mt-4 text-center text-sm text-gray-700">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="text-indigo-600 hover:underline"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMsg('');
              setSuccessMsg('');
            }}
          >
            {isSignUp ? 'Log in here' : 'Sign up here'}
          </button>
        </p>
      </form>
    </div>
  );
}