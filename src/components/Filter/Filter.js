import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";

const Filter = ({ updateFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={updateFilter} id="find"></input>
    </div>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    updateFilter: (event) => dispatch(actions.updateFilter(event.target.value)),
  };
};

// Filter.propTypes = {
//   onInputFind: PropTypes.func.isRequired,
// };

export default connect(null, mapDispatchProps)(Filter);
