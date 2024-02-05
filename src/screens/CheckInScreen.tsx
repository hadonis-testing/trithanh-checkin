import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComponent from "../components/ui/HeaderComponent";
import CarouselComponent from "../components/ui/CarouselComponent";

const CheckInScreen = ({ token }: { token: string | null }) => {
	useEffect(() => {
		document.title = "Check In Screen";
	}, []);

	return (
		<Container fluid>
			<HeaderComponent />
			<Row>
				<Col sm={7}>
					<CarouselComponent />
				</Col>
				<Col sm={5}>
					<h1>{token}</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default CheckInScreen;
