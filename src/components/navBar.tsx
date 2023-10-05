import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/">
            {/* Aqui você pode colocar o componente Image do Next.js para o logo */}
            Logo
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800"
          >
            {/* Ícone de menu */}
            Menu
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex text-lg space-x-8`}
        >
          <div className="relative group">
            <a href="#" className="text-gray-800">
              Home
            </a>
            <div className="absolute left-0 hidden group-hover:block mt-2 space-y-2 bg-white border border-gray-300">
              <a href="index.html" className="block px-4 py-2">
                Home
              </a>
              <a href="about.html" className="block px-4 py-2">
                Sobre nós
              </a>
            </div>
          </div>

          {/* Outros itens de menu, como Sistemas, Sites, Marketing Digital, etc. */}
          {/* Você pode copiar o div acima e ajustar os links e texto conforme necessário */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

