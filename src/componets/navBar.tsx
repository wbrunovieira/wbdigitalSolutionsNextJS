// components/Navbar.tsx
import React from 'react';
import Logo from './logo';
import MenuItems from './menuItens';
import ContactInfo from './contactInfo';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <Logo />
      <MenuItems />
      <ContactInfo />
    </nav>
  );
};

export default Navbar;
