import Container from "@/components/global/Container";
import { Timeline } from "@/components/sections/TimeLine/TimeLIne";
import services from "@/data/services";

const Services = () => {
  return (
    <Container id='services' className=' relative'>
      <Timeline data={services} />
    </Container>
  );
};

export default Services;
