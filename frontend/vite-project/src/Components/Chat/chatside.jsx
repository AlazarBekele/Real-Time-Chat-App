import Chathead from "./ChatHeader/head";
import Chatbody from "./ChatBody/chatbody";

function Chatpage() {
  return (
    <>
      <div className="w-[80%] h-screen">
        <div>
          <Chathead />
        </div>
        <div className="w-full h-full bg-gray-100">
          <Chatbody />
        </div>
      </div>
    </>
  );
}

export default Chatpage;
