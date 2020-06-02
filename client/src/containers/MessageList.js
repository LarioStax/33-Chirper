import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../store/actions/messages.js";
import MessageItem from "../components/MessageItem.js";

class MessageList extends Component {
  componentDidMount() {
    this.props.getMessages();
  }
  render() {
    const { messages } = this.props;
    console.log(messages);
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
      />
    ))
    return (
      messageList
    )
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { getMessages })(MessageList);