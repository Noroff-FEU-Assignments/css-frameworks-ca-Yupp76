import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="container-h">
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <div className="navbar__logo">
              <span>The YAY Company</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0 navbar__menu" navbarScroll>
              <Nav.Link className="navbar__item" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="navbar__item" href="/news">
                News
              </Nav.Link>
              <Nav.Link className="navbar__item" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex navbar__form">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="navbar__formBtn">Go</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default CustomNavbar;
