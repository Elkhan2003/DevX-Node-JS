const avgAnnualTemp = {
	KG: 2.9,
	US: 8.6,
	RU: -5.3,
	CN: 7.5,
	ID: 25.8,
};

const toFahrenheit = {};

for (const [key, value] of Object.entries(avgAnnualTemp)) {
	toFahrenheit[key] = (9 / 5) * value + 32;
}

console.log(toFahrenheit);
