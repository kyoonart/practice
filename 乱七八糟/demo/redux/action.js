export function fetchTodes() {
  return (dispatch) => {
    dispatch({ type: "logining" });
    return fetch("https://jsonplaceholder.typicode.com/todo")
      .then((result) => {
        dispatch({ type: "loginSuccess", todos });
      })
      .catch((err) => {
        dispatch({ type: "loginError", err });
      });
  };
}
