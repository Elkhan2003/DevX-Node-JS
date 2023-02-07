const htmlGrades = [95, 87, 89, 83, 91, 92, 91, 88, 90, 79, 83, 87, 72, 77, 83];
const javascriptGrades = [93, 92, 98, 77, 80, 89, 77, 89, 92, 81, 83, 97, 71, 87, 72];

// Function to calculate basic statistical data for an array of grades
function calculateStatistics(grades) {
	// Calculate the mean by adding up all elements and dividing by the length of the array
	const mean = grades.reduce((acc, current) => acc + current, 0) / grades.length;

	// Find the minimum value in the array
	const minimum = Math.min(...grades);

	// Find the maximum value in the array
	const maximum = Math.max(...grades);

	// Calculate the median based on the length of the array
	let median;
	if (grades.length % 2 !== 0) {
		// If the length is odd, the median is the middle value
		median = grades[Math.floor(grades.length / 2)];
	} else {
		// If the length is even, the median is the average of the two middle values
		median = (grades[grades.length / 2 - 1] + grades[grades.length / 2]) / 2;
	}

	// Return the results as an object with properties mean, minimum, maximum, and median
	return { mean, minimum, maximum, median };
}

// Calculate the statistical data for htmlGrades and store the result in htmlResult
const htmlResult = calculateStatistics(htmlGrades);

// Calculate the statistical data for javascriptGrades and store the result in javascriptResult
const javascriptResult = calculateStatistics(javascriptGrades);

// Log the results to the console
console.log("HTML Result:", htmlResult);
console.log("Javascript Result:", javascriptResult);
