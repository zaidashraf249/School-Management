import React, { useState } from "react";
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const TwoFactorAuth = () => {
  const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // only digits
    if (value) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      // Move to next input
      if (index < code.length - 1) {
        document.getElementById(`code-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (code[index] === "") {
        // Move to previous input
        if (index > 0) {
          document.getElementById(`code-${index - 1}`)?.focus();
        }
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  const handleSubmit = () => {
    const finalCode = code.join("");
    console.log("Submitted Code:", finalCode);
  };

  return (
    <>
      <h5 className="fw-bold mb-3 text-center" style={{ fontSize: "20px" }}>
        Two-Factor Authentication
      </h5>
      <div className="mx-auto" style={{ maxWidth: "260px" }}>
        <p
          className="mb-4 text-secondary text-start"
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        >
          Set up your two-factor authentication by scanning the QR code below
          with an authentication app such as Google Authenticator or Authy.
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="d-flex justify-content-center mb-4 shadow-sm rounded-2 overflow-hidden"
          style={{ width: "fit-content", backgroundColor: "#ffffff" }}
        >
          {/* QR Code Section */}
          <div className="bg-white p-2 d-flex align-items-center rounded-2 justify-content-center">
            <QRCode
              value="otpauth://totp/MyApp?secret=JBSWY3DPEHPK3PXP"
              size={90}
            />
          </div>

          {/* Lock Icon Section */}
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#00b4b6",
              padding: "0 16px", // horizontal padding to match icon spacing
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 24 24"
            >
              <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5zm3 8H9V6a3 3 0 0 1 6 0v3z" />
              <path d="M10.293 13.293a1 1 0 0 1 1.414 0l.293.293.293-.293a1 1 0 1 1 1.414 1.414L12.707 15l1.293 1.293a1 1 0 0 1-1.414 1.414L12 16.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L10.293 15l-1.293-1.293a1 1 0 0 1 0-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-muted mb-2 text-start" style={{ fontSize: "14px" }}>
        Enter the 6-digit code from the app
      </p>

      <div
        className="d-flex justify-content-center flex-wrap mb-3"
        style={{ maxWidth: "100%" }}
      >
        {code.map((digit, i) => (
          <input
            key={i}
            id={`code-${i}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="form-control text-center fw-semibold shadow-sm"
            style={{
              width: "48px",
              height: "56px",
              fontSize: "20px",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>

      <div className="d-grid mb-3" style={{ width: "100%" }}>
        <Button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#f9a825",
            border: "none",
            borderRadius: "10px",
            height: "48px",
            fontWeight: "600",
          }}
        >
          Continue
        </Button>
      </div>

      <div className="text-center d-grid mb-3">
        <Button
          variant="link"
          className="text-muted fw-semibold text-decoration-none p-0"
          style={{
            border: "none",
            borderRadius: "10px",
            height: "48px",
            fontWeight: "600",
          }}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default TwoFactorAuth;
