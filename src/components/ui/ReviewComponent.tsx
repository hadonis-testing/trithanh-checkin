import { Button, Container, Form } from "react-bootstrap";
import UserInfo from "../data/UserInfo";
import axios from "axios";

const ReviewComponent = ({
	setComponent,
	setRewardPoints,
	userInfo,
	serviceList,
	serviceIdList,
	token,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string>>;
	setRewardPoints: React.Dispatch<React.SetStateAction<number>>;
	userInfo: UserInfo;
	serviceList: string;
	serviceIdList: Set<number>;
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

	const handleClickNext = async () => {
		const data = {
			phoneNumber: userInfo.phoneNumber,
			fullName: userInfo.fullName,
			email: userInfo.email,
			serviceIds: [...serviceIdList],
			vendorId: "2",
			shophouseId: "7",
		};

		const response = await axios.post(
			"https://checkin.trithanhsoft.com/mobile-sign-in",
			{
				...data,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		setRewardPoints(Number(response.data.rewardPoints));
		setComponent("result");
	};

	return (
		<Container fluid className="mt-5">
			<Form>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Your name</Form.Label>
					<Form.Control type="name" defaultValue={userInfo.fullName} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="phone"
						defaultValue={formatPhoneNumber(userInfo.phoneNumber)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Birthday</Form.Label>
					<Form.Control
						type="birthday"
						defaultValue={formatBirthday(
							userInfo.birthday_month,
							userInfo.birthday_day
						)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>E-mail</Form.Label>
					<Form.Control type="email" defaultValue={userInfo.email} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Service</Form.Label>
					<Form.Control type="service" defaultValue={serviceList} />
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
					<Button
						variant="primary"
						className="mx-5 px-5 py-3"
						onClick={handleClickNext}
					>
						Finish
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default ReviewComponent;
