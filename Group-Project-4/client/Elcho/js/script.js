// const formObj = {};
// const create = document.getElementById("create");
// create.addEventListener("click", () => {
// 	["cname", "rname", "rtype", "topic", "question", "hmname", "docid"].map(
// 		(key) => {
// 			formObj[key] = document.getElementById(key).value;
// 		}
// 	);
// 	fetch("http://localhost:911/create", {
// 		method: "POST",
// 		body: JSON.stringify(formObj),
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	})
// 		.then((res) => res.text())
// 		.then((data) => {
// 			const formContainer = document.getElementsByTagName("body")[0];
// 			formContainer.innerHTML = data;
// 		});
// });

const formObj = {};
const create = document.getElementById("create");
create.addEventListener("click", async () => {
	["cname", "rname", "rtype", "topic", "question", "hmname", "docid"].map(
		(key) => {
			formObj[key] = document.getElementById(key).value;
		}
	);
	try {
		const response = await fetch("http://localhost:911/create", {
			method: "POST",
			body: JSON.stringify(formObj),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.text();
		const formContainer = document.getElementsByTagName("body")[0];
		formContainer.innerHTML = data;
	} catch (err) {
		console.error(err);
	}
});
