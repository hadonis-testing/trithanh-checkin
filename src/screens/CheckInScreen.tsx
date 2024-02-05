import { Suspense, useEffect, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
const HeaderComponent = lazy(() => import('../components/ui/HeaderComponent'));
const CarouselComponent = lazy(() => import('../components/ui/CarouselComponent'));

const CheckInScreen = ({ token }: { token: string | null }) => {
	useEffect(() => {
		document.title = "Check In Screen";
	}, []);

	return (
		<Container fluid>
			<Suspense fallback={<div>Loading Header...</div>}>
				<HeaderComponent />
			</Suspense>
			<Row>
				<Col sm={7}>
					<Suspense fallback={<div>Loading Carousel...</div>}>
						<CarouselComponent />
					</Suspense>
				</Col>
				<Col sm={5}>
					<h1>{token}</h1>
				</Col>
			</Row>
		</Container>
	);
};

export default CheckInScreen;
