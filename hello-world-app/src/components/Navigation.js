// src/components/Navigation.js
import React from 'react';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ display: 'inline', margin: '0 10px' }}>Home</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;