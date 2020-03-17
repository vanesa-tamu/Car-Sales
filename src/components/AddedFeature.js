import React from 'react';
//will need state.additionalFeatures.name (gets mapped in AdditionalFeatures.js)
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
