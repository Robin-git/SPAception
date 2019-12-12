import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        const eventDispatcher = new CustomEvent('movieStockApp::addMovie', { bubbles: true, detail: { movie: { name: this.state.value }}});
        window.dispatchEvent(eventDispatcher);
        this.setState({ value: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom du film :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}