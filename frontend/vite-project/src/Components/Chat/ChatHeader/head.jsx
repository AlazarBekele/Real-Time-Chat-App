import { Icons } from "../../../assets/Icons/Icons";

function Chathead({ setView, selectedConversation }) {
  const DefaultProfile =
    "https://tse2.mm.bing.net/th/id/OIP.2WwhkFMbYJ0p02JO6S-rHQHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3";
  return (
    <>
      <div className="w-full h-[8vh] p-4 flex justify-between items-center border-b border-gray-200 bg-gray-50/80">
        <div className="flex justify-start items-center gap-4">
          <button
            className="relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 cursor-pointer"
            type="button"
          >
            <img
              className="object-cover size-14 rounded-full ring-4 ring-white shadow-sm"
              src={selectedConversation.photoURL || DefaultProfile}
              alt="Profile"
              onClick={() => setView("profile")}
            />
            <span className="absolute bottom-0 right-0 size-4 rounded-full border-2 border-white bg-emerald-500"></span>
          </button>

          <div>
            <h1 className="font-bold">
              {selectedConversation.firstname} {selectedConversation.lastname}
            </h1>
            <p className="font-extralight text-xs text-gray-500">Active now</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Icons.call className="size-10 p-2 rounded-full text-gray-600 flex items-center justify-center transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
          <Icons.videocall className="size-10 p-2 rounded-full text-gray-600 flex items-center justify-center transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
          <Icons.menu className="size-10 p-2 rounded-full text-gray-600 flex items-center justify-center transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2" />
        </div>
      </div>
    </>
  );
}

export default Chathead;
