
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Food(props) {
    const {titulo}= useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://my.api.mockaroo.com/food.json?key=8d138f80")
        .then(response => response.json())
        .then(data => {setData(data);});
    }, []);
    const valuesRunning = () => {
        let valuesRunning = [];
        
        for (let i = 0; i < data.length; i++) {
            valuesRunning.push(
                <div className="card" style={{width: "18rem"}}>
            <img src={data[i].image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data[i].name}</h5>
            </div>
            </div>
            )
            
        }
        return valuesRunning;  
    }
  return (
    <>
    <header style={{height: "100px", backgroundColor: "green", alignContent: "center",justifyContent: "center"}}>
        <h1 style={{marginRight: "100px"}}>{titulo}</h1>
    </header>

    <Carousel>
      <Carousel.Item>
      <img class="d-block w-100" src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/2/cheddar.jpg" alt="First slide"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://myplate-prod.azureedge.us/sites/default/files/styles/recipe_525_x_350_/public/2021-09/OnePanSpaghetti_527x323.jpg?itok=9lREbBeb" alt="First slide"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img class="d-block w-100" src="https://www.allrecipes.com/thmb/CjzJwg2pACUzGODdxJL1BJDRx9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg" alt="First slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container">
    <div className="row">
    {valuesRunning()}
    </div>
    </div>
    </>
  );
}

export default Food;