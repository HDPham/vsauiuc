import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel';

function Vcn() {
  return (
    <>
      <main className="flex-grow-1 fade-in">
        <Carousel />
        <Container className="mt-4 text-center">
          <Row className="justify-content-center">
            <Col xs={10} lg={8} xl={6}>
              <h1 className="display-4 text-maroon">
                Vietnamese Culture Night
              </h1>
              <p className="lead">
                <b>Vietnamese Culture Night (VCN)</b> is our annual cultural
                event showcasing traditional/modern dances and performances.
                Previously known as Family Day, VCN highlights the talents of
                VSA UIUC members, family, and friends by celebrating the culture
                that brings us all together. The show is free and open to all,
                and includes a Vietnamese-themed dinner after the show.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className="py-3 w-100 text-center text-secondary fade-in">
        Organized by the Vietnamese Student Association at the University of
        Illinois Urbana-Champaign. <br />
        For any questions, contact us at{' '}
        <a href="mailto:vsauiuc.familyday@gmail.com" className="text-maroon">
          vsauiuc.familyday@gmail.com
        </a>
      </footer>
    </>
  );
}

export default Vcn;
