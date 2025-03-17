import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl'; 
import Carousel from 'react-bootstrap/Carousel';

import './styles/food.css';

function Food() {
  const { titulo } = useParams();
  const navigate = useNavigate();
  const intl = useIntl();
  const locale = intl.locale;

  const [data, setData] = useState([]);

  const titles = {
    menu: {
      es: 'MENÚ',
      en: 'MENU'
    },
    stores: {
      es: 'TIENDAS',
      en: 'STORES'
    },
    cart: {
      es: 'CARRO',
      en: 'CART'
    }
  };

  const findBaseKey = (tituloURL) => {
    const key = Object.keys(titles).find((k) =>
      Object.values(titles[k]).some((v) => v.toLowerCase() === tituloURL.toLowerCase())
    );
    return key;
  };

  const baseKey = findBaseKey(titulo);
  const translatedTitle = baseKey ? titles[baseKey][locale] : titulo;

  useEffect(() => {
    if (!baseKey) return;

    const currentPath = `/home/${translatedTitle}`;
    if (currentPath !== window.location.pathname) {
      navigate(currentPath);
    }
  }, [locale, translatedTitle, baseKey, navigate]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/foods.json?key=349ebe10")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <header className="food-header">
        <h1 className="title">{translatedTitle}</h1>
      </header>

      <Carousel className="food-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://cdnimg.webstaurantstore.com/uploads/blog/2016/2/cheddar.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://myplate-prod.azureedge.us/sites/default/files/styles/recipe_525_x_350_/public/2021-09/OnePanSpaghetti_527x323.jpg?itok=9lREbBeb"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.allrecipes.com/thmb/CjzJwg2pACUzGODdxJL1BJDRx9Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="product-container">
        {data.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="product-name">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Food;
