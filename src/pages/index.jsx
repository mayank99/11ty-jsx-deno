import { page, useEleventy } from "../EleventyContext.jsx";

export default page(function () {
	console.log(this);
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width" />
				<title>Document</title>
			</head>
			<body>
				<h1>Hello!</h1>
				<Test />
			</body>
		</html>
	);
});

const Test = () => {
	const eleventy = useEleventy();
	console.log(eleventy);

	return null;
};
