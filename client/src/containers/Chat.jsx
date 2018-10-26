import React, { Component } from 'react'
import Message from '../components/Message';
import ChatInput from '../components/ChatInput';

class Chat extends Component {
    render() {
        const messages = [{ user: "ross", message: "hey whats up"}, { user: "Linc", message: "Not Much"}];
        const messageList = messages.map((message) => <div className="chat-message"><Message {...message} />
            </div>)
        return (
            <div className="chat-container">
                <span className="chat-title">React Chat</span>
                {messageList}
                <ChatInput />
            </div>
        )
    } 
}

export default Chat;