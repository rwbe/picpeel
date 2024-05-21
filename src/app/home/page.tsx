import BeforeAfterSlider from '@/components/starter/BeforeAfterSlider';
import FAQ from '@/components/starter/FAQ';
import Features from '@/components/starter/Features';
import Banner from '@/components/starter/Hero';
import Steps from '@/components/starter/Steps';

export default function Home() {
  // Caminhos das imagens
  const beforeImagePath = '/images/antes.png';
  const afterImagePath = '/images/depois.png';

  return (
    <main className="page-container">
      <Banner />
      <Features />
      <BeforeAfterSlider beforeImage={beforeImagePath} afterImage={afterImagePath} />
      <Steps />
      <FAQ />
    </main>
  );
}
