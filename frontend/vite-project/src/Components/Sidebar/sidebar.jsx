import { Icons } from "../../assets/Icons/Icons.jsx";

const conversations = [
  {
    name: "Larry Willam",
    message: "Hi! Alazar how are u...",
    time: "2h",
    active: true,
    selected: true,
    unread: 2,
    avatar:
      "https://images.pexels.com/photos/31419914/pexels-photo-31419914.jpeg?cs=srgb&dl=pexels-optical-chemist-340351297-31419914.jpg&fm=jpg",
  },
  {
    name: "Harry Potter",
    message: "Can we review the chat page today?",
    time: "3m",
    active: true,
    selected: false,
    unread: 1,
    avatar: "https://i.pinimg.com/564x/74/9f/a2/749fa2a77d98eda3fb97985c88792e4c.jpg",
  },
  {
    name: "Jone Willam",
    message: "The new sidebar looks much cleaner.",
    time: "5m",
    active: false,
    selected: false,
    unread: 0,
    avatar:
      "https://tse2.mm.bing.net/th/id/OIP.Y6TxrlNYQs3IIDylc6dLawHaHa?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-[20%] min-w-[280px] flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 p-4">
        <div className="flex min-h-16 w-full items-center justify-between rounded-2xl bg-indigo-600 px-4 shadow-lg shadow-indigo-100">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Icons.message size={20} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-bold text-white">Alazar.</p>
              <p className="truncate text-xs text-indigo-100">3 active chats</p>
            </div>
          </div>

          <button
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm transition duration-300 hover:rotate-45 hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
            type="button"
            aria-label="Start new chat"
          >
            <Icons.plus size={18} />
          </button>
        </div>

        <div className="relative mt-4">
          <Icons.search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            className="h-11 w-full rounded-xl border border-transparent bg-gray-100 px-4 ps-11 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-200 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            type="search"
            name="search"
            id="search"
            placeholder="Search messages"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-4">
        <h2 className="text-xs font-bold uppercase tracking-wide text-gray-400">
          Messages
        </h2>
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500">
          {conversations.length}
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-auto px-3 pb-4">
        {conversations.map((conversation) => (
          <button
            key={conversation.name}
            className={`group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition ${
              conversation.selected
                ? "bg-indigo-50 shadow-sm ring-1 ring-indigo-100"
                : "hover:bg-gray-50"
            }`}
            type="button"
          >
            <span className="relative shrink-0">
              <img
                className="size-12 rounded-full object-cover ring-2 ring-white"
                src={conversation.avatar}
                alt={conversation.name}
              />
              <span
                className={`absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white ${
                  conversation.active ? "bg-emerald-500" : "bg-gray-300"
                }`}
              ></span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-3">
                <span className="truncate text-sm font-bold text-gray-900">
                  {conversation.name}
                </span>
                <span className="shrink-0 text-xs font-medium text-gray-400">
                  {conversation.time}
                </span>
              </span>
              <span className="mt-1 flex items-center justify-between gap-2">
                <span className="truncate text-xs text-gray-500">
                  {conversation.message}
                </span>
                {conversation.unread > 0 && (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[11px] font-bold text-white">
                    {conversation.unread}
                  </span>
                )}
              </span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
