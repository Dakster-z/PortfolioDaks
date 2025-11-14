// Centralized access to client-side environment variables (CRA requires REACT_APP_ prefix)

export const env = {
  whatsappPhone: process.env.REACT_APP_WHATSAPP_PHONE || "",
  schedulerUrl: process.env.REACT_APP_SCHEDULER_URL || "",
};

export const whatsappLink = (message = "") => {
  const phone = env.whatsappPhone.replace(/[^\d]/g, "");
  const base = "https://wa.me/";
  if (!phone) return "";
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `${base}${phone}${query}`;
};
// Only store non-sensitive/public keys here. Secrets must live on the server.

export const EMAILJS = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "",
};

export const ANALYTICS = {
  writeKey: process.env.REACT_APP_ANALYTICS_WRITE_KEY || "",
};

export const API = {
  baseUrl: process.env.REACT_APP_API_BASE_URL || "",
};

export function assertClientEnv() {
  // Optional: warn in dev if critical envs are missing
  if (process.env.NODE_ENV !== "production") {
    const missing = [];
    // Add required keys you expect to be present
    // Example: EmailJS public key is required if EmailJS is enabled
    if (!EMAILJS.publicKey && (EMAILJS.serviceId || EMAILJS.templateId)) {
      missing.push("REACT_APP_EMAILJS_PUBLIC_KEY");
    }
    if (missing.length) {
      // eslint-disable-next-line no-console
      console.warn("Missing client env vars:", missing.join(", "));
    }
  }
}