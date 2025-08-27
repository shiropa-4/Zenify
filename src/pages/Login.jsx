import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className="auth-container">
      
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit">Login</button>
        <div class="checkbox">
          <input type="checkbox" id="remember" name="check"/>
          <label for="remember">Remember me</label>
        </div>
        <div class="content">
            <a href="#"> Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;