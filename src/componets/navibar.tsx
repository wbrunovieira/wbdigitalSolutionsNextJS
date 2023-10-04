// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white">
    <p>Logo aqui</p>
    <p>Itens do menu aqui</p>
    <p>Informações de contato aqui</p>
  </nav>
  );
};

export default Navbar;
