import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ResultComponent = ({
	setComponent,
	rewardPoints,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string>>;
	rewardPoints: number;
}) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			Toastify({
				text: `Thank you for checking in! You have earned ${rewardPoints} reward points!`,
				className: "info",
				duration: 5000,
				style: {
					background: "linear-gradient(to right, #00b09b, #96c93d)",
				},
				gravity: "bottom",
				callback: () => setComponent("telephone"),
			}).showToast();
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Container fluid className="mt-5 text-center">
			<h1>Thank you for checking in!</h1>
			<h2>You have earned {rewardPoints} reward points!</h2>
		</Container>
	);
};

export default ResultComponent;
