import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AppStateProvider } from "./state/AppStateContext";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);
root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
