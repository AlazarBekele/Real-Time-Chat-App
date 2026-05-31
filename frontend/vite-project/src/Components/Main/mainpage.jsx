import Navbar from "../Nav bar/navbar";
import Sidebar from "../Sidebar/sidebar";
import Chatpage from "../Chat/chatside";

function Mainpage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center itmes-center">
          <Sidebar />
          <Chatpage />
        </div>
      </div>
    </>
  );
}

export default Mainpage;
