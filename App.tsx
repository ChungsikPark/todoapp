import React from "react";
import Navigator from "./pages/navigation/Navigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
