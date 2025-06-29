import useGlobalReducer from "./useGlobalReducer";

export default function useActions() {
  const { dispatch, store } = useGlobalReducer();

  const changeMessage = (message) => {
    if (message === store.message) {
      dispatch({
        type: "SET_MESSAGE",
        payload: "That was the same message silly goose",
      });
      return;
    }
    if (message === "") {
      dispatch({ type: "SET_MESSAGE", payload: "Please enter a message" });
      return;
    }
    dispatch({ type: "SET_MESSAGE", payload: message });
    return;
  };

  const changeBackendMessage = async () => {
    try {
      if (!import.meta.env.VITE_API_URL) {
        dispatch({
          type: "SET_BACKEND_MESSAGE",
          payload: "API URL is not defined in .env file",
        });
        return;
      }
      if (
        store.backendMessage ===
        "If you see this message the backend is working!"
      ) {
        return;
      }
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/test`);
      if (!response.ok) {
        dispatch({
          type: "SET_BACKEND_MESSAGE",
          payload:
            "Failed to fetch backend message, make sure backend is running",
        });
      }
      const data = await response.json();
      dispatch({ type: "SET_BACKEND_MESSAGE", payload: data.message });
    } catch (error) {
      console.error("Error fetching backend message:", error);
      dispatch({
        type: "SET_BACKEND_MESSAGE",
        payload: "Failed to fetch backend message",
      });
    }
  };

  return {
    changeMessage,
    changeBackendMessage,
  };
}
