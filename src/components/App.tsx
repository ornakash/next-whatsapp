import React from "react";
import { IconWhatsapp } from "../svgs/icon-whatsapp";

const WhatsappButton = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      <IconWhatsapp />
    </div>
  );
};

export default WhatsappButton;
