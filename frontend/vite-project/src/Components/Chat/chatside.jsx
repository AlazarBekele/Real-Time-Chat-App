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
        <div className="w-full h-[72vh] bg-gray-100">
          <Chatbody />
        </div>
        <div className="w-full h-[8vh] bg-sky-50">
          <Chatinput />
        </div>
        <div className="w-full h-[5vh]">
          <Chatfooter />
        </div>
      </div>
    </>
  );
}

export default Chatpage;
