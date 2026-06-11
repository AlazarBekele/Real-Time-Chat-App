import { useState } from "react";

import Navbar from "../Nav bar/navbar";
import Sidebar from "../Sidebar/sidebar";
import Chatpage from "../Chat/chatside";

function Mainpage() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  return (
    <>
      <div className="w-full max-h-[100vh] overflow-hidden">
        <div className="w-full h-[8vh]">
          <Navbar />
        </div>
        <div className="w-full h-[92%] flex justify-center itmes-center">
          <Sidebar setSelectedConversation={setSelectedConversation} />
          <Chatpage selectedConversation={selectedConversation} />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
