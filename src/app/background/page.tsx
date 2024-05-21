import React from 'react';
import { FaEraser } from 'react-icons/fa'; 
import FileUpload from '@/components/starter/ImageUpload';

export default function Background() {
  return (
    <main className="page-container p-4 md:p-8 lg:p-12"> 
      <section className="text-center my-2">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center">
          <FaEraser className="text-5xl font-bold mr-0 md:mr-2 mb-2 md:mb-0" /> 
          <h1 className="text-3xl md:text-5xl font-bold">Removedor de fundo</h1>
        </div>
        <p className="text-lg md:text-xl">Apague fundos de imagens e substitua-os por fundos diferentes de sua escolha gratuitamente.</p>
      </section>
      <FileUpload />
      {/* Você pode adicionar conteúdo específico da página Sobre aqui */}
      <p className="text-sm md:text-base text-gray-400 text-center mt-2">
       Ao enviar uma imagem, você concorda com nossos <a href="/terms-of-service" className="text-links">Termos de Serviço</a>, <br /> e <a href="/privacy-policy" className="text-links">Política de Privacidade</a>.
      </p>
    </main>
  );
}
