import React from 'react';
import { connect } from 'react-redux'; 

//need state.car.price & state.additionalPrice

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { additionalPrice, car } = state
  return {
    additionalPrice,
    price: car.price
  }
}

export default connect(mapStateToProps)(Total);
