import React, { useEffect, useState } from "react";
import "./GoalForm.css";

interface IGoal {
  description: string;
}

const GoalForm = () => {
  const [goal, setGoal] = useState<IGoal>(Object);
  const [listGoal, setListGoal] = useState<IGoal[]>([]);

  const goalInputHandler = (event: any) => {
    if (event.target.value !== "") {
      setGoal(event.target.value);
    }
  };

  const handleSubmitGoal = () => {
    setListGoal([...listGoal, goal]);
  };

  const goalDeleteHandler = () => {
    const listDelete = [...listGoal, goal]
    listDelete.shift()
    setListGoal(listDelete)
  }

  return (
    <div>
      <p>Course Goal</p>
      <input value={goal.description} onChange={goalInputHandler} type="text" />
      <button onClick={handleSubmitGoal} type="submit">
        Add Goal
      </button>
      {listGoal.map((description, i) => (
        <li onClick={goalDeleteHandler} key={i}>{description}</li>
      ))}
    </div>
  );
};

export default GoalForm;
