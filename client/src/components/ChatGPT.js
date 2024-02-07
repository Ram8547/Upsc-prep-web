import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ChatGPT.css'; // Import your CSS file here

function ChatGPT() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setChatHistory([...chatHistory, { role: 'user', content: input }]);

    try {
      const response = await axios.post('/api/chat', { messages: chatHistory });
      const botReply = response.data.choices[0].message.content; // Assuming the API response structure
      setChatHistory([...chatHistory, { role: 'assistant', content: botReply }]);
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
    }

    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Lets Talks about your question"
        />
        <button type="submit">Get Answer</button>
      </form>
    </div>
  );
}

export default ChatGPT;
