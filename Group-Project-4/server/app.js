const express = require("express");
const app = express();
const port = 911;

const cors = require("cors");
const fs = require("fs").promises;

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res, next) => {
	try {
		const data = {
			"Company name ": req.body.cname,
			"Role name ": req.body.rname,
			"Role type ": req.body.rtype,
			"Topic ": req.body.topic,
			"Question ": req.body.question,
			"Hiring Manager ": req.body.hmname,
			"Document ID* ": req.body.docid,
		};

		const resume = (roleName, roleType, companyName, hmName, question) => {
			return `Dear ${hmName},
My role type is ${roleType} and I want to work in ${companyName}.
As a ${roleName}, I have a question:
"${question}"
Thank you for your time and consideration.

Best regards, ${roleName}!`;
		};

		const fileName = `./messages/${req.body.cname}-message.txt`;

		await fs.writeFile(
			fileName,
			resume(
				req.body.rname,
				req.body.rtype,
				req.body.cname,
				req.body.hmname,
				req.body.question
			)
		);

		console.log(data);
		res.send(`Data send to ${req.body.cname} company, ID: ${req.body.docid}`);
	} catch (error) {
		next(error);
	}
});

// Обработчик ошибок
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke!");
});

app.listen(port, () => {
	console.log(`Server running on port By Elcho${port}`);
});
