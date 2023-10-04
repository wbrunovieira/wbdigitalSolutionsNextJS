import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="index.html">
        <Image 
          src="/assets/img/logo.png" // Certifique-se de fornecer o caminho correto para a imagem
          alt="Logo da Empresa"
          width={150} // Defina a largura
          height={50} // Defina a altura
        />
      </a>
    </div>
  );
};

export default Logo;
