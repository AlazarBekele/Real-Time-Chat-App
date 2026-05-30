import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <div className="w-full h-[7vh] border-b border-gray-200 flex items-center">
        <div className="w-1/2 h-full flex items-center justify-end">
          <h1 className="text-2xl font-bold text-indigo-600">
            NexChat<span className="text-indigo-600">.</span>
          </h1>
        </div>

        <div className="w-1/2 p-2 me-5 flex items-center justify-end">
          <div className="w-2/10 flex justify-center items-center gap-4">
            <div>
              <img
                className="object-cover size-12 rounded-full bg-radial-[at_25%_25%]"
                src="https://i.pinimg.com/736x/57/bb/d3/57bbd33f3b0d9159e3d9d3e9f4ac6450.jpg"
                alt="Profile"
              />
            </div>
            <IoSettingsOutline
              size={35}
              className="text-gray-600 p-2 hover:bg-indigo-200 rounded-sm transition duration-500"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
