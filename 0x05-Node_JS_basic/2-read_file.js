//import fs from 'node:fs'
const fs = require('node:fs')
function countStudents(path) {
	if (!fs.existsSync(path)) {
		throw 'Cannot load the database'
	}
	const data = fs.readFileSync(path, 'utf8')
	const students = data.split('\n')
	let len = 0;
	for (const student of students) {
		student.length > 0 && len++
	}
	console.log(len)
}
module.exports = countStudents
