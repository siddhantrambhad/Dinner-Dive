import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    const res = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    }, {
      headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` }
    });

    setResponse(res.data.choices[0].message.content);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleChat}>Ask</button>
      <p>Bot: {response}</p>
    </div>
  );
};

export default Chatbot;
