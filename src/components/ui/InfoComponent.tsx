import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import UserInfo from "../data/UserInfo";

const InfoComponent = ({
	setComponent,
	userInfo,
	setUserInfo,
}: {
	setComponent: React.Dispatch<React.SetStateAction<string>>;
	userInfo: UserInfo | null;
	setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}) => {
	const [name, setName] = useState(userInfo?.fullName || "");
	const [email, setEmail] = useState(userInfo?.email || "");
	const day: number = userInfo?.birthday_day || 1;
	const month: number = userInfo?.birthday_month || 1;

	const months = Array.from({ length: 12 }, (_, i) => i + 1);
	const days = Array.from({ length: 31 }, (_, i) => i + 1);

	return (
		<Container className="mt-5">
			<Form>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Your name *</Form.Label>
					<Form.Control
						type="name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>E-mail</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBirthday">
					<Form.Label>Birthday</Form.Label>
					<Row>
						<Col sm={6}>
							<Form.Select aria-label="MM" defaultValue={month}>
								{months.map((_month) => (
									<option
										key={_month}
										value={_month}
									>
										{_month}
									</option>
								))}
							</Form.Select>
						</Col>
						<Col sm={6}>
							<Form.Select aria-label="DD" defaultValue={day}>
								{days.map((_day) => (
									<option key={_day} value={_day}>
										{_day}
									</option>
								))}
							</Form.Select>
						</Col>
					</Row>
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
						onClick={() => setComponent("telephone")}
					>
						Back
					</Button>
					<Button
						variant="primary"
						className="mx-5 px-5 py-3"
						disabled={!name}
						onClick={() => {
							setUserInfo({
								fullName: name,
								email: email,
								birthday_day: day,
								birthday_month: month,
								id: userInfo?.id || 0,
								userId: userInfo?.userId || 0,
								phoneNumber: userInfo?.phoneNumber || "",
							});
							setComponent("service");
						}}
					>
						Next
					</Button>
				</div>
			</Form>
		</Container>
	);
};

export default InfoComponent;
