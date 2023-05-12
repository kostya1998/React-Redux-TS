import React, { useEffect, useRef } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";

export const UserList: React.FC = () => {
  const isMountedRef = useRef(false);

  const { error, loading, users } = useTypedSelector((state) => state.user);

  const { fetchUsers } = useActions();
  useEffect(() => {
    if (isMountedRef.current) {
      fetchUsers();
      console.log("render");
    } else {
      isMountedRef.current = true;
    }
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
