import Chathead from "./ChatHeader/head";
import Chatbody from "./ChatBody/chatbody";
import Chatinput from "./Ownerinput/Chatinput";
import Chatfooter from "./ChatFooter/chatfooter";

function Chatpage() {
  return (
    <>
      <div className="w-[80%] h-screen">
        <div className="w-full h-[8vh]">
          <Chathead />
        </div>
        <div className="w-full h-[75vh] bg-gray-100">
          <Chatbody />
        </div>
        <div className="w-full h-[5vh]">
          <Chatinput />
        </div>
      </div>
    </>
  );
}

export default Chatpage;
