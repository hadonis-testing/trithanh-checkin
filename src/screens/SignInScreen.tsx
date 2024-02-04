import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import "./SignInScreen.css"; // Import the CSS file

const SignInScreen = ({
	setToken,
}: {
	setToken: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		document.title = "Sign Screen";
	}, []);

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

		if (email && password) {
			const params = new URLSearchParams();
			params.append("client_id", "ro.client");
			params.append("client_secret", "secret");
			params.append("username", email);
			params.append("password", password);
			params.append("grant_type", "password");
			params.append("scope", "api.TTS");

			const response = await axios.post(
				"https://checkin.trithanhsoft.com/connect/token",
				params,
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
				}
			);

			if (response.status == 200 && response.data && response.data.access_token) {
				setToken(response.data.access_token);
			}
		}
	};

	return (
		<Container className="sign-screen">
			<Form onSubmit={handleSubmit} className="sign-form">
				<Form.Group
					className="mb-3 form-group-email"
					controlId="formBasicEmail"
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group
					className="mb-3 form-group-password"
					controlId="formBasicPassword"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Button variant="primary" type="submit" className="submit-button">
					Sign In
				</Button>
			</Form>
		</Container>
	);
};

export default SignInScreen;
