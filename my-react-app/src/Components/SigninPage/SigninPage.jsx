
import logo from '../assets/logo.png';

const SigninPage = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <div className="content">
        <div className="illustration">
          <img src="./assets/illustration.png" alt="Illustration" />
        </div>

        <div className="signin-box">
          <h2>Sign In</h2>
          <p>Sign in with your email and password.</p>

          <form>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <a href="#" className="forgot-password">Forgot password?</a>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="signup-link">
            Not yet a member? <a href="#">Sign up now</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
