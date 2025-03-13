import './styles/homeCard.css';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function HomeCard() {
  return (
    <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: "#E6364639"}}>
  <div className="row g-0">
    
    <div className="col-md-4">
    <Link to="menu">
      <img src="https://cdn-icons-png.flaticon.com/512/5470/5470133.png" className="img-fluid rounded-start" alt="..."/>
      <h1>Menu</h1>
      </Link>
    </div>
    <div className="col-md-4">
    <Link to="store">
      <img src="https://cdn-icons-png.flaticon.com/512/4690/4690069.png" className="img-fluid rounded-start" alt="..."/>
      <h1>Stores</h1>
      </Link>
    </div>
    <div className="col-md-4">
    <Link to="cart">
      <img src="https://cdn-icons-png.flaticon.com/512/2605/2605732.png" className="img-fluid rounded-start" alt="..."/>
      <h1>Cart</h1>   
    </Link>
    </div>
  </div>
</div>
  );
}

export default HomeCard;