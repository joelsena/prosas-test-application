import { ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./pages/App";

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  document.getElementById("root")
);
