import './styles/login.css';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';


function Login() {
  return (
    <div className="row">
        <div className="col-8 " style={{backgroundImage: `url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                                        backgroundSize: "cover",
                                        height: "800px"}}>

        </div>
        <div className="col-4" style={{backgroundColor: "green",
                                        backgroundSize: "cover",
                                        height: "800px"}}>
        <div className="login-custom">
        <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter password"/>
        </Form.Group>
        <Link to="home">
        <button className='btn btn-primary custom-buttom'>Log In</button>
        </Link>
        </div>
    </div>
    </div>
  );
}

export default Login;