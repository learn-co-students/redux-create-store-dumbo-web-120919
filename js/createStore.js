

function createStore() {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  };

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    
    case 'DECREASE_COUNT':
      return { count: state.count - 1};

    default:
      return state;
  }
};

let store = createStore();
store.dispatch({type: '@@INIT'});
  


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

store.dispatch({ type: '@@INIT' })

let button = document.getElementById('button');
button.addEventListener('click', () => {
    store.dispatch({ type: 'INCREASE_COUNT' });
})

let button2 = document.querySelector('#button2')
button2.addEventListener('click', () => {
  store.dispatch({type: 'DECREASE_COUNT'})
})


