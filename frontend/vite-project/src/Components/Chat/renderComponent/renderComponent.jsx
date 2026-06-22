// Pages
import Chatbody from "../ChatBody/chatbody";
import UserProfile from "../../userProfile/userprofile";

function RenderChatBody({ view, setView, selectedConversation }) {
  return (
    <>
      <div className="w-full h-[100%] flex justify-center items-center">
        {view === "chat" && (
          <Chatbody selectedConversation={selectedConversation} />
        )}
        {view === "profile" && (
          <UserProfile
            setView={setView}
            selectedConversation={selectedConversation}
          />
        )}
      </div>
    </>
  );
}

export default RenderChatBody;
