const add = (numbers) => {
	if (!numbers) {
		return 0;
	}
	return numbers
		.split(",")
		.map(Number)
		.reduce((acc, curr) => acc + curr, 0);
};
module.exports = add;
