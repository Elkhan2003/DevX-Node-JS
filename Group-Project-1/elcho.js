// импортируем модуль fs для работы с файловой системой
const fs = require("fs");

// определяем доступные роли и их необходимые навыки из объекта
const roles = {
	javascript: {
		name: "Javascript Developer",
		skills: ["Javascript", "HTML/CSS"]
	},
	frontend: {
		name: "Front-end Developer",
		skills: ["HTML/CSS", "Javascript"]
	},
	backend: {
		name: "Back-end Developer",
		skills: ["Node.js", "MySQL"]
	},
	fullstack: {
		name: "Full-stack Developer",
		skills: ["HTML/CSS", "Javascript", "Node.js", "MySQL"]
	}
};

// читаем шаблон сопроводительного письма из файла
const template = fs.readFileSync("By-Elcho911.txt", "utf8");

// получаем аргументы командной строки
const args = process.argv.slice(2);

// проверяем, что аргументы являются допустимыми
if (args.length === 2 && roles[args[0].toLowerCase()]) {
	// В хорошем случае выполняется некоторый код для письма
} else {
	console.log("Usage: node cover-letter-generator.js <role> <name>");
	console.log("Available roles: javascript, frontend, backend, fullstack");
	process.exit(1);
}

// генерируем сопроводительное письмо, заменяя заполнители на аргументы
const role = roles[args[0].toLowerCase()];
const name = args[1];
const skills = role.skills.join(", ");

let coverLetter = template
	.replace(/{name}/g, name)
	.replace(/{role}/g, role.name)
	.replace(/{skills}/g, skills);

// записываем сопроводительное письмо в файл
fs.writeFileSync("letter.txt", coverLetter);

// выводим сообщение об успешном завершении скрипта
console.log("Elcho911, cover letter generated successfully!");
