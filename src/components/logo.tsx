import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <a href="index.html">
        <Image 
          src="/assets/img/logo.png" // Certifique-se de fornecer o caminho correto para a imagem
          alt="Logo da Empresa"
          height={50} 
          width={150} 
        />
      </a>
    </div>
  );
};

export default Logo;
