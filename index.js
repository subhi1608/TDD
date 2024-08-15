const add = (numbers) => {
	if (!numbers) {
		return 0;
	}
	return numbers
		.split(/[\s,]+/)
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num)) 
        .reduce((sum, num) => sum + num, 0);
};
module.exports = add;
