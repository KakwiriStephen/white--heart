import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FaCopy, FaCheck } from 'react-icons/fa';

const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 15px;
    border: none;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  .modal-header {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    border-radius: 15px 15px 0 0;
    border: none;
    padding: 25px;
    
    .modal-title {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }
  
  .modal-body {
    padding: 30px;
  }
  
  .bank-details {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 25px;
    margin: 20px 0;
    border-left: 4px solid #e74c3c;
  }
  
  .bank-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 15px;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      font-weight: 600;
      color: #495057;
    }
    
    .value {
      font-family: 'Courier New', monospace;
      font-weight: 700;
      color: #e74c3c;
      font-size: 1.1rem;
    }
  }
  
  .copy-btn {
    background: #e74c3c;
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    margin-left: 10px;
    transition: all 0.3s ease;
    
    &:hover {
      background: #c0392b;
      transform: translateY(-1px);
    }
  }
  
  .instructions {
    background: #e8f4fd;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    
    h6 {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    ol {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 8px;
        color: #495057;
        line-height: 1.5;
      }
    }
  }
`;

const DonationModal = ({ show, onHide }) => {
  const [copied, setCopied] = React.useState({});

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [key]: true });
      setTimeout(() => {
        setCopied({ ...copied, [key]: false });
      }, 2000);
    });
  };

  const bankDetails = {
    bank: 'Diamond Trust Bank',
    paybill: '516600',
    account: '5067934001'
  };

  return (
    <StyledModal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>💝 Make a Donation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <div className="text-center mb-4">
                <h5 className="text-muted">Support WhiteHeart Charity</h5>
                <p className="text-muted">
                  Your contribution helps us make a difference in communities worldwide. 
                  Choose your preferred payment method below.
                </p>
              </div>
              
              <div className="bank-details">
                <div className="bank-name">🏦 {bankDetails.bank}</div>
                
                <div className="detail-row">
                  <span className="label">Paybill Number:</span>
                  <div>
                    <span className="value">{bankDetails.paybill}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(bankDetails.paybill, 'paybill')}
                    >
                      {copied.paybill ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
                
                <div className="detail-row">
                  <span className="label">Account Number:</span>
                  <div>
                    <span className="value">{bankDetails.account}</span>
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(bankDetails.account, 'account')}
                    >
                      {copied.account ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="instructions">
                <h6>📱 How to Donate via M-Pesa:</h6>
                <ol>
                  <li>Go to M-Pesa menu on your phone</li>
                  <li>Select "Lipa na M-Pesa"</li>
                  <li>Choose "Pay Bill"</li>
                  <li>Enter Paybill Number: <strong>{bankDetails.paybill}</strong></li>
                  <li>Enter Account Number: <strong>{bankDetails.account}</strong></li>
                  <li>Enter the amount you wish to donate</li>
                  <li>Enter your M-Pesa PIN and confirm</li>
                </ol>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-muted small">
                  <strong>Thank you for your generosity!</strong><br/>
                  Your donation helps us continue our mission of creating positive change.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </StyledModal>
  );
};

export default DonationModal;
