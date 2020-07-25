import React from "react";
import "./App.css";
import { Provider } from "./Provider";
import store from "./Store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter caption="First"></Counter>
    </Provider>
  );
}

export default App;
