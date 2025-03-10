import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const WebSocketComponent = () => {
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');

    newSocket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    newSocket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMessages((prevMessages) => [...prevMessages, `Server says: ${event.data}`]);
    };

    newSocket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() !== '' && socket && socket.readyState === WebSocket.OPEN) {
      socket.send(input);
      setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
      setInput('');
    } else {
      console.log('WebSocket is not open or input is empty.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">چت آنلاین</h2>
      <div className="border p-3 rounded" style={{ height: '300px', overflowY: 'scroll' }}>
        <ul className="list-unstyled">
          {messages.map((msg, index) => (
            <li key={index} className="border-bottom pb-2">
              {msg}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group mt-3">
      <button className="btn btn-primary" onClick={sendMessage}>ارسال</button>

        <input
          type="text"
          className="form-control text-end"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="...پیامتون رو اینجا بنویسید"
        />
      </div>
    </div>
  );
};

export default WebSocketComponent;
