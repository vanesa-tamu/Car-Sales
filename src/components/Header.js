import React from 'react';
import { connect } from 'react-redux';
//will need state.car.image & state.car.name & state.car.price 

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStatetoProps = (state) => {
  const { image, name, price} = state.car
  return {
    image,
    name,
    price
  }
}

export default connect(mapStatetoProps)(Header);
