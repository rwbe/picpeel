import React, { FC } from 'react';
import { TechIcons } from './TechIcons';

const Features: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="h3">Built with latest technologies</h3>
      <div className="flex items-center gap-10 sm:grid sm:grid-cols-2">
        <a href="https://nextjs.org/">{TechIcons.nextjs()}</a>
        <a href="https://www.typescriptlang.org/">{TechIcons.ts()}</a>
        <a href="https://tailwindcss.com/">{TechIcons.tailwind()}</a>
        <a href="https://ui.shadcn.com/">{TechIcons.shadcnUI()}</a>
        <a href="https://vercel.com/">{TechIcons.vercel()}</a>
      </div>
    </section>
  );
};

export default Features;
