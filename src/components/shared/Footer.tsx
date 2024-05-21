import React, { FC } from 'react';
import Logo from './Logo';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs"; 

const Footer: FC = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className='border-t'>
      <div className='layout-container flex flex-col gap-5 items-start justify-between py-10 lg:flex-row'>
        <div className="flex flex-col items-start">
          <Logo />
          <div className="mt-2">
            <p className="text-md mt-2"> FAQs | Política de Privacidade | Termos de Serviço | Tecnologias | Guia</p>
            <p className="text-xs mt-2"> © {currentYear} PicPeel. Direitos reservados. Conteúdo e imagens processados com tecnologia avançada para garantir qualidade e precisão.</p>
          </div>
        </div>
        <div className="flex lg:flex-row gap-4 lg:gap-8 items-start">
          <BsTwitterX className="text-2xl cursor-pointer" /> 
          <FaFacebook className="text-2xl cursor-pointer" />
          <FaInstagram className="text-2xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
