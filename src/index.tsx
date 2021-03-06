import { ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import { App } from "./pages/App";

// const root = ReactDOM.createRoot(document.getElementById("root")!);

// root.render(
//   <StrictMode>
//     <ColorModeScript />
//     <App />
//   </StrictMode>
// );

ReactDOM.render(
    <StrictMode>
        <ColorModeScript />
        <App />
    </StrictMode>,
    document.getElementById("root")
);
