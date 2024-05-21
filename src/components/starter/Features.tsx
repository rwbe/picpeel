import React, { FC } from 'react';
import { TechIcons } from './TechIcons';

const Features: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 p-10">
      <h3 className="text-3xl font-bold text-center">Construído com as mais recentes tecnologias</h3>
      <div className="flex flex-wrap justify-center gap-6">
        <a href="https://nextjs.org/" className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-36">
          {TechIcons.nextjs()}
          <span className="mt-2 font-semibold">Next.js</span>
        </a>
        <a href="https://www.typescriptlang.org/" className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-36">
          {TechIcons.ts()}
          <span className="mt-2 font-semibold">TypeScript</span>
        </a>
        <a href="https://tailwindcss.com/" className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-36">
          {TechIcons.tailwind()}
          <span className="mt-2 font-semibold">Tailwind CSS</span>
        </a>
        <a href="https://ui.shadcn.com/" className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out w-36">
          {TechIcons.shadcnUI()}
          <span className="mt-2 font-semibold">Shadcn UI</span>
        </a>
      </div>
    </section>
  );
};

export default Features;
