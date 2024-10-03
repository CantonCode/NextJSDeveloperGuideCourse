import scaleImg from '/public/scale.jpg'
import Hero from '@/components/hero';

export default function ScalePage() {
    return (
      <Hero imgData={scaleImg}
      imgAlt='factory'
      title='Scale to Infinity'/>
    );
  }
  