/**
 * Application code
 */

// import { createStore } from './redux';
import { createStore } from 'redux';

// --- ACTION --- //
// State todos
function addTodoActionCreator({ id, text }) {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false,
    },
  };
}

function deleteTodoActionCreator(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id,
    },
  };
}

function toggleTodoActionCreator(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id,
    },
  };
}

// State goals
function addGoalActionCreator({ id, text }) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text,
    },
  };
}

function deleteGoalActionCreator(id) {
  return {
    type: 'DELETE_GOAL',
    payload: {
      id,
    },
  };
}

// --- REDUCER --- //
// Reducer todos
function todosReducer(todos = [], action = {}) {
  if (action.type === 'ADD_TODO') {
    return [...todos, action.payload];
  }

  if (action.type === 'DELETE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id);
  }

  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }

      return todo;
    });
  }

  return todos;
}

// Reducer goals
function goalsReducer(goals = [], action = {}) {
  if (action.type === 'ADD_GOAL') {
    return [...goals, action.payload];
  }

  if (action.type === 'DELETE_GOAL') {
    return goals.filter((goal) => goal.id !== action.payload.id);
  }

  return goals;
}

// --- ROOT REDUCER --- //

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action),
  };
}

//
// --- PENGUJIAN --- //

// consume
const store = createStore(rootReducer);

// subscribe state changed
store.subscribe(() => {
  console.log('state changed!');
  console.log(store.getState());
});

// Pengujian todos
store.dispatch(
  addTodoActionCreator({
    id: 1,
    text: 'Learn React',
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 2,
    text: 'Redux',
  })
);

store.dispatch(
  addTodoActionCreator({
    id: 3,
    text: 'Dihapus',
  })
);

// menghapus todo dengan id 3
store.dispatch(deleteTodoActionCreator(3));
// mengubah Learn React menjadi complete
store.dispatch(toggleTodoActionCreator(1));

//
// Pengujian goals
store.dispatch(
  addGoalActionCreator({
    id: 1,
    text: 'Get a Doctorate',
  })
);

store.dispatch(
  addGoalActionCreator({
    id: 2,
    text: 'Be an Entrepreneur',
  })
);

store.dispatch(deleteGoalActionCreator(1));
