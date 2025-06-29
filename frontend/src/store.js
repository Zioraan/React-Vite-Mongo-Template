export const initialStore = () => {
  return {
    message: "Hello, World!",
    buttonCount: 0,
    backendMessage: "Getting the backend message...",
  };
};

export default function storeReducer(store, action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...store, message: action.payload };
    case "INCREMENT_BUTTON_COUNT":
      return { ...store, buttonCount: store.buttonCount + 1 };
    case "SET_BACKEND_MESSAGE":
      return { ...store, backendMessage: action.payload };
    default:
      return store;
  }
}
