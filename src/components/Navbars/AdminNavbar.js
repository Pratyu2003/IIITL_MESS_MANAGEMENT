
import { Link } from "react-router-dom";
// reactstrap components
import {
  Navbar,
  Container,
} from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid style={{fontSize:"20px"}}>
          <Link
            className="h1 mb-0 text-white text-uppercase text-bold d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
