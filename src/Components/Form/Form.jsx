import React, { Component } from 'react';
import { nanoid } from 'nanoid';




class Form extends Component {

    state = {
        name: '',
        number: ''
    }

    inputNameId = nanoid();
    inputPhoneId = nanoid();

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.formSubmit(this.state);
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    render() {
        const { name } = this.state;
        const { number } = this.state;


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.inputNameId}>
                        Name
                    </label>
                    <input
                        type="text"
                        id={this.inputNameId}
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />

                    <label htmlFor={this.inputPhoneId}>
                        Phone number
                    </label>
                    <input
                        type="tel"
                        id={this.inputPhoneId}
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />

                    <button type="submit">Add contact</button>
                </form>
            </div>
        )
    }
}

export default Form;

