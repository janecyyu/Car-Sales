import React from 'react';
import { connect } from 'react-redux';


import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  //console.log("feature: ",props.feature);
  return (
    <div className="content">
      <h6>Added features</h6>
      {props.feature.length ? (
        <ol type="1">
          {props.feature.map(item => (
            <AddedFeature feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    feature: state.car.features,
  };
};

export default connect(mapStateToProps,{})(AddedFeatures)