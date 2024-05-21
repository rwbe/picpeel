"use client";
import React, { FC, useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from 'next-themes';

const faqData = [
  {
    question: "Como funciona o removedor de fundo?",
    answer: "O removedor de fundo utiliza inteligência artificial para identificar e remover o fundo das suas imagens automaticamente."
  },
  {
    question: "Quais formatos de imagem são suportados?",
    answer: "Os formatos de imagem suportados são JPG, PNG e GIF."
  },
  {
    question: "Existe um limite de tamanho para as imagens?",
    answer: "Sim, o tamanho máximo para as imagens é de 10MB."
  },
  {
    question: "Minhas imagens são armazenadas?",
    answer: "Não, suas imagens são processadas e descartadas automaticamente após 30 minutos."
  },
  {
    question: "Posso usar o serviço gratuitamente?",
    answer: "Sim, o serviço de remoção de fundo é completamente gratuito."
  },
  {
    question: "Por que recebo um erro ao tentar remover o fundo de uma imagem?",
    answer: "Isso pode acontecer se você atingir o limite de uso gratuito da API remove.bg. A API permite até 50 remoções de fundo gratuitas por mês. Uma vez que esse limite é atingido, você precisará esperar até o próximo mês para mais remoções gratuitas ou adquirir créditos adicionais para continuar usando o serviço imediatamente."
  }
];

const FAQ: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="FAQ-section py-8 lg:py-12">
    <div className="container mx-auto px-4">
      <Typography variant="h2" component="h2" className={`text-4xl font-bold text-center my-10 ${theme === 'dark' ? 'dark:text-white' : 'text-gray-900'}`}>
        Perguntas Frequentes
      </Typography>
      <Typography variant="body1" className={`text-lg lg:text-xl text-center mb-8 ${theme === 'dark' ? 'dark:text-gray-300' : 'text-gray-600'}`}>
        Respostas para algumas das perguntas mais comuns sobre nosso serviço.
      </Typography>
      <div className="mt-4 lg:mt-6">
        {faqData.map((faq, index) => (
          <Accordion key={index} className="mb-4 bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-300">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={theme === 'dark' ? 'dark:text-white' : 'text-gray-900'} />}
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              className="py-3 px-4 lg:py-4 lg:px-6 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white"
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className="px-4 lg:px-6 py-2 lg:py-4 bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <Typography>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  </section>
);
};

export default FAQ;

