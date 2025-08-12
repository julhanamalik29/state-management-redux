/**
 * Library code
 */

// --- STORE --- //

function createStore(reducer) {
  /**
   * Store memiliki 4 hal
   * 1. State
   * 2. Mendapatkan state
   * 3. Men-subscribe perubahan state
   * 4. Memperbarui state
   */

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter((listenerItem) => listenerItem !== listener);
    };
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  // Return the store
  return {
    getState,
    subscribe,
    dispatch,
  };
}

export { createStore };
