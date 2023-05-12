import React, { useEffect, useRef, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";

export const TodoList: React.FC = () => {
  const isMountedRef = useRef(false);

  const pages = [1, 2, 3, 4, 5];

  const { todos, error, limit, loading, page } = useTypedSelector(
    (state) => state.todo
  );
  console.log(page);
  const { fetchTodos, setTodoPage } = useActions();
  useEffect(() => {
    if (isMountedRef.current) {
      fetchTodos(page, limit);
    } else {
      isMountedRef.current = true;
    }
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: "10px",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
