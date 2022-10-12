
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}

                  IIITL
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="https://www.iiitl.ac.in"
                    target="_blank"
                  >
                    IIIT Lucknow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://iiitl.ac.in/index.php/admission/"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                {/* <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=adr-auth-footer"
                    target="_blank"
                  >
                    Blog
                  </NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink
                    href="#"
                    target="_blank"
                  >
                    MIT License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
