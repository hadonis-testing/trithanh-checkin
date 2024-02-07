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
const ReviewComponent = lazy(() => import("../components/ui/ReviewComponent"));
const ResultComponent = lazy(() => import("../components/ui/ResultComponent"));

const CheckInScreen = ({ token }: { token: string }) => {
	useEffect(() => {
		document.title = "Check In Screen";
	}, []);

	const [component, setComponent] = useState<string>("telephone");
	const [userInfo, setUserInfo] = useState<UserInfo>({
		id: 0,
		userId: 0,
		fullName: "",
		phoneNumber: "",
		email: "",
		birthday_month: 0,
		birthday_day: 0,
	});
	const [serviceList, setServiceList] = useState("");
	const [serviceIdList, setServiceIdList] = useState(new Set<number>());
	const [rewardPoints, setRewardPoints] = useState(0);

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
							<InfoComponent
								setComponent={setComponent}
								setUserInfo={setUserInfo}
								userInfo={userInfo}
							/>
						)}
						{component == "service" && (
							<ServiceComponent
								setComponent={setComponent}
								setServiceList={setServiceList}
								setServiceIdList={setServiceIdList}
							/>
						)}
						{component == "review" && (
							<ReviewComponent
								setComponent={setComponent}
								setRewardPoints={setRewardPoints}
								userInfo={userInfo}
								serviceList={serviceList}
								serviceIdList={serviceIdList}
								token={token}
							/>
						)}
						{component == "result" && (
							<ResultComponent
								setComponent={setComponent}
								rewardPoints={rewardPoints}
							/>
						)}
					</Suspense>
				</Col>
			</Row>
		</Container>
	);
};

export default CheckInScreen;
