import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth } from "../../../firebase/firebase";

function Chatbody({ selectedConversation }) {
  if (!selectedConversation) {
    return <h1>Select User!</h1>;
  }

  const CurrentUser = auth.currentUser;
  const ParticipantUser = selectedConversation;
  const chatID = [CurrentUser.uid, ParticipantUser.uid].sort().join("_");

  const q = query(
    collection(db, "chats", chatID, "messages"),
    orderBy("createdAt", "asc"),
  );

  const [messages, setMessages] = useState([]);

  onSnapshot(q, (snapshot) => {
    const chatMessages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setMessages(chatMessages);
  });

  return (
    <section className="h-full w-full overflow-hidden bg-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col overflow-auto px-6 py-5">
        <div className="sticky top-0 z-10 flex justify-center pb-5">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Today
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-4 pb-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.senderId === CurrentUser.uid
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-3 py-2 ${
                  message.senderId === CurrentUser.uid
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.text}</p>
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
