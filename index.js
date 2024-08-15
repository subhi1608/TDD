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
	
    // Process numbers
    const numberArray = numbers
        .split(delimiter) // Split using the determined delimiter
        .map(num => parseInt(num.trim(), 10)); // Convert each item to integer

    // Check for negative numbers
    const negativeNumbers = numberArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(', ')}`);
    }

    return numberArray
        .filter(num => !isNaN(num)) // Filter out NaN values in case of invalid input
        .reduce((sum, num) => sum + num, 0);

}
module.exports = add;
