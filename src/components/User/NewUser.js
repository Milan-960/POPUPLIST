import React, { useState } from "react";
import Img from "../Video/Img.mp4";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./NewUsers.module.css";
import Error from "../UI/Error";

function User(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredGender.trim().length === 0
    ) {
      setError({
        title: "You have entered invalid input",
        message: "Please enter a valid name age and gender",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "You have entered invalid input",
        message: "Please enter a valid age (>0)",
      });

      return;
    }

    props.onAddUser(enteredUsername, enteredAge, enteredGender);
    setEnteredUsername("");
    setEnteredAge("");
    setEnteredGender("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };

  const errorhandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <Error title={error.title} message={error.message} onConfirm={errorhandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username" placeholder="lodo">
            User Name
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your Name"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age"> Age </label>
          <input
            id="age"
            type="int"
            placeholder="Enter your Age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <label htmlFor="usergender"> Gender</label>
          <input
            id="usergender"
            type="text"
            placeholder="Enter your Gender"
            value={enteredGender}
            onChange={genderChangeHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
        <video className={classes.lodu} autoPlay loop muted>
        <source src={Img} type="Video/mp4" />
      </video>
    </div>
  );
}

export default User;
