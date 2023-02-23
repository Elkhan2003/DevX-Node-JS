const express = require("express");
const app = express();

app.get("/cover-letter/:jobTitle/:companyName", (req, res) => {
	const { jobTitle, companyName } = req.params;
	const coverLetter = `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at ${companyName}. ...`;
	res.send(coverLetter);
});

app.get("/cover-letter/:jobTitle/:companyName/:applicantName", (req, res) => {
	const { jobTitle, companyName, applicantName } = req.params;
	const coverLetter = `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at ${companyName}. My name is ${applicantName} and ...`;
	res.send(coverLetter);
});

app.get("/cover-letter/:jobTitle/:companyName/:applicantName", (req, res) => {
	const { jobTitle, companyName, applicantName, experience } = req.query;
	const coverLetter = `Dear Hiring Manager,\n\nI am writing to express my interest in the ${jobTitle} position at ${companyName}. My name is ${applicantName} and I have ${experience} years of experience in the field. ...`;
	res.send(coverLetter);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
