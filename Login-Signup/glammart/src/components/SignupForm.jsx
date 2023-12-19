import React from 'react';

function SignupForm() {
  return (
    <form className="form">
      <center>
        <h1>Sign Up</h1>
      </center>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <br />
      <button type="submit" class='button'>Sign Up</button>
      <br />
    </form>
  );
}

export default SignupForm;
