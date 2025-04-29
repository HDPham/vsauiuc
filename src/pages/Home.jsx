import { Link } from 'react-router';
import { ButtonGroup, Button } from 'reactstrap';

function Home() {
  return (
    <div className="home d-flex align-items-center fade-in">
      <div className="banner d-flex flex-column align-items-center text-center text-white py-5 vw-100">
        <h1 className="banner__title display-3">
          Vietnamese Student Association
        </h1>
        <p className="h3">University of Illinois Urbana-Champaign</p>
        <ButtonGroup className="flex-wrap justify-content-center">
          <Link to="/about" className="mx-4 mt-4">
            <Button
              color="danger"
              className="px-5 py-2 font-weight-bold bg-maroon"
              title="Learn More"
            >
              Learn More
            </Button>
          </Link>
          <a
            href="https://www.facebook.com/vsauiuc"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mt-4"
          >
            <Button
              color="danger"
              className="px-5 py-2 font-weight-bold bg-maroon"
              title="VSA UIUC Facebook"
            >
              Visit Our Facebook
            </Button>
          </a>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Home;
