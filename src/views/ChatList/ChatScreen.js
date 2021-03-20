import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg",
      message: "Whats up 💌",
    },
    {
      name: "Ellen",
      image:
        "https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Nicole!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
    }

    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {messages.map((message) =>
        messages.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={messages.name}
              src={messages.image}
            />
            <p className="chatScreen_text">{messages.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{messages.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          valeu={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
