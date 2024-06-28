import React from "react";
import { ChatItem, MessageBox } from "react-chat-elements";
import { Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";

function ChatComponent() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
        {/* Chat messages */}
        <ChatItem
          avatar="https://example.com/avatar.jpg"
          alt={"Avatar"}
          title={"John Doe"}
          subtitle={"online"}
          date={new Date()}
          unread={0}
        />
        {/* Replace this with a loop over your chat messages */}
        <MessageBox
          position={"left"}
          type={"text"}
          text={"Hello, how can I help you?"}
          date={new Date()}
        />
        <MessageBox
          position={"right"}
          type={"text"}
          text={"Hi there! I have a question about..."}
          date={new Date()}
        />
      </div>
      {/* Input area for typing messages */}
      <Input
        placeholder="Type here..."
        multiline={false}
        rightButtons={
          <button className="send-button">Send</button> // Replace with your send button
        }
      />
    </div>
  );
}

export default ChatComponent;
