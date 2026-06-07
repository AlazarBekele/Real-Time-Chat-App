import { Icons } from "../../assets/Icons/Icons";

function UserProfile({ setView }) {
  const imgUrl =
    "https://i.pinimg.com/736x/57/bb/d3/57bbd33f3b0d9159e3d9d3e9f4ac6450.jpg";

  const profileDetails = [
    { label: "Username", value: "@larrywillam" },
    { label: "Phone", value: "+1 (555) 017-2849" },
    { label: "Shared media", value: "124 files" },
  ];

  return (
    <aside className="h-[95%] w-full max-w-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <div className="h-full overflow-auto">
        <div className="border-b border-gray-100 bg-gray-50/80 px-6 py-7">
          <button
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-gray-600 transition hover:bg-white hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            type="button"
            onClick={() => setView("chat")}
          >
            <Icons.back className="size-5" />
            Back
          </button>
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <img
                className="size-28 rounded-full object-cover ring-4 ring-white shadow-md"
                src={imgUrl}
                alt="Larry Willam"
              />
              <span className="absolute bottom-2 right-2 size-5 rounded-full border-[3px] border-white bg-emerald-500"></span>
            </div>

            <div className="mt-4">
              <h1 className="text-xl font-bold text-gray-900">Larry Willam</h1>
              <p className="mt-1 text-sm font-medium text-emerald-600">
                Active now
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <button
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-xs font-semibold text-gray-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              type="button"
              onClick={() => setView("chat")}
            >
              <Icons.message className="size-5" />
              Message
            </button>
            <button
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-xs font-semibold text-gray-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              type="button"
            >
              <Icons.call className="size-5" />
              Call
            </button>
            <button
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-xs font-semibold text-gray-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
              type="button"
            >
              <Icons.videocall className="size-5" />
              Video
            </button>
          </div>
        </div>

        <div className="space-y-5 px-6 py-6">
          <section>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
              Bio
            </p>
            <p className="mt-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-700">
              God Is Good!! Building better chats one clean UI at a time.
            </p>
          </section>

          <section>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
              Profile
            </p>
            <div className="mt-2 divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white">
              {profileDetails.map((detail) => (
                <div
                  className="flex items-center justify-between gap-4 px-4 py-3"
                  key={detail.label}
                >
                  <span className="text-sm font-medium text-gray-500">
                    {detail.label}
                  </span>
                  <span className="text-right text-sm font-semibold text-gray-800">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 size-2 rounded-full bg-indigo-500"></div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Last seen in this chat
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Larry usually replies within a few minutes during active
                  hours.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
}

export default UserProfile;
