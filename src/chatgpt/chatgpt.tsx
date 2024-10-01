import React, { useState } from "react";
import callChatGPT from "./chatgptService";

const Chatgpt: React.FC = () => {
  // const [input, setInput] = useState<string>("");
  // const [response, setResponse] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   try {
  //     const result = await callChatGPT(input);
  //     setResponse(result);
  //   } catch (error) {
  //     setResponse("Error fetching response from OpenAI");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      hiii
      {/* <h1>ChatGPT API Example</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )} */}
    </div>
  );
};

export default Chatgpt;
