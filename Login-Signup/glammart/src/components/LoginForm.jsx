import React from 'react';


function LoginForm() {
  return (
    <form className="form">
      <center>
        <h1>Login</h1>
      </center>
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
      <button type="submit" class="button">Login</button>
      <br />
    </form>
  );
}

export default LoginForm;
