// src/components/Chat
import React, { useState, useEffect, useRef } from "react";
import { predefinedResponses } from "../Responses"; // responses.js에서 임포트

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const textareaRef = useRef(null); // textarea를 참조하기 위한 ref

  // 대화창의 최하단을 참조
  const messagesEndRef = useRef(null);

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setInput(e.target.value);
    autoResizeTextArea();
  };

  // 자동 크기 조정
  const autoResizeTextArea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 일단 높이를 초기화
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // 컨텐츠의 높이에 맞게 조정
    }
  };

  // 메시지 보내기 핸들러
  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // 유저 메시지 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input }
    ]);

    // AI 답변 추가
    handleAssistantResponse(input);
    setInput(""); // 입력 초기화
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // 입력 후 텍스트 영역 초기화
    }
  };

  // AI 답변 처리 함수
  const handleAssistantResponse = (userMessage) => {
    let response = <p>다른 질문을 해주세요</p>; // 기본 임시 답변

    const matchedResponse = predefinedResponses.find(
      (item) => item.pattern instanceof RegExp && item.pattern.test(userMessage)
    );

    if (matchedResponse) {
      response = matchedResponse.response;
    }

    setTimeout(() => {
      // 답변 추가
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: response }
      ]);
    }, 500); // 0.5초 후 답변 추가
  };

  // 답변 삭제 핸들러
  const handleDeleteMessage = (index) => {
    setMessages((prevMessages) =>
      prevMessages.filter((_, idx) => idx !== index)
    );
  };

  // 메시지가 변경될 때 최하단으로 스크롤 이동
  useEffect(() => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  return (
    <div className="chat-wrap">
      {/* 대화창 영역 */}
      <div className="talk-wrap">
        <div className="talk-box">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>
              <div className="message-in">{message.content}</div>

              {/* 삭제 버튼 추가 */}
              {message.role === "assistant" && (
                <button className="del ty-close" onClick={() => handleDeleteMessage(index)}>
                  삭제
                </button>
              )}
            </div>
          ))}
          {/* 스크롤이 최하단으로 자동으로 이동하도록 하기 위한 참조 */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 입력창 */}
      <div className="input-wrap">
        <div className="input-box">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // 기본 엔터 동작 방지
                handleSendMessage();
              }
            }}
            placeholder="메시지를 입력하세요..."
            rows={1} // 시작할 때 한 줄로 보이도록 설정
          />
          <button className="send" onClick={handleSendMessage}>전송</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
