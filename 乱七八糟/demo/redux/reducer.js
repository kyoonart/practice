const initState = {
  loading: false,
  data: [],
  error: "",
};
export default function (state = initState, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "loadsucess":
      return {
        ...state,
        data: action.todos,
        loading: false,
      };
    case "error":
      return { ...state, error: action.error };
    default:
      "";
  }
}
