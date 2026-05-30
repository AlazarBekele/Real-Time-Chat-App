import { Icons } from "../../assets/Icons/Icons.jsx";

function LoginPage() {
  return (
    <>
      <div className="w-full h-screen relative bg-sky-50 flex justify-center items-center">
        <h1 className="text-9xl opacity-10 font-extrabold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          NexChat...
        </h1>
        <div className="absolute w-[450px] h-[550px] p-4 shadow-lg flex flex-col justify-center items-center border-6 backdrop-blur-lg border-white rounded-lg">
          <div className="w-full">
            <div className="flex flex-col justify-center items-center p-2 pb-5">
              <h1 className="font-extrabold text-4xl text-purple-500">Login</h1>
              <p className="mt-1 text-center text-gray-500 text-sm">
                Login to continue your conversations
              </p>
            </div>

            <div className="w-full flex flex-col gap-3">
              <label className="w-full px-2 relative block">
                <span className="mb-1 block text-sm font-semibold text-gray-700">
                  Username
                </span>
                <Icons.user className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
                <input
                  className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                />
              </label>

              <label className="w-full px-2 relative block">
                <span className="mb-1 block text-sm font-semibold text-gray-700">
                  Password
                </span>
                <Icons.passowrd className="text-gray-500 absolute left-6 top-[42px] -translate-y-1/2" />
                <input
                  className="ps-10 bg-indigo-100 w-full h-[48px] shadow-sm p-2 rounded-lg outline-none border border-transparent text-gray-800 placeholder:text-gray-500 transition focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </label>
            </div>

            <div className="w-full p-4 pb-3 flex flex-col justify-center items-center">
              <button
                className="h-11 text-lg rounded-lg w-full bg-purple-600 font-bold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                type="button"
              >
                Login
              </button>

              <p className="pt-3 text-gray-600 text-sm">
                <span className="font-extrabold">Don't</span> have an account?
                <button
                  className="ms-1 font-extrabold text-purple-600 hover:text-purple-700"
                  type="button"
                >
                  Sign up
                </button>
              </p>
            </div>

            <div className="w-full px-2">
              <div className="flex items-center gap-3 pb-3">
                <div className="h-px flex-1 bg-gray-200"></div>
                <p className="text-xs font-semibold uppercase text-gray-400">
                  or
                </p>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              <button
                className="mb-2 w-full h-10 rounded-lg border border-gray-200 bg-white flex justify-center items-center gap-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                type="button"
              >
                <Icons.google className="text-lg text-red-500" />
                Login with <span className="font-extrabold">Google</span>
              </button>

              <button
                className="w-full h-10 rounded-lg border border-gray-900 bg-gray-900 flex justify-center items-center gap-3 text-sm text-white transition hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2"
                type="button"
              >
                <Icons.github className="text-lg" />
                Login with <span className="font-extrabold">Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
