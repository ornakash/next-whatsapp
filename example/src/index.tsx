import React from "react";
import ReactDOM from "react-dom/client";
import { WhatsappButton } from "next-whatsapp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <div>
      <h2>Default counter</h2>
      <WhatsappButton />
    </div>
    <hr />
  </React.StrictMode>,
);
