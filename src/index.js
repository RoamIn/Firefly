import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import routes from "routes";
import RouterView from "components/router-view";
import Sidebar from "components/sidebar";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <main className="layout">
      <aside className="layout__aside">
        <Sidebar />
      </aside>
      <div className="layout__content">
        <RouterView routes={routes} />
      </div>
    </main>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
