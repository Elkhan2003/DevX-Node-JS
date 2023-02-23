const express = require("express");
const app = express();

app.get("/cover-letter/:jobTitle/:companyName", (req, res) => {
	const { jobTitle, companyName } = req.params;
	const coverLetter = `This profession ${jobTitle} is very much in demand in this ${companyName} company, you would go there just right🎉`;
	res.send(coverLetter);
});

app.get("/cover-letter/:jobTitle/:companyName/:applicantName", (req, res) => {
	const { jobTitle, companyName, applicantName } = req.params;
	const coverLetter = `Dear Hiring Manager,\n
	I am a ${jobTitle} with five years of experience developing and maintaining software applications. My expertise lies in developing scalable and efficient software solutions that meet the needs of clients and end-users.\n
	In my current role at XYZ Corporation, I have been responsible for developing software applications that have improved operational efficiency and productivity for our clients. I have also contributed to the development of new features and enhancements for existing applications, collaborating with cross-functional teams to ensure timely delivery and implementation.\n
	I am excited about the prospect of working at ${companyName}, a company that is renowned for its innovation and commitment to developing cutting-edge technologies. As a ${jobTitle}, I am passionate about staying up-to-date with the latest trends and advancements in the industry, and I believe that ${companyName} would provide the ideal environment for me to continue learning and growing as a professional.\n
	I am confident that my skills, experience, and passion for ${jobTitle}ing make me a strong candidate for this position. I would welcome the opportunity to discuss my qualifications further and learn more about the role and responsibilities of a ${jobTitle} at ${companyName}.\n
	Thank you for considering my application. I look forward to hearing from you soon.\n\n
	Sincerely, ${applicantName}!`;
	res.send(coverLetter);
});

app.get(
	"/cover-letter/:jobTitle/:companyName/:applicantName/experience",
	(req, res) => {
		const { jobTitle, companyName, applicantName } = req.params;
		const { experience } = req.query;
		const coverLetter = `Dear Hiring Manager,\n
		I am writing to express my interest in the ${jobTitle} position at ${companyName}. My name is ${applicantName} and I have ${experience} years of experience in the field.
		I believe that working at ${companyName} would be a great opportunity to further develop my skills and contribute to the development of innovative software solutions.
		I have always been impressed with ${companyName}'s commitment to pushing the boundaries of technology and creating products that have a positive impact on people's lives.
		In addition to my technical skills, I am a strong communicator and collaborator. I believe that effective communication and teamwork are essential for developing high-quality software products.
		I am also a quick learner and have a strong work ethic, which I believe will enable me to make a positive contribution to your team.
		Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.\n
		Sincerely, ${applicantName}!`;
		res.send(coverLetter);
	}
);

const port = 911;
app.listen(port, () => {
	console.log(`Server running on port By Elcho${port}`);
});
