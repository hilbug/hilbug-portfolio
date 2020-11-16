import { Renderer } from "../Renderer";
import { portDetails } from "../portfolioDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Portfolio = () => {
  return (
    <section id="portfolio" className="album1 py-5 diagonal-box mt-5">
      <Container>
      <h2 className="album-left album-left-port">Portfolio</h2>
        <Row className="content">
          <Renderer config={portDetails} />
        </Row>
      </Container>
    </section>
  )
};

export default Portfolio;