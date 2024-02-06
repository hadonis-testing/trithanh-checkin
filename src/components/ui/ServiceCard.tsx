import { Card } from "react-bootstrap";
import Service from "../data/Service";
import { useEffect, useState } from "react";

const ServiceCard = ({
	service,
	serviceList,
	setServiceList,
}: {
	service: Service;
	serviceList: Set<number>;
	setServiceList: React.Dispatch<React.SetStateAction<Set<number>>>;
}) => {
	const [choose, setChoose] = useState(false);

	const cardStyle = {
		backgroundColor: choose ? "red" : "white",
	};

	useEffect(() => {
		if (choose) {
			serviceList.add(service.id);
		} else {
			serviceList.delete(service.id);
		}
		setServiceList(new Set(serviceList));
	}, [choose]);

	return (
		<Card
			className="col-3 p-1"
			onClick={() => setChoose(!choose)}
			style={cardStyle}
		>
			<Card.Body>
				<Card.Img
					variant="top"
					src={"https://checkin.trithanhsoft.com" + service.thumbnailUrl}
				/>
				<Card.Title>{service.name}</Card.Title>
			</Card.Body>
		</Card>
	);
};

export default ServiceCard;
