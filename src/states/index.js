import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import { thunk, todoDeletionCheck } from './middlewares';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, todoDeletionCheck)
);

export { store };

// // subscribe state changed
// store.subscribe(() => {
//   console.log('state changed!');
//   console.log(store.getState());
// });

// //
// // --- PENGUJIAN --- //
// // Pengujian todos
// store.dispatch(
//   addTodoActionCreator({
//     id: 1,
//     text: 'Learn React',
//   })
// );

// store.dispatch(
//   addTodoActionCreator({
//     id: 2,
//     text: 'Redux',
//   })
// );

// store.dispatch(
//   addTodoActionCreator({
//     id: 3,
//     text: 'Dihapus',
//   })
// );

// // menghapus todo dengan id 3
// store.dispatch(deleteTodoActionCreator(3));
// // mengubah Learn React menjadi complete
// store.dispatch(toggleTodoActionCreator(1));

// //
// // Pengujian goals
// store.dispatch(
//   addGoalActionCreator({
//     id: 1,
//     text: 'Get a Doctorate',
//   })
// );

// store.dispatch(
//   addGoalActionCreator({
//     id: 2,
//     text: 'Be an Entrepreneur',
//   })
// );

// store.dispatch(deleteGoalActionCreator(1));
