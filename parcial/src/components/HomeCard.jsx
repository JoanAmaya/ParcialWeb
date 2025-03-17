import './styles/homeCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';


function HomeCard() {
  const intl = useIntl();
  const locale = intl.locale;
  const routeMenu = locale === 'es' ? 'MENÚ' : 'MENU';
  const routeStore = locale === 'es' ? 'TIENDAS' : 'STORES';
  const routeCart = locale === 'es' ? 'CARRO' : 'CART';
  return (
    <div className="home-card card mb-3">
      <div className="row g-0 justify-content-center">
        
        
        <div className="col-md-4 d-flex justify-content-center">
          <Link to={`${routeMenu}`} className="icon-link d-flex flex-column align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5470/5470133.png"
              className="icon-img"
              alt="Menu"
            />
            <p className="icon-text"><FormattedMessage id="menu" defaultMessage="MENU" /></p>
          </Link>
        </div>

        
        <div className="col-md-4 d-flex justify-content-center">
          <Link to={`${routeStore}`} className="icon-link d-flex flex-column align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4690/4690069.png"
              className="icon-img"
              alt="Stores"
            />
            <p className="icon-text"><FormattedMessage id="tiendas" defaultMessage="STORES" /></p>
          </Link>
        </div>

        
        <div className="col-md-4 d-flex justify-content-center">
          <Link to={`${routeCart}`} className="icon-link d-flex flex-column align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2605/2605732.png"
              className="icon-img"
              alt="Cart"
            />
            <p className="icon-text"><FormattedMessage id="carro" defaultMessage="CART"/></p>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default HomeCard;
