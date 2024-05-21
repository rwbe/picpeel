import React from 'react';
import { Button } from '@/components/ui/button'; // Ajuste o caminho de importação conforme necessário

interface ItemProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText?: string;
}

const Item: React.FC<ItemProps> = ({ imageUrl, title, subtitle, buttonText }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10 mx-auto space-y-4 max-w-xs">
      <img src={imageUrl} alt={title} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-md mb-4">{subtitle}</p>
      </div>
    </div>
  );
};

const ItemList: React.FC = () => {
  const items: ItemProps[] = [
    {
      imageUrl: '/images/Step1.gif',
      title: 'Passo 1: Selecione sua Imagem',
      subtitle: 'Comece carregando a imagem que você deseja editar.'
    },
    {
      imageUrl: '/images/Step2.gif',
      title: 'Passo 2: Remova o Fundo',
      subtitle: 'Utilize nossa ferramenta para remover automaticamente o fundo da imagem.',
    },
    {
      imageUrl: '/images/Step3.gif',
      title: 'Passo 3: Baixe sua Imagem',
      subtitle: 'Após a edição, baixe sua imagem com o novo fundo ou transparente.',
    },
  ];

  return (
    <section id='steps' className="px-4 sm:px-8 lg:px-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-4 sm:my-8 text-gray-900 dark:text-white">
        Remoção de fundo: Guia passo a passo
      </h1>
      <p className="text-lg sm:text-xl text-center mb-6 sm:mb-10 text-gray-600 dark:text-gray-300">
        Descubra como remover fundos de imagens de maneira eficaz e sem esforço.
      </p>
      <div className="flex justify-center items-start gap-4 sm:gap-8 md:gap-10 flex-wrap">
        {items.map((item, index) => (
          <div key={index} style={{ transform: `translateY(${index * 10}px)` }}>
            <Item {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
