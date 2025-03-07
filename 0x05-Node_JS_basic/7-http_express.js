const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
	res.send('Hello ALX!')
})
app.get('/students', async (_, res) => {
	const response = await countStudents('database.csv')
	res.send(response)
})

app.listen(port, () => {
	console.log('listening on port ' + port)
})

//count students
const fs = require('node:fs/promises')
const existsSync = require('node:fs').existsSync
async function countStudents(path) {
	if (!existsSync(path)) {
		return ('Cannot load the database')
	}
	const data = await fs.readFile(path, 'utf8')
	const students = data.split(/\r?\n/)
	let len = 0;
	let fields = {}
	for (let i = 1; i < students.length; i++) {
		const student = students[i]
		if (student.length > 0) {
			len++
			let field = student.split(',')[3]
			let name = `${student.split(',')[0]}`
			if (!fields[field]) {
				fields[field] = {}
				fields[field].studentNo = 1
				fields[field].studentList = [name]
			} else {
				fields[field].studentNo += 1
				fields[field].studentList.push(name)
			}
		}
	}
	let message = `Number of students: ${len.toString()}\n`
	for (const [k, v] of Object.entries(fields)) {
		message += `Number of students in ${k}: ${v.studentNo}. List: ${v.studentList.join(', ')}\n`
	}
	return message
}
