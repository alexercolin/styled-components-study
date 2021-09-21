import React, { useState } from "react";
import "./GoalForm.css";

const GoalForm = () => {
  const [goal, setGoal] = useState("");

  const list:any = [];

  const handleSubmitGoal = () => {
    list.push('oi');

    console.log(list)
  };

  return (
    <div>
      <p>Course Goal</p>
      <input type="text" />
      <button onClick={handleSubmitGoal} type="submit">Add Goal</button>
    </div>
  );
};

export default GoalForm;
