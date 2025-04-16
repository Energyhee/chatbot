import React from "react";
import Header from "./components/Header";
import ChatBot from "./components/Chat";
import Footer from "./components/Footer";
import './resources/css/fonts.css';
import './resources/css/reset.css';
import './resources/css/header.css';
import './resources/css/footer.css';
import './resources/css/chat.css';

function App() {
  return (
    <div className="chat-container">
      <Header />
      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
