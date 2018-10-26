import React, { Component } from 'react'

class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value)
            alert('This was submitted: ' + this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <form className="chatInput" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default ChatInput;