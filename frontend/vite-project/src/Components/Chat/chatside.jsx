import { useState } from "react";
import Chathead from "./ChatHeader/head";

// Render Multi Components
import RenderChatBody from "./renderComponent/renderComponent";
import Chatinput from "./Ownerinput/Chatinput";
import Chatfooter from "./ChatFooter/chatfooter";

function Chatpage({ selectedConversation }) {
  const [view, setView] = useState("chat");

  if (!selectedConversation) {
    return (
      <div className="flex h-screen w-[80%] flex-col bg-gray-100">
        <div className="flex flex-1 items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Select a conversation
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Choose a user from the sidebar to start chatting.
            </p>
          </div>
        </div>
        <div className="h-[4vh]">
          <Chatfooter />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-[80%] h-screen">
        <div className="w-full h-[8vh]">
          <Chathead
            setView={setView}
            selectedConversation={selectedConversation}
          />
        </div>
        <div className="w-full h-[72vh] bg-gray-100">
          <RenderChatBody
            view={view}
            setView={setView}
            selectedConversation={selectedConversation}
          />
        </div>
        <div className="w-full h-[8vh]">
          <Chatinput selectedConversation={selectedConversation} />
        </div>
        <div className="w-full h-[4vh]">
          <Chatfooter />
        </div>
      </div>
    </>
  );
}

export default Chatpage;
