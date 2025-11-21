import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  let messageClass;
  const displayMessages = messages.map((val, ind) => {
    if (ind % 2 == 0) {
      messageClass = "self-end";
    } else messageClass = "self-start";
    messageClass += " w-1/2  rounded-xl p-2";
    return (
      <div key={ind} className={messageClass + " bg-stone-200"}>
        <Markdown>{val}</Markdown>
      </div>
    );
  });
  displayMessages.reverse();

  function sendPrompt() {
    if (text != "") {
      console.log(text);
      setMessages([...messages, text, ""]);
      setText("");
      reqAI(text);
    }
  }

  async function reqAI(text) {
    const res = await fetch(`http://localhost:8000/gen?prompt=${text}`);
    const stream = res.body.pipeThrough(new TextDecoderStream());
    for await (const chunk of stream) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] += chunk;
        return updated;
      });
    }
  }

  return (
    <div className="w-1/2 flex relative justify-center">
      <div className="flex flex-col-reverse mb-25 w-full gap-5 overflow-y-scroll">
        {displayMessages}
      </div>
      <div className="w-full absolute bottom-4 flex gap-5">
        <textarea
          onKeyDown={(e) => {
            if (e.key == "Enter" && e.ctrlKey) {
              sendPrompt();
            }
          }}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className=" w-full border-2 p-2 rounded-sm items-center"
          name="prompt"
          id="prompt"
          placeholder="enter your prompt"
          value={text}
        ></textarea>
        <button
          onClick={sendPrompt}
          className="rounded-xs bg-stone-500 self-center p-5 text-white hover:text-shadow-white hover:text-shadow-2xs"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
