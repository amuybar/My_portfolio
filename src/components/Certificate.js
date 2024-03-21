import React from 'react';
import '../styles/Certificate.css'
function Certificates({ certificates, onClose }) {
  return (
    <div className="certificates-container">
      <div className="overlay" onClick={onClose}></div>
      <div className="certificates">
        {certificates.map((certificate, index) => (
          <div className="certificate" key={index}>
            <img src={certificate.url} alt={certificate.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
