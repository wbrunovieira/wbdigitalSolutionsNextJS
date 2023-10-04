// components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="index.html">
        <img src="assets/img/logo.png" alt="img" />
      </a>
    </div>
  );
};

export default Logo;
