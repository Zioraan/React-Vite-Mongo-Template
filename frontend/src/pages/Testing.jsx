import React, { useEffect, useState } from "react";
import useActions from "../hooks/useActions";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Testing = () => {
  const [messageInput, setMessage] = useState("");
  const { store, dispatch } = useGlobalReducer();
  const { changeMessage, changeBackendMessage } = useActions();

  useEffect(() => {
    changeBackendMessage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Testing Page</h1>
      <p className="text-gray-700">
        This is a simple testing page to verify the routes.
      </p>
      <button
        onClick={() => alert("Button clicked!")}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Click Me
      </button>
      <p className="mt-4 text-gray-700 bg-yellow-400 p-4 rounded">
        <span className="font-bold">This is the message form the store,</span>
        <br />
        {store.message}
      </p>
      <div className="mt-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Enter a message"
          value={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              changeMessage(e.target.value);
              setMessage("");
            }
          }}
          className="mt-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={() => changeMessage(messageInput)}
          className=" bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-4 ms-2"
        >
          Change Message
        </button>
      </div>
      <button
        onClick={() => dispatch({ type: "INCREMENT_BUTTON_COUNT" })}
        className="mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
      >
        Count: {store.buttonCount}
      </button>
      <h1 className="text-2xl font-bold mt-4">{store.backendMessage}</h1>
    </div>
  );
};
