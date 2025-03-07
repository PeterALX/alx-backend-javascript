import * as fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
async function readDatabase(path) {
	if (!existsSync(path)) {
		throw new Error('Cannot read the db')
	}
	const data = (await fs.readFile(path, 'utf8')).split(/\r?\n/).slice(1)
	const fields = {}
	data.forEach((val) => {
		if (val.length !== 0) {
			val = val.split(',')
			const field = val.at(-1)
			if (!fields[field]) fields[field] = []
			fields[field].push(val[0])
		}
	})
	return fields
}

export default readDatabase
