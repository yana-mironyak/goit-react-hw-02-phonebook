import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = ({ filteredContacts, onDeleteContact }) => {
    return <ul>
        {filteredContacts.map(({ id, name, number }) => <ContactItem key={id} id={id} name={name} number={number} onDeleteContact={onDeleteContact}/>)}
    </ul>
}

export default ContactsList;

ContactItem.propTypes = {
    onDeleteContact: PropTypes.func,
    filteredContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.number,
    }))
}