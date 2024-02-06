import { Container, Row, Button } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import Service from "../data/Service";
import { useEffect, useState } from "react";
import axios from "axios";

const ServiceComponent = ({
	setComponent,
	setServiceList,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string | null>>;
	setServiceList: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [cards, setCards] = useState<Service[]>([]);

	// const cards: Service[] = [
	// 	{
	// 		name: "Service 1",
	// 		shortDescription: "This is the first service",
	// 		price: 100,
	// 		id: 1,
	// 		thumbnailUrl: "/user-content/no-image.png",
	// 	},
	// 	{
	// 		name: "Service 1",
	// 		shortDescription: "This is the first service",
	// 		price: 100,
	// 		id: 2,
	// 		thumbnailUrl: "/user-content/no-image.png",
	// 	},
	// 	{
	// 		name: "Service 1",
	// 		shortDescription: "This is the first service",
	// 		price: 100,
	// 		id: 3,
	// 		thumbnailUrl: "/user-content/no-image.png",
	// 	},
	// 	{
	// 		name: "Service 1",
	// 		shortDescription: "This is the first service",
	// 		price: 100,
	// 		id: 4,
	// 		thumbnailUrl: "/user-content/no-image.png",
	// 	},
	// ];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://checkin.trithanhsoft.com/mobile-sign-in/services?vendorId=2"
				);
				setCards(response.data);
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		};

		fetchData();
	}, []);

	const [serviceList, _setServiceList] = useState(new Set<number>());

	return (
		<Container className="mt-5">
			<Row>
				{cards.map((card) => (
					<ServiceCard
						key={card.id}
						service={card}
						serviceList={serviceList}
						setServiceList={_setServiceList}
					/>
				))}
			</Row>

			<br />

			<div className="d-flex justify-content-center">
				<Button
					variant="secondary"
					className="mx-5 px-5 py-3"
					onClick={() => setComponent("telephone")}
				>
					Cancel
				</Button>
				<Button
					variant="secondary"
					className="mx-5 px-5 py-3"
					onClick={() => setComponent("info")}
				>
					Back
				</Button>
				<Button
					variant="primary"
					className="mx-5 px-5 py-3"
					onClick={() => {
						let serviceListStr: string = "";

						cards.map((card) => {
							if (serviceList.has(card.id)) {
								serviceListStr += card.name + ", ";
							}
						});

						setServiceList(serviceListStr.trim().slice(0, -1));
					}}
				>
					Next
				</Button>
			</div>
		</Container>
	);
};

export default ServiceComponent;
