const fs = require("fs");

function generateResume(templateName, jobName) {
	const templatePath = `./${templateName}`;
	const resumePath = `./${jobName}-Resume.pdf`;
	fs.copyFile(templatePath, resumePath, (err) => {
		if (err) throw err;
		console.log(`Generated resume for ${jobName}`);
	});
}

function downloadResume(jobName, res) {
	const resumePath = `./${jobName}-Resume.pdf`;
	res.download(resumePath, (err) => {
		if (err) throw err;
		console.log(`Sent resume for ${jobName}`);
	});
}

const express = require("express");
const app = express();

app.get("/resume", (req, res) => {
	const jobName = req.query.job;
	generateResume("Backend-Resume.pdf", jobName);
	downloadResume(jobName, res);
});

const port = 911;
app.listen(port, () => {
	console.log(`Server running on port By Elcho${port}`);
});
