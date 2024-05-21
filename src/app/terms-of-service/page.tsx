import React from 'react';
import Link from 'next/link';
import { Book, Calendar } from 'react-feather';

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-3xl">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-6">
          <Book className="mx-auto mb-2" size={50} /> 
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">Termos de Serviço</h1>
      </div>
      <div className="flex items-center justify-center text-lg mb-4">
        <Calendar className="mr-2" size={20} /> 
        <span className="text-sm sm:text-base">Última atualização: Maio de 2024</span>
      </div>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Introdução</h2>
          <p className="mb-3">
            Bem-vindo à PicPeel. Ao acessar ou usar nossa aplicação de remoção de fundo de imagens, você concorda em estar vinculado a estes Termos de Serviço.
          </p>
          <p>
            Se você não concordar com qualquer parte dos termos, não poderá acessar o serviço.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">2. Uso Permitido</h2>
          <p className="mb-3">
            Você pode usar nossa aplicação apenas para fins legais e de acordo com estes Termos.
          </p>
          <ul className="list-disc list-inside">
            <li>Remoção de fundo para imagens pessoais ou comerciais.</li>
            <li>Integração com outros softwares ou aplicações, se permitido.</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">3. Uso Proibido</h2>
          <p className="mb-3">
            Você concorda em não usar o serviço de maneira que:
          </p>
          <ul className="list-disc list-inside">
            <li>Viole qualquer lei ou regulamento aplicável.</li>
            <li>Seja fraudulento ou relacionado a uma atividade ilegal.</li>
            <li>Infrinja direitos de propriedade intelectual de terceiros.</li>
          </ul>
        </section>
        {/* ... Outras seções ... */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">10. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco pelo e-mail rwbemiliano@gmail.com
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
}

export default TermsOfServicePage;
