import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <Testimonials />
        <CTABanner />
      </div>
    </>
  );
}

export default AboutPage;
