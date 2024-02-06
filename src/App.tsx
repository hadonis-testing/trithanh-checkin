import { Suspense, useState, lazy } from "react";

const SignInScreen = lazy(() => import("./screens/SignInScreen"));
const CheckInScreen = lazy(() => import("./screens/CheckInScreen"));

const App = () => {
	const [token, setToken] = useState("");

	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				{token ? (
					<CheckInScreen token={token} />
				) : (
					<SignInScreen setToken={setToken} />
				)}
			</Suspense>
		</div>
	);
};

export default App;
