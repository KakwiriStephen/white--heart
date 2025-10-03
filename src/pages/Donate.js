import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaCopy, FaCheck, FaHeart } from 'react-icons/fa';

const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1469571486292-b53601021a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
  background-size: cover;
  padding: 150px 0 100px;
  color: #fff;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .breadcrumb {
    background: transparent;
    justify-content: center;
    
    .breadcrumb-item {
      color: rgba(255, 255, 255, 0.7);
      
      &.active {
        color: #fff;
      }
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        
        &:hover {
          color: #e74c3c;
        }
      }
      
      & + .breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

const DonateSection = styled.section`
  padding: 100px 0;
  background-color: #f8f9fa;
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    
    p {
      font-size: 1.2rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
    }
  }
  
  .two-column-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;

const BankDetailsCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
  
  .card-header {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    border: none;
    padding: 30px;
    text-align: center;
    
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin: 0;
    }
    
    p {
      margin: 10px 0 0 0;
      opacity: 0.9;
    }
  }
  
  .card-body {
    padding: 40px;
  }
  
  .bank-info {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 25px;
    margin: 20px 0;
    border-left: 4px solid #e74c3c;
  }
  
  .bank-name {
    font-size: 1.4rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid #e9ecef;
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      font-weight: 600;
      color: #495057;
      font-size: 1.1rem;
    }
    
    .value {
      font-family: 'Courier New', monospace;
      font-weight: 700;
      color: #e74c3c;
      font-size: 1.2rem;
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
    padding: 25px;
    margin: 20px 0;
    
    h5 {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 1.2rem;
    }
    
    ol {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 10px;
        color: #495057;
        line-height: 1.6;
      }
    }
  }
`;

const RightColumnCard = styled(Card)`
  border: none;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: fit-content;
  
  .card-body {
    padding: 40px;
  }
  
  .bible-verse {
    background: #f0f8ff;
    border: 2px solid #e74c3c;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    
    h6 {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    p {
      font-style: italic;
      color: #555;
      font-size: 1.1rem;
      margin: 0;
    }
    
    .verse-ref {
      color: #666;
      font-size: 0.9rem;
      margin: 10px 0 0 0;
    }
  }
  
  .assurance {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    padding: 20px;
    margin: 20px 0;
    
    h6 {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    p {
      color: #495057;
      margin: 0;
      line-height: 1.6;
    }
  }
  
  .thank-you {
    text-align: center;
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    
    h6 {
      color: #2c3e50;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    p {
      color: #666;
      margin: 0;
    }
  }
`;

const Donate = () => {
  const [copied, setCopied] = useState({});

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
    <>
      <PageHeader>
        <Container>
          <h1>Make a Donation</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Donate</li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <DonateSection>
        <Container>
          <div className="section-title">
            <h2>Your Support Makes a Difference</h2>
            <p>
              Every donation, no matter the size, helps us continue our mission to create positive change in communities around the world.
            </p>
          </div>
          
          <div className="two-column-layout">
            <BankDetailsCard>
              <div className="card-header">
                <h3>💝 Donate to WhiteHeart Charity</h3>
                <p>Support our mission with a simple M-Pesa payment</p>
              </div>
              <div className="card-body">
                <div className="bank-info">
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
                  <h5>📱 How to Donate via M-Pesa:</h5>
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
              </div>
            </BankDetailsCard>
            
            <RightColumnCard>
              <div className="card-body">
                <div className="bible-verse">
                  <h6>📖 Scripture</h6>
                  <p>
                    "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                  </p>
                  <p className="verse-ref">— 2 Corinthians 9:7</p>
                </div>
                
                <div className="assurance">
                  <h6>🛡️ Our Promise to You</h6>
                  <p>
                    <strong>100% of your donations</strong> go directly to our charitable causes. We are committed to transparency and accountability in how we use every shilling you entrust to us. Your contributions fund education programs, healthcare initiatives, food distribution, and community development projects that make a real difference in people's lives.
                  </p>
                </div>
                
                <div className="thank-you">
                  <h6>Thank you for your generosity!</h6>
                  <p>Your donation helps us continue our mission of creating positive change in communities worldwide.</p>
                </div>
              </div>
            </RightColumnCard>
          </div>
        </Container>
      </DonateSection>
    </>
  );
};

export default Donate;