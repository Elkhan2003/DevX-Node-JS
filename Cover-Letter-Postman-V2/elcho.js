const express = require("express");
const fs = require("fs");

const app = express();

app.get("/resume-and-download", (req, res) => {
	const { jobTitle } = req.query;
	const resumeName = `${jobTitle}-Resume.pdf`;

	fs.copyFile("./Frontend-Resume.pdf", `./${resumeName}`, (err) => {
		if (err) throw err;
		console.log(`Resume copied and renamed to ${resumeName}`);
		res.download(`./${resumeName}`, (err) => {
			if (err) throw err;
			console.log(`Resume ${resumeName} downloaded`);
		});
	});
});

const port = 911;
app.listen(port, () => {
	console.log(`Server running on port By Elcho${port}`);
});
