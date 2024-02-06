import { Button, Container, Form } from "react-bootstrap";
import UserInfo from "../data/UserInfo";

const ReviewComponent = ({
	setComponent,
	userInfo,
	serviceList,
	token,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string>>;
	userInfo: UserInfo;
	serviceList: string;
	token: string;
}) => {
	const formatPhoneNumber = (phoneNumber: string) => {
		const cleaned = ("" + phoneNumber).replace(/\D/g, "");
		const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
		if (match) {
			return "(" + match[1] + ") " + match[2] + "-" + match[3];
		}
	};

	const formatBirthday = (month: number, day: number) => {
		return `${month.toString().padStart(2, "0")}/${day
			.toString()
			.padStart(2, "0")}`;
	};

	return (
		<Container fluid className="mt-5">
			<Form>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Your name</Form.Label>
					<Form.Control type="name" value={userInfo.fullName} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="phone"
						value={formatPhoneNumber(userInfo.phoneNumber)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Birthday</Form.Label>
					<Form.Control
						type="birthday"
						value={formatBirthday(
							userInfo.birthday_month,
							userInfo.birthday_day
						)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" value={userInfo.email} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Service</Form.Label>
					<Form.Control type="service" value={serviceList} />
				</Form.Group>

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
						onClick={() => setComponent("service")}
					>
						Back
					</Button>
					<Button variant="primary" className="mx-5 px-5 py-3">
						Next {token}
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default ReviewComponent;
