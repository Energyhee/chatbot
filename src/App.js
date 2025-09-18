import React from "react";
import Header from "./components/Header";
import SideBar from "./components/Side";
import ChatBot from "./components/Chat";
import Footer from "./components/Footer";
import './resources/css/fonts.css';
import './resources/css/reset.css';
import './resources/css/content.css';
import './resources/css/chat.css';

function App() {
  return (
    <div className="main">
      <div className="chat-container">
        <Header />
        <ChatBot />
        <Footer />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
