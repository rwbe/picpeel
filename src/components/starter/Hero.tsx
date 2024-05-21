import siteMetadata from '@/data/siteMetadata'
import { ImageIcon } from 'lucide-react'
import React, { FC } from 'react'
import { Button } from '@/components/ui/button'

const Hero: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center gap-5 py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="absolute -left-8 top-1/3 transform -translate-y-1/2 -rotate-45 sm:-left-10 sm:top-1/2 sm:-rotate-12 lg:-left-10 lg:top-1/2 lg:-rotate-12">
        <img src="/images/left.png" alt="Left GIF" className="w-16 h-16 sm:w-24 sm:h-24 lg:w-64 lg:h-64" />
      </div>
      <div className="absolute -right-8 top-1/3 transform -translate-y-1/2 rotate-45 sm:-right-10 sm:top-1/2 sm:rotate-12 lg:right-0 lg:top-1/2 lg:rotate-12">
        <img src="/images/right.png" alt="Right GIF" className="w-16 h-16 sm:w-24 sm:h-24 lg:w-48 lg:h-48" />
      </div>
      <a
        href="https://github.com/rwbe"
        target="_blank"
        className="flex items-center border rounded-full px-4 sm:px-8 py-2 gap-x-2 bg-opacity-50 hover:bg-opacity-70 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        <ImageIcon className="w-5 h-5 text-primary animate-pulse" />
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          Desenvolvido por <span className="font-bold ">{siteMetadata.author}</span>
        </p>
      </a>
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent py-1 bg-gradient-to-b from-foreground to-muted-foreground bg-opacity-50">
          Remova o <span className="bg-transparent-pattern">fundo</span>
          <br />
          das suas imagens
          <br /> com facilidade
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Nossa ferramenta avançada de remoção de fundo de imagens oferece resultados precisos e rápidos. <br /> Experimente agora e veja a diferença!
        </p>
        <div className="flex justify-center">
          <Button size="lg" asChild className="w-fit text-white relative overflow-hidden group">
            <a href="/background" className="block px-6 py-3 bg-primary rounded-full transition duration-300 ease-in-out group-hover:bg-secondary">
              Remover Fundo Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
