import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navitems from "./Navitems";
import "./Navbar.css";

function Topbar() {
  return (
	<Navbar bg="dark" expand="lg" variant="dark" fixed="top">
		<Container fluid>
			<Navbar.Brand href="/">Saisantoshkumar Tuniki</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="ms-auto">
				{navitems.map((item) => {
				return (
					<Nav.Link key={item.id} className={item.cName} href={item.path}>
					{item.title}
					</Nav.Link>
				);
				})}
			</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
  );
}

export default Topbar;
