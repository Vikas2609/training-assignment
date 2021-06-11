import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()
  //const [enteredUsername, setEnteredUsername] = useState("");
  //const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredAge=ageInputRef.current.value
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value=''
    ageInputRef.current.value=''
    
  };

  //const usernameChangeHandler = (event) => {
   // setEnteredUsername(event.target.value);
  //};

  //const ageChangeHandler = (event) => {
    //setEnteredAge(event.target.value);
  //};

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            id="username"
            type="text"
            //value={enteredUsername}
            //onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label>Age (Years)</label>
          <input
            id="age"
            type="number"
            min="0"
            max="100"
            //value={enteredAge}
            //onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
