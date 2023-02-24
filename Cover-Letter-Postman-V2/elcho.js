const express = require("express");
const fs = require("fs");

const app = express();

app.get("/resume-and-download", (req, res) => {
	const { jobTitle, fileName } = req.query;
	let resumeName;

	if (jobTitle === "Frontend") {
		resumeName = "Frontend-Resume.pdf";
	} else if (jobTitle === "Backend") {
		resumeName = "Backend-Resume.pdf";
	} else if (jobTitle === "FullStack") {
		resumeName = "FullStack-Resume.pdf";
	} else {
		res.status(400).send("Invalid jobTitle parameter");
		return;
	}

	const finalFileName = fileName ? `${fileName}.pdf` : `${jobTitle}-Resume.pdf`;

	fs.copyFile(`./${resumeName}`, `./${finalFileName}`, (err) => {
		if (err) throw err;
		console.log(`Resume ${resumeName} copied and renamed to ${finalFileName}`);

		res.download(`./${finalFileName}`, (err) => {
			if (err) throw err;
			console.log(`Resume ${finalFileName} downloaded`);
		});
	});
});

const port = 911;
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
