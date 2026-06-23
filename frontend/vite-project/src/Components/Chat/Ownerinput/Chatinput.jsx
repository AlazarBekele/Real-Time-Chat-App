import { useState } from "react";
import { auth } from "../../../firebase/firebase";
import { Icons } from "../../../assets/Icons/Icons";
import { db } from "../../../firebase/firebase";
import {
  collection,
  setDoc,
  serverTimestamp,
  doc,
  addDoc,
} from "firebase/firestore";

function Chatinput({ selectedConversation }) {
  const [message, setMessage] = useState("");

  const handelSend = async () => {
    // Participan Conversation
    const CurrentUser = auth.currentUser;
    const ParticipantUser = selectedConversation;

    const chatId = [CurrentUser.uid, ParticipantUser.uid].sort().join("_");

    if (!message.trim()) return;
    console.log(message);

    await setDoc(doc(db, "chats", "users"), {
      participants: chatId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log("Save on DB!!");

    await addDoc(collection(db, "chats", "users", "messages"), {
      senderId: CurrentUser.uid,
      text: message,
      createdAt: serverTimestamp(),
    });
    console.log("Message Saved!!");
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
