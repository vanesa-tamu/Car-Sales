import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
//will need state.additionalFeatures

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { additionalFeatures } = state
  return {
    additionalFeatures
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
