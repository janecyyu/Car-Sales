import { connect } from 'react-redux';
import React,{useState} from "react";
import { buyItem } from '../actions/featuresActions';

const AdditionalFeature = (props) => {
  const [newTitleText, setNewTitleText] = useState('');
  //console.log("props",props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.buyItem(props.feature.id)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return state;
};


export default connect(mapStateToProps,{buyItem})(AdditionalFeature);
