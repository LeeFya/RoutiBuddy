export const useGenerateColor = () => {
	const generatedNumber = Math.floor(Math.random() * (3 + 1 - 1) + 1);

	return generatedNumber === 1 ? 'blue' : generatedNumber === 2 ? 'red' : 'yellow';
};
