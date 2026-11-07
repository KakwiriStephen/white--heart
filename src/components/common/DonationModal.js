import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaCheck, FaCopy, FaHeart } from "react-icons/fa";
import "./DonationModal.css";

const bankDetails = {
  bank: "Diamond Trust Bank",
  paybill: "516600",
  account: "5067934001",
};

const DonationModal = ({ show, onHide }) => {
  const [copied, setCopied] = useState({});

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((current) => ({ ...current, [key]: true }));
      window.setTimeout(() => {
        setCopied((current) => ({ ...current, [key]: false }));
      }, 2000);
    } catch {
      setCopied((current) => ({ ...current, [key]: false }));
    }
  };

  const renderDetail = (label, value, key) => (
    <div className="wh-donate-modal__detail">
      <div className="wh-donate-modal__detail-text">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <button
        className={`wh-donate-modal__copy${copied[key] ? " is-copied" : ""}`}
        type="button"
        onClick={() => copyToClipboard(value, key)}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        {copied[key] ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
      </button>
    </div>
  );

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="wh-donate-modal"
      aria-labelledby="wh-donate-modal-title"
    >
      <Modal.Header closeButton>
        <div className="wh-donate-modal__heading">
          <span className="wh-donate-modal__icon">
            <FaHeart aria-hidden="true" />
          </span>
          <div>
            <span className="wh-donate-modal__eyebrow">GIVE WITH HEART</span>
            <Modal.Title id="wh-donate-modal-title">Make a donation</Modal.Title>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body>
        <p className="wh-donate-modal__intro">
          Your contribution helps us bring care, opportunity, and hope to
          communities in need. Give securely through M-Pesa using the details
          below.
        </p>

        <div className="wh-donate-modal__bank">
          <div className="wh-donate-modal__bank-name">
            <span className="wh-donate-modal__bank-icon">
              <FaHeart aria-hidden="true" />
            </span>
            <div>
              <span>BANK</span>
              <strong>{bankDetails.bank}</strong>
            </div>
          </div>
          {renderDetail("Paybill number", bankDetails.paybill, "paybill")}
          {renderDetail("Account number", bankDetails.account, "account")}
        </div>

        <div className="wh-donate-modal__instructions">
          <h3>How to donate</h3>
          <ol>
            <li>Open the M-Pesa menu on your phone.</li>
            <li>
              Select <strong>Lipa na M-Pesa</strong>, then <strong>Pay Bill</strong>.
            </li>
            <li>
              Enter paybill number <strong>{bankDetails.paybill}</strong>.
            </li>
            <li>
              Enter account number <strong>{bankDetails.account}</strong>.
            </li>
            <li>Enter your amount and confirm with your M-Pesa PIN.</li>
          </ol>
        </div>

        <p className="wh-donate-modal__thanks">
          Thank you for your generosity. Your gift helps us continue creating
          positive change.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default DonationModal;
