import { useState } from "react";
import {
	Container,
	Button,
	InputGroup,
	FormControl,
	Row,
	Col,
} from "react-bootstrap";
import "./TelephoneComponent.css";
import axios from "axios";
import UserInfo from "../data/UserInfo";

const TelephoneComponent = ({
	setComponent,
	setUserInfo,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string>>;
	setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}) => {
	const [input, setInput] = useState("");

	const formatInput = (input: string) => {
		const numbers = removeFormatting(input);
		let format = "";
		for (let i = 0; i < numbers.length; i++) {
			if (i === 0) {
				format += "(";
			} else if (i === 3) {
				format += ") ";
			} else if (i === 6) {
				format += "-";
			}
			format += numbers[i];
		}
		return format;
	};

	const removeFormatting = (input: string) => {
		return input.replace(/\D/g, "");
	};

	const handleClick = async (value: string) => {
		if (value == "Del") {
			if (input.length == 6) {
				setInput(input.slice(0, -3));
			} else if (
				input[input.length - 1] == " " ||
				input[input.length - 1] == ")" ||
				input[input.length - 1] == "(" ||
				input[input.length - 1] == "-"
			) {
				setInput(input.slice(0, -2));
			} else {
				setInput(input.slice(0, -1));
			}
		} else if (value == "Ctrl") {
			setInput("");
		} else {
			setInput(formatInput(input + value));

			const phoneNumber = removeFormatting(input + value);

			if (phoneNumber.length == 10) {
				setInput("");

				const response = await axios.get(
					"https://checkin.trithanhsoft.com/mobile-sign-in/check?phoneNumber=" +
						phoneNumber
				);

				if (response.status == 200 && response.data) {
					let [birthday_month, birthday_day] = [1, 1];

					if (response.data.birthday) {
						[birthday_month, birthday_day] = response.data.birthday
							.split("/")
							.map(Number);
					}

					const userInfo: UserInfo = {
						id: response.data.id,
						phoneNumber: phoneNumber,
						fullName: response.data.fullName,
						userId: response.data.userId,
						email: response.data.email,
						birthday_month: birthday_month,
						birthday_day: birthday_day,
					};

					setUserInfo(userInfo);
					setComponent("info");
				}
			}
		}
	};

	const buttons = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
		["Ctrl", "0", "Del"],
	];

	return (
		<Container className="mt-5">
			<InputGroup className="mb-3">
				<FormControl
					className="text-center number-input"
					placeholder="Telephone Number"
					aria-label="Telephone Number"
					aria-describedby="basic-addon2"
					value={input}
					readOnly
				/>
			</InputGroup>
			<div>
				{buttons.map((row, rowIndex) => (
					<Row key={rowIndex} className="mb-3">
						{row.map((value) => (
							<Col
								key={value}
								className="py-4 mr-4 d-flex justify-content-center align-items-center"
							>
								<Button
									className="number-btn"
									variant="outline-secondary"
									onClick={() => handleClick(value)}
								>
									{value}
								</Button>
							</Col>
						))}
					</Row>
				))}
			</div>
		</Container>
	);
};

export default TelephoneComponent;
