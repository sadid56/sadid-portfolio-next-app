import Container from "@/components/Container/Container";
import { ServicesParallax } from "@/components/ui/ServicesParallax/ServicesParallax";
import servicesArray from "../../../public/services.json"

const Services = () => {
  return (
    <Container id="services" className="relative">
      <ServicesParallax products={servicesArray}/>
    </Container>
  );
};

export default Services;