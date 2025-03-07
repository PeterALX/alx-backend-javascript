import readDatabase from "../utils.js"

class StudentsController {
	static getAllStudents(_, res) {
		readDatabase('database.csv').then((fields) => {
			let response = 'This is the list of our students:\n'
			const sortedKeys = Object.keys(fields).sort()
			for (const key of sortedKeys) {
				response += `Number of students in ${key}: ${fields[key].length}. List: ${fields[key]}\n`
			}
			res.status(200).send(response)
		}).catch((err) => {
			res.status(500).send(err.message)
		})
	}
	static getAllStudentsByMajor(req, res) {
		const major = req.params.major
		if (!['CS', 'SWE'].includes(major)) {
			res.status(500).send('Major parameter must be CS or SWE')
			return
		}
		readDatabase('database.csv').then((fields) => {
			const response = `List: ${fields[major]}`
			res.status(200).send(response)
		}).catch((err) => {
			res.status(500).send(err.message)
		})
	}
}
export default StudentsController
