import { Component } from 'react';
import css from './ContactForm.module.css';

class Form extends Component {
    state = {
        number: '',
        name: '',
    }

    onHandleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value,})
    }

    onHandleSubmit = event => {
        event.preventDefault();
        const { addContact } = this.props;
        const contact = {
            id: this.state.id,
            name: this.state.name,
            number: this.state.number,
        }
        addContact(contact);
        this.setState({
            number: '',
            name: '',
        })
    }

    render() {
        const { name, number } = this.state;
        return (
            <form className={css.form} onSubmit={this.onHandleSubmit}>
                <label className={css.label}>
                    Name
                    <input
                        className={css.input}
                        value={name}
                        onChange={this.onHandleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов"
                        required
                        />
                </label>
                <label className={css.label}>
                    Contact
                    <input
                        className={css.input}
                        value={number}
                        onChange={this.onHandleChange}
                        type="text"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        />
                </label>
                <input className={css.button} type="submit" value="Add contact"/>
            </form>
        )
    }
};

export default Form;