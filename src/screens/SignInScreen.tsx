import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./SignInScreen.css"; // Import the CSS file

const SignInScreen = () => {
	useEffect(() => {
		document.title = "Sign Screen";
	}, []);

	return (
		<Container className="sign-screen">
			<Form className="sign-form">
				<Form.Group
					className="mb-3 form-group-email"
					controlId="formBasicEmail"
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group
					className="mb-3 form-group-password"
					controlId="formBasicPassword"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit" className="submit-button">
					Sign In
				</Button>
			</Form>
		</Container>
	);
};

export default SignInScreen;
