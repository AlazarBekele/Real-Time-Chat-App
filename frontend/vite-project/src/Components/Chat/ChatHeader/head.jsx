import { Icons } from "../../../assets/Icons/Icons";

function Chathead() {
  return (
    <>
      <div className="p-4 flex justify-between items-center border-b border-gray-200 bg-gray-50/80">
        <div className="flex justify-start items-center gap-4">
          <button
            className="relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            type="button"
          >
            <img
              className="object-cover size-14 rounded-full ring-4 ring-white shadow-sm"
              src="https://i.pinimg.com/736x/57/bb/d3/57bbd33f3b0d9159e3d9d3e9f4ac6450.jpg"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 size-4 rounded-full border-2 border-white bg-emerald-500"></span>
          </button>

          <div>
            <h1 className="font-bold">Larry Willam</h1>
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
