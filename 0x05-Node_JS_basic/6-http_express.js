const express = require('express')
const app = express()
const port = 3000

app.get('/', (_, res) => {
	res.send('Hello ALX!')
})
app.listen(port, () => {
	console.log('listening...')
})


