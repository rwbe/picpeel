// pages/politica-de-privacidade.tsx
import React from 'react';
import Link from 'next/link';
import { Shield, Calendar } from 'react-feather';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
    <div className="text-center mb-6">
      <Shield className="mx-auto mb-2" size={50} /> 
      <h1 className="text-3xl sm:text-4xl font-bold">Política de Privacidade</h1>
    </div>
    <div className="flex items-center justify-center text-lg mb-4">
      <Calendar className="mr-2" size={20} />
      <span className="text-sm sm:text-base">Última atualização: Maio de 2024</span>
    </div>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Introdução</h2>
        <p className="mb-3">
          A sua privacidade é importante para nós. É política do [Nome da Aplicação] respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no aplicativo [Nome da Aplicação].
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Informações Pessoais</h2>
        <p className="mb-3">
          Coletamos informações pessoais apenas quando temos o seu consentimento. Coletamos apenas as informações necessárias para fornecer o nosso serviço a você.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Uso da Informação</h2>
        <p className="mb-3">
          Utilizamos suas informações para fornecer, operar e melhorar nossos serviços. Incluindo:
        </p>
        <ul className="list-disc list-inside">
          <li>Entender e analisar como você usa o nosso aplicativo.</li>
          <li>Desenvolver novos produtos, serviços, funcionalidades e funcionalidades.</li>
          <li>Comunicar com você, diretamente ou através de um dos nossos parceiros.</li>
        </ul>
      </section>
      {/* ... Outras seções ... */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">9. Compromisso do Usuário</h2>
        <p className="mb-3">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o [Nome da Aplicação] oferece e com caráter enunciativo, mas não limitativo:
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">10. Contato</h2>
        <p>
          Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail [E-mail de Contato].
        </p>
      </section>
      <div className="text-center mt-8">
        <Link href="/home">
          <button className="bg-button hover:bg-button_hover text-white font-bold py-2 px-4 rounded">
            Voltar para a página inicial
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
