import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { auth } from "../../../firebase/firebase";

function Chatbody({ selectedConversation }) {
  if (!selectedConversation) {
    return <h1>Select User!</h1>;
  }

  useEffect(() => {
    getDocs(collection(db, "chats", "users", "messages"));
  });

  return (
    <section className="h-full w-full overflow-hidden bg-gray-100">
      <div>
        <h1>{selectedConversation.firstname}</h1>
      </div>
      <div className="flex h-full flex-col overflow-auto px-6 py-5">
        <div className="sticky top-0 z-10 flex justify-center pb-5">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Today
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-4 pb-2">
          <div>
            <h1>Hello</h1>
          </div>

          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="size-2 rounded-full bg-gray-300"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
              <span className="size-2 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chatbody;
