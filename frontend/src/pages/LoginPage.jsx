
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {

    e.preventDefault();

    setMessage("");

    // Basic validation
    if (!username || !password) {
      setMessage("Please enter username and password");
      return;
    }

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password
        }
      );

      console.log(response.data);

      // Store JWT token
      localStorage.setItem(
        "token",
        response.data.token
      );

      
      

    } catch (error) {

      console.log(error);

      setMessage(
        error.response?.data?.message ||
        "Invalid username or password"
      );

    } finally {

      setLoading(false);

    }
  };


  return (

    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">

      <div className="container">

        <div className="row justify-content-center">

          <div className="col-12 col-sm-10 col-md-6 col-lg-4">

            <div className="card border-0 shadow-lg">

              <div className="card-body p-4 p-md-5">

                {/* Logo / Title */}

                <div className="text-center mb-4">

                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "65px",
                      height: "65px",
                      fontSize: "28px"
                    }}
                  >
                    🔐
                  </div>

                  <h2 className="fw-bold mb-1">
                    Welcome Back
                  </h2>

                  <p className="text-muted mb-0">
                    Login to Client Management
                  </p>

                </div>


                {/* Message */}

                {message && (

                  <div
                    className={`alert ${
                      message === "Login successful!"
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                  >
                    {message}
                  </div>

                )}


                {/* Login Form */}

                <form onSubmit={handleLogin}>

                  {/* Username */}

                  <div className="mb-3">

                    <label
                      htmlFor="username"
                      className="form-label fw-semibold"
                    >
                      Username
                    </label>

                    <input
                      id="username"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) =>
                        setUsername(e.target.value)
                      }
                    />

                  </div>


                  {/* Password */}

                  <div className="mb-4">

                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>

                    <input
                      id="password"
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />

                  </div>


                  {/* Login Button */}

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                    disabled={loading}
                  >

                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>

                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}

                  </button>

                </form>


                {/* Demo Credentials */}

                <div className="text-center mt-4">

                  <small className="text-muted">
                    Test credentials
                  </small>

                  <div className="mt-2">

                    <span className="badge bg-light text-dark border me-2">
                      Username: admin
                    </span>

                    <span className="badge bg-light text-dark border">
                      Password: admin123
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* Footer */}

            <p className="text-center text-muted mt-3 small">
              Secure Client Management System
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;

