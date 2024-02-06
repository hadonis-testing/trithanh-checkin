import { Suspense, useEffect, useState, lazy } from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "../components/data/UserInfo";
const HeaderComponent = lazy(() => import("../components/ui/HeaderComponent"));
const CarouselComponent = lazy(
	() => import("../components/ui/CarouselComponent")
);
const TelephoneComponent = lazy(
	() => import("../components/ui/TelephoneComponent")
);
const InfoComponent = lazy(() => import("../components/ui/InfoComponent"));
const ServiceComponent = lazy(
	() => import("../components/ui/ServiceComponent")
);

const CheckInScreen = ({ token }: { token: string | null }) => {
	useEffect(() => {
		document.title = "Check In Screen";
	}, []);

	const [component, setComponent] = useState<string | null>("service");
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
	const [serviceList, setServiceList] = useState("");

	return (
		<Container fluid>
			<Suspense fallback={<div>Loading Header...</div>}>
				<HeaderComponent />
			</Suspense>
			<Row>
				<Col sm={6}>
					<Suspense fallback={<div>Loading Carousel...</div>}>
						<CarouselComponent />
					</Suspense>
				</Col>
				<Col sm={6}>
					<Suspense fallback={<div>Loading Component...</div>}>
						{component == "telephone" && (
							<TelephoneComponent
								setComponent={setComponent}
								setUserInfo={setUserInfo}
							/>
						)}
						{component == "info" && (
							<InfoComponent setComponent={setComponent} setUserInfo={setUserInfo} userInfo={userInfo} />
						)}
						{component == "service" && (
							<ServiceComponent setComponent={setComponent} setServiceList={setServiceList}/>
						)}
						<h6>{token}</h6>
					</Suspense>
				</Col>
			</Row>
		</Container>
	);
};

export default CheckInScreen;
