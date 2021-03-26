import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";
import Button from "@material-ui/core/Button";

const ContactList = ({ filter, contacts, onDelete }) => {
  const onFilterContacts = () => {
    const filterContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  const handleButtonDelete = (event) => {
    const filterContacts = contacts.filter(
      (contact) => contact.id !== event.currentTarget.id
    );
    onDelete(filterContacts);
  };

  return (
    <ul>
      {(filter ? onFilterContacts() : contacts).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button
            color="secondary"
            type="button"
            id={id}
            onClick={handleButtonDelete}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchProps = (dispatch) => ({
  onDelete: (value) => dispatch(actions.deleteContact(value)),
});

// ContactList.propTypes = {
//   filter: PropTypes.string,
//   contacts: PropTypes.arrayOf(PropTypes.object),
//   onFilterContacts: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchProps)(ContactList);
