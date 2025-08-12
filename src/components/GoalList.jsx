import React, { useEffect } from 'react';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

import { useDispatch, useSelector } from 'react-redux';
import {
  asyncReceiveGoals,
  asyncAddGoal,
  asyncDeleteGoal,
} from '../states/goals/action';

function GoalsList() {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveGoals());
  }, [dispatch]);

  function onAddGoal(text) {
    dispatch(asyncAddGoal(text));
  }

  function onDeleteGoal(id) {
    dispatch(asyncDeleteGoal(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
