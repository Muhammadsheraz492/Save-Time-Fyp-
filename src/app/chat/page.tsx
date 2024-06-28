"use client"
import After_login_NavBar from "@/homepage/componet/after_login_nav/page";
import React, { useState } from "react";
import style from "./chat.module.css";
import Image from "next/image";

function Page() {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how are you?", sender: "user" },
    { id: 2, text: "I'm good, thanks!", sender: "other" },
    { id: 3, text: "What are your plans for the weekend?", sender: "user" },
    { id: 4, text: "Not sure yet, maybe hiking.", sender: "other" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // Prevent sending empty messages

    const newMessageObject = {
      id: messages.length + 1,
      text: newMessage,
      sender: "other", // Assuming the user sends the message
    };

    setMessages([...messages, newMessageObject]);
    setNewMessage(""); // Clear input field after sending
  };

  return (
    <div>
      <After_login_NavBar />
      <div style={{ height: 20 }} />
      <div className={style.size}>
        <div className={style.pannel}>
          <div className={style.leftside}>
            <span>Message</span>
            <div style={{ height: 10 }} />

            <div className={style.textbox}>
              <input placeholder="Search user" />
            </div>

            <div className={style.scrollContainer}>
              {data.map((e) => (
                <>
                  <div className={style.card} key={e}>
                    <Image
                      alt=""
                      src={"/messager.png"}
                      style={{ borderRadius: 15 }}
                      height={50}
                      width={50}
                    />
                    <div className={style.userinfo}>
                      <div className={style.user}>
                        <span>Muhammad Sheraz</span>
                        <span>12</span>
                      </div>
                      <span>Save Time</span>
                    </div>
                  </div>
                  <div style={{ height: 10 }} />
                </>
              ))}
            </div>

            <div style={{ height: 10 }} />
          </div>
          <div className={style.rightside}>
            <div className={style.contact_user}>
              <div className={style.userName}>
                <Image
                  alt=""
                  src={"/messager.png"}
                  style={{ borderRadius: 15 }}
                  height={50}
                  width={50}
                />
                <div className={style.status}>
                  <span className={style.name}>Florencio Dorrance</span>
                  <span>online</span>
                </div>
              </div>

              <div className={style.savebtn}>
                <span>View</span>
              </div>
            </div>
            <div style={{ height: 10 }} />

            <div className={style.chat}>
              <div className={style.messageContainer}>
                {messages.map((message:any) => (
                  <div
                    key={message.id}
                    className={`${style.message} ${
                      message.sender === "user" ? style.left : style.right
                    }`}
                  >
                    <p className={style.messageText}>{message.text}</p>
                  </div>
                ))}
              </div>
              <div className={style.inputContainer}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className={style.input}
                  value={newMessage}
                  onChange={handleMessageChange}
                />
                <button className={style.sendButton} onClick={handleSendMessage}>Send</button>
                <button className={style.sendButton} onClick={handleSendMessage}>Create offer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
