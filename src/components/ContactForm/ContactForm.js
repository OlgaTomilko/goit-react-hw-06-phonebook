import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  form: {
    width: 275,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

const ContactForm = ({ onAdd }) => {
  const classes = useStyles();
  let item = {};

  const onInputChange = (event) => {
    item = { ...item, [event.target.id]: event.target.value };
  };

  const onSubmit = () => {
    onAdd(item);
  };

  return (
    <form className={classes.form}>
      <label>Name</label>
      <input type="text" onChange={onInputChange} id="name"></input>
      <label>Number</label>
      <input type="text" onChange={onInputChange} id="number"></input>
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="button"
        onClick={onSubmit}
      >
        Add contact
      </Button>
    </form>
  );
};

const mapDispatchProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch(actions.addContact(value)),
  };
};

// ContactForm.propTypes = {
//   onInputChange: PropTypes.func.isRequired,
//   onButtonClick: PropTypes.func.isRequired,
// };

export default connect(null, mapDispatchProps)(ContactForm);
