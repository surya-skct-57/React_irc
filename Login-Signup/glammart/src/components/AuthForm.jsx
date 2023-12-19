import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-form">
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
      <div className="toggle-form">
        <span>
          {isLogin ? 'Dont have an account?' : 'Already have an account?'}
        </span>
        <button onClick={toggleForm}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
