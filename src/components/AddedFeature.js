import { connect } from "react-redux";
import React from "react";
import { removeItem } from "../actions/featuresActions";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeItem(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature}
    </li>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { removeItem })(AddedFeature);
