import { Suspense, lazy } from "react";

const SignScreen = lazy(() => import("./screens/SignInScreen"));

const App = () => {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<SignScreen />
			</Suspense>
		</div>
	);
};

export default App;
