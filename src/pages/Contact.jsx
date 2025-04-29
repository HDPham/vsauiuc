import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from 'reactstrap';

function Contact() {
  return (
    <Container id="contact" className="fade-in">
      <Row tag="section" className="justify-content-around align-items-center">
        <Col lg={6} className="mt-4">
          <h1 className="text-center text-lg-left display-4 text-maroon">
            Contact Us
          </h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label htmlFor="contactFirstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="contactFirstName"
                    className="form-control"
                    placeholder="John"
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label htmlFor="contactLastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="contactLastName"
                    className="form-control"
                    placeholder="Doe"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label htmlFor="contactEmail">Email address</Label>
              <Input
                type="email"
                name="email"
                id="contactEmail"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="email@example.com"
                required
              />
              <FormText color="muted">
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="contactMessage">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="contactMessage"
                className="form-control"
                rows="3"
                required
              />
            </FormGroup>
            <Button className="text-white bg-maroon" disabled>
              Submit
            </Button>
            <Row>
              <FormText color="muted">
                Form is disabled. For presentational purposes only.
              </FormText>
            </Row>
          </Form>
        </Col>
        <Col lg={4} className="mt-5">
          <ul id="contactInfo" className="pl-0 font-weight-bold">
            <li>
              Email
              <br />
              <span className="text-maroon">vsauiuc.pr@gmail.com</span>
            </li>
            <br />
            <li>
              Facebook
              <br />
              <a
                href="https://www.facebook.com/vsauiuc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-maroon"
              >
                https://www.facebook.com/vsauiuc/
              </a>
            </li>
            <br />
            <li>
              Address
              <br />
              <span className="text-maroon">
                Illini Union
                <br />
                RSO Complex Cube #35
                <br />
                Champaign, IL 61820
              </span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
