import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full h-[8vh] border-b border-gray-200/80 bg-white/95 backdrop-blur flex items-center">
      <div className="w-1/2 h-full flex items-center justify-end">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center shadow-sm">
            N
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Nex<span className="text-indigo-600">Chat</span>
            <span className="text-indigo-600">.</span>
          </h1>
        </div>
      </div>

      <div className="w-1/2 px-4 sm:px-6 flex items-center justify-end">
        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50/80 px-3 py-2 shadow-sm">
          <button
            className="relative rounded-full outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            type="button"
          >
            <img
              className="object-cover size-11 rounded-full ring-2 ring-white shadow-sm"
              src="https://i.pinimg.com/736x/57/bb/d3/57bbd33f3b0d9159e3d9d3e9f4ac6450.jpg"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-white bg-emerald-500"></span>
          </button>

          <div className="h-8 w-px bg-gray-200"></div>

          <button
            className="size-10 rounded-full text-gray-600 flex items-center justify-center transition duration-300 hover:bg-indigo-100 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            type="button"
            aria-label="Settings"
          >
            <IoSettingsOutline size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
