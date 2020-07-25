import reducer from "./reducer";
const actionType = {
  INIT: "@@redux/INIT"
};
const initialState = {
  First: 0,
  Second: 10,
  Third: 20
};


export const createStore = (reducer, preloadedState) => {
  let currentState = {};
  if(preloadedState){
    currentState = preloadedState;
  }
  let observers = []; //观察者队列
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    observers.forEach(fn => fn()); // 派发
  }
  function subscribe(fn) {
    observers.push(fn);
  }
  dispatch({ type: actionType.INIT }); //初始化store数据
  return { getState, subscribe, dispatch };
};

const store = createStore(reducer, initialState);

export default store;
