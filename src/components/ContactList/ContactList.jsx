import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ searchContact, deleteContact }) => {
    return (
        <ul className={css.list}>
            {searchContact.map(({ name, number, id }) => {
                return (
                    <li className={css.item} key={name}>
                        <p className={css.contact}>
                            {' '}
                            {name}:{number}
                        </p>
                        <button type="button"
                            className={css.btn}
                            onClick={() => deleteContact(id)}
                        >
                            Delete
                        </button>
                    </li>
                )
            })}
        </ul>
    );
};

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    searchContact: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string
        }),
    ).isRequired,
};

export default ContactList;