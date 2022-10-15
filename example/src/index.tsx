import React from "react";
import ReactDOM from "react-dom/client";
import { WhatsappButton } from "../../src/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <div>
      <WhatsappButton />
    </div>
    <hr />
  </React.StrictMode>,
);
