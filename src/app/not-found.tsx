import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-gray-500">
          404
        </h1>
        <p className="text-2xl font-semibold mt-2">
          Ops! Parece que você encontrou um universo desconhecido.
        </p>
        <p className="mt-4 mb-4 text-lg">
          Mas não se preocupe, vamos te levar de volta para casa.
        </p>
        <Link href="/home" passHref>
          <span className="inline-block mt-4 text-lg text-links border border-button rounded px-6 py-2 hover:bg-button_hover hover:text-white transition duration-300 ease-in-out cursor-pointer">
            Voltar para a página inicial
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

