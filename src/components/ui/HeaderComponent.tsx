import { useState } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";

const HeaderComponent = () => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
		setIsFullscreen(!isFullscreen);
	};

	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Row className="align-items-center">
					<Col sm={3}>
						<Navbar.Brand>
							<img
								src="./vite.svg"
								height="30"
								className="d-inline-block align-top"
								alt="Logo"
							/>
							Trí Thành Checkin
						</Navbar.Brand>
					</Col>
				</Row>
				<Nav className="ml-auto">
					<Button onClick={toggleFullscreen}>
						{isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
					</Button>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default HeaderComponent;
