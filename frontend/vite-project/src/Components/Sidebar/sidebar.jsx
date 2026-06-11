import { Icons } from "../../assets/Icons/Icons.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.js";
import { auth } from "../../firebase/firebase.js";

function Sidebar({ setSelectedConversation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = collection(db, "users");
      const snapshot = await getDocs(usersRef);

      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userData);
    };

    fetchUsers();
  }, []);

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
          {users.length}
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-auto px-3 pb-4">
        {users.map((user) => (
          <button
            key={`${user.uid}`}
            className="group flex w-full items-center gap-3 rounded-2xl p-3 text-left transition hover:bg-gray-50"
            type="button"
            onClick={() => {
              {
                setSelectedConversation(user);
              }
            }}
          >
            <span className="relative shrink-0">
              <img
                className="size-12 rounded-full object-cover ring-2 ring-white"
                src={user.photoURL}
                alt={`${user.firstname} ${user.lastname}`}
              />
              <span
                className={`absolute bottom-0 right-0 size-3.5 rounded-full border-2 border-white ${
                  user.isOnline ? "bg-emerald-500" : "bg-gray-300"
                }`}
              ></span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-3">
                <span className="truncate text-sm font-bold text-gray-900">
                  {`${user.firstname} ${user.lastname}`}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
