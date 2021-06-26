import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";
const Todos = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(fetchTodos);
  }, []);
  return (
    <ul>
      {todes.data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps)(Todos);
