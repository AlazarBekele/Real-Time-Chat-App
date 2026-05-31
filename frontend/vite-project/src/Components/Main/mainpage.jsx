import Navbar from "../Nav bar/navbar";
import Sidebar from "../Sidebar/sidebar";
import Chatpage from "../Chat/chatside";

function Mainpage() {
  return (
    <>
      <div className="w-full max-h-[100vh] overflow-hidden">
        <div className="w-full h-[8vh]">
          <Navbar />
        </div>
        <div className="w-full h-[92%] flex justify-center itmes-center">
          <Sidebar />
          <Chatpage />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
