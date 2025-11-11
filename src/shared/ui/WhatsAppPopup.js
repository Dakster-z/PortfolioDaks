import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { env, whatsappLink } from "../config/env";

function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const phoneSet = Boolean(env.whatsappPhone);
  const link = phoneSet ? whatsappLink("Hello! I'd like to chat.") : "";

  return (
    <div>
      {/* Floating WhatsApp Button */}
      <button
        aria-label="WhatsApp"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#25D366",
          color: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Popup Card */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "80px",
            width: "280px",
            padding: "14px",
            borderRadius: "12px",
            background: "#fff",
            color: "#333",
            boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
            zIndex: 9999,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong>WhatsApp</strong>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 16 }}
            >
              ×
            </button>
          </div>
          <p style={{ marginTop: 8, marginBottom: 12 }}>
            {phoneSet ? "Click to start a chat on WhatsApp." : "Set REACT_APP_WHATSAPP_PHONE in .env."}
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            {phoneSet ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Open WhatsApp
              </a>
            ) : (
              <span
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "#ccc",
                  color: "#333",
                  fontWeight: 600,
                }}
              >
                Not configured
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WhatsAppPopup;