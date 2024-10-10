import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeDisplay = () => {
  const deployedURL = " https://yenganollarajesh.github.io/Assignment-Indroyd/";
  return (
    <div>
      <QRCodeCanvas value={deployedURL} />
      <p>Scan the QR code to join the game on your mobile device.</p>
    </div>
  );
};

export default QRCodeDisplay;


