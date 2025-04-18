import Container from "@/components/global/Container";
import servicesArray from "../../../../public/services.json";
import { Timeline } from "@/components/sections/TimeLine/TimeLIne";

const Services = () => {
  return (
    <Container id="services" className=" relative">
      <Timeline data={servicesArray} />
    </Container>
  );
};

export default Services;
