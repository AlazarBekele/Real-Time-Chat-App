import { useState } from "react";
import Chathead from "./ChatHeader/head";
// Render Multi Components
import RenderChatBody from "./renderComponent/renderComponent";
import Chatinput from "./Ownerinput/Chatinput";
import Chatfooter from "./ChatFooter/chatfooter";

function Chatpage({ selectedConversation }) {
  const [view, setView] = useState("chat");
  return (
    <>
      <div className="w-[80%] h-screen">
        <div className="w-full h-[8vh]">
          <Chathead setView={setView} />
        </div>
        <div className="w-full h-[72vh] bg-gray-100">
          <RenderChatBody
            view={view}
            setView={setView}
            selectedConversation={selectedConversation}
          />
        </div>
        <div className="w-full h-[8vh]">
          <Chatinput />
        </div>
        <div className="w-full h-[4vh]">
          <Chatfooter />
        </div>
      </div>
    </>
  );
}

export default Chatpage;
