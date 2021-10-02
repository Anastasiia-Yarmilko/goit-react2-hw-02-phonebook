import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ searchContact, filter }) => {
    return (
        <label className={css.label}>
            {' '}
            Find contacts by name
            <input
                className={css.input}
                onChange={event => searchContact(event.target.value)}
                placeholder='Enter your search request'
                value={filter}
            />
        </label>
    )
};

Filter.propTypes = {
    searchContact: PropTypes.func.isRequired
}

export default Filter;