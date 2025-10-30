import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';

function ServicesPage() {
  return (
    <>
      <div className="pt-20">
        <Services />
        <WhyChooseUs />
        <CTABanner />
      </div>
    </>
  );
}

export default ServicesPage;
