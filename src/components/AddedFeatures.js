import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/index.js'
import AddedFeature from './AddedFeature';
//will need state.car.features 
const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { features } = state.car
  return {
    features
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
