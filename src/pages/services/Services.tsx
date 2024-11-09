
import Container from "@/components/Container/Container";
import servicesArray from "../../../public/services.json";
import { Timeline } from "@/components/ui/TimeLine/TimeLIne";

const Services = () => {
  return (
    <Container id="services" className=" relative">
      <Timeline data={servicesArray} />
    </Container>
  );
};

export default Services;
