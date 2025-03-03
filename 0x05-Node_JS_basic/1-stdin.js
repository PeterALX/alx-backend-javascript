console.log('Welcome to ALX, what is your name?')

process.stdin.setEncoding('utf8')
process.stdin.on('readable', () => {
	const input = process.stdin.read()
	process.stdout.write('Your name is: ' + input)
	process.stdout.write('This important software is now closing')
})

