import { useState } from "react";
import { Icons } from "../../../assets/Icons/Icons";

function Chatinput({ ChatId, currentUser }) {
  const [message, setMessage] = useState("");

  const handelSend = async () => {
    if (!message.trim()) return;

    console.log("Send:", message);
  };
  return (
    <>
      <div className="w-full p-4 flex justify-start items-center border-t border-gray-200">
        <div className="w-1/10 p-2 flex justify-end items-center">
          <Icons.plus className="text-gray-500 size-8 p-2 rounded-full text-gray-600 flex items-center justify-center transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
        </div>
        <div className="w-8/10">
          <input
            className="ps-5 bg-indigo-100 w-full p-2 rounded-lg outline-none"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handelSend();
              }
            }}
            placeholder="Type a message..."
          />
        </div>
        <div className="w-1/10 p-2 flex justify-start items-center">
          <Icons.send
            className="text-gray-500 size-9 p-2 rounded-full text-gray-600 flex items-center justify-center bg-indigo-100"
            onClick={handelSend}
          />
        </div>
      </div>
    </>
  );
}

export default Chatinput;
