const ADD = "ADD";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
let count = 0;
// Change code below this line

store.subscribe(() => {
  count++;
});

// Change code above this line

store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
