import React, { useState } from "react";
import NewUser from "./components/User/NewUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge, uGender) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          age: uAge,
          gender: uGender,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
