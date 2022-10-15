import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import Loader from "components/shared/customCircularLoader/customLoader";
import { Provider } from "react-redux";
import { Store } from "store/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <Suspense fallback={<Loader suspense customSize={50} />}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
);
