import './styles/login.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const intl = useIntl(); 

  const handleLogin = (e) => {
    e.preventDefault(); 
    if (password.length < 8) {
      setErrorMessage(
        intl.formatMessage({ id: 'error.passwordLength' }) 
      );
      setIsValid(false);
    } else {
      setErrorMessage('');
      setIsValid(true);
    }
  };

  return (
    <div className="container-fluid d-flex p-0">
      
      <div className="left-side col-6 d-flex flex-column justify-content-center align-items-center">
        <div className="logo-container text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Too Good To Go Logo"
            style={{ width: "80px", marginBottom: "20px" }}
          />
          <h2 className="mb-3">TOO GOOD TO GO</h2>
          <p className="tagline">
            <FormattedMessage id="tagline" defaultMessage="FOOD WASTING SOLUTION" />
          </p>
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Food Bowl"
            className="img-fluid rounded"
            style={{ marginTop: "30px", borderRadius: "20px", width: "80%" }}
          />
        </div>
      </div>

      
      <div className="right-side col-6 d-flex justify-content-center align-items-center">
        <div className="login-custom text-center">
          <Form style={{ width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder={intl.formatMessage({ id: 'nombreUsuario' })}
                className="input-custom"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder={intl.formatMessage({ id: 'contrasena' })}
                className="input-custom"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {errorMessage && (
              <div className="alert alert-danger p-2" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="text-end mb-4">
              <a href="#" className="forgot-password">
                <FormattedMessage id="olvidoContrasena" defaultMessage="Forgot Password?" />
              </a>
            </div>

            
            {isValid ? (
              <Link to="/home">
                <button type="button" className="btn btn-light login-button">
                  <FormattedMessage id="login" defaultMessage="Login" />
                </button>
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-light login-button"
                onClick={handleLogin}
              >
                <FormattedMessage id="login" defaultMessage="Login" />
              </button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
