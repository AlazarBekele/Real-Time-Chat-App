const messages = [
  {
    id: 1,
    sender: "Larry",
    text: "Hey Alazar, are you there?",
    time: "7:48 PM",
    owner: false,
  },
  {
    id: 2,
    sender: "You",
    text: "Hi Larry! Yes, I am here. I was polishing the chat page layout.",
    time: "7:50 PM",
    owner: true,
    status: "Seen",
  },
  {
    id: 3,
    sender: "Larry",
    text: "Nice. The sidebar feels much better already. Can we make the message area feel cleaner too?",
    time: "7:52 PM",
    owner: false,
  },
  {
    id: 4,
    sender: "You",
    text: "Absolutely. I am improving the spacing, message bubbles, timestamps, and the overall reading flow.",
    time: "7:55 PM",
    owner: true,
    status: "Seen",
  },
  {
    id: 5,
    sender: "Larry",
    text: "Perfect. A simple, modern chat thread would match the rest of the UI.",
    time: "7:58 PM",
    owner: false,
  },
  {
    id: 6,
    sender: "You",
    text: "Done. The message list is now data-driven, easier to maintain, and ready for real messages later.",
    time: "8:00 PM",
    owner: true,
    status: "Delivered",
  },
];

function Chatbody() {
  return (
    <section className="h-full w-full overflow-hidden bg-gray-100">
      <div className="flex h-full flex-col overflow-auto px-6 py-5">
        <div className="sticky top-0 z-10 flex justify-center pb-5">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Today
          </span>
        </div>

        <div className="mt-auto flex flex-col gap-4 pb-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex w-full ${
                message.owner ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[58%] flex-col ${
                  message.owner ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 shadow-sm ${
                    message.owner
                      ? "rounded-br-md bg-indigo-600 text-white"
                      : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
                  }`}
                >
                  <p className="break-words text-sm leading-6">{message.text}</p>
                </div>

                <div
                  className={`mt-1 flex items-center gap-2 px-1 text-[11px] ${
                    message.owner ? "text-indigo-200" : "text-gray-400"
                  }`}
                >
                  <span className={message.owner ? "text-gray-400" : ""}>
                    {message.time}
                  </span>
                  {message.status && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-400">{message.status}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

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
