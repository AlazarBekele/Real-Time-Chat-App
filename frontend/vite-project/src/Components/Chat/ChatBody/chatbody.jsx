import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function Chatbody() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello World",
      owner: false,
      time: "Now",
    },
  ]);

  return (
    <section className="h-full w-full overflow-hidden bg-gray-100">
      <div className="flex h-full flex-col overflow-auto px-6 py-5">
        <div className="sticky top-0 z-10 flex justify-center pb-5">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Today
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-4 pb-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex w-full ${
                message.owner ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[58%] flex-col ${
                  message.owner ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 shadow-sm ${
                    message.owner
                      ? "rounded-br-md bg-indigo-600 text-white"
                      : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                  }`}
                >
                  <p className="break-words text-sm leading-6">
                    {message.text}
                  </p>
                </div>

                <div
                  className={`mt-1 flex items-center gap-2 px-1 text-[11px] ${
                    message.owner ? "text-indigo-200" : "text-gray-400"
                  }`}
                >
                  <span className={message.owner ? "text-gray-400" : ""}>
                    {message.time}
                  </span>
                  {message.status && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{message.status}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="size-2 rounded-full bg-gray-300"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbody;
