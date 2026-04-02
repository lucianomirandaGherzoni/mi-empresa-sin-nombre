import React from "react";
import "./WhatsAppFloat.css";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <svg
        className="whatsapp-float-icon"
        viewBox="0 0 48 48"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
          fill="#ffffff"
          fillOpacity="0.15"
        />
        <path
          d="M24 6.5C14.3 6.5 6.5 14.3 6.5 24c0 3.3.9 6.4 2.5 9.1L6.5 41.5l8.6-2.5c2.6 1.5 5.6 2.3 8.9 2.3 9.7 0 17.5-7.8 17.5-17.5S33.7 6.5 24 6.5z"
          fill="#ffffff"
        />
        <path
          d="M32.5 27.8c-.4-.2-2.5-1.2-2.9-1.4-.4-.2-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.2.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.5 1.5-1.5 3.6s1.6 4.2 1.8 4.4c.2.3 3.1 4.7 7.5 6.6 1.1.5 1.9.7 2.5.9 1.1.3 2.1.3 2.8.2.9-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.2-.2-.5-.3-.9-.5z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
};

export { WhatsAppFloat };