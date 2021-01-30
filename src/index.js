import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/app";
import { ItemServiceProvider } from "./components/item-service-context/item-service-context";
import ItemService from "./services/todo-store-service";
import store from "./store";

const itemService = new ItemService();

ReactDOM.render(
  <Provider store={store}>
    <ItemServiceProvider value={itemService}>
      <Router>
        <App />
      </Router>
    </ItemServiceProvider>
  </Provider>,

  document.getElementById("root")
);
