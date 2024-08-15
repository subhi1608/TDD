const add = (numbersStr) => {
	if (!numbersStr) {
		return 0;
	}
	let delimiter = /[\s,]+/; // Default delimiter is comma or whitespace
    let numbers;

    if (numbersStr.startsWith('//')) {
        // Extract custom delimiter
        const delimiterLineEnd = numbersStr.indexOf('\n');
        const delimiterLine = numbersStr.substring(2, delimiterLineEnd);
        delimiter = new RegExp(`[${delimiterLine}]`, 'g');

        // Extract numbers part
        numbers = numbersStr.substring(delimiterLineEnd + 1);
    } else {
        // Default delimiter case
        numbers = numbersStr;
    }
	return numbers
	.split(delimiter) 
	.map(num => parseInt(num.trim(), 10)) 
	.filter(num => !isNaN(num)) 
	.reduce((sum, num) => sum + num, 0);

}
module.exports = add;
