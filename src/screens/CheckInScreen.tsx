import { useEffect } from "react";
import Header from "../components/ui/Header";

const CheckInScreen = ({ token }: { token: string | null }) => {
	useEffect(() => {
		document.title = "Check In Screen";
	}, []);

	return (
		<div>
			<Header />
			<h1>{token}</h1>
		</div>
	);
};

export default CheckInScreen;
