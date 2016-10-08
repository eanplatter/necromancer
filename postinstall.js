#!/usr/bin/env node
const shell = require('shelljs')
const fs = require('fs')

fs.access('/Users/eanplatter/.spells', fs.F_OK, function(err) {
	if (err) {
		console.log('You are without spells, I will lend you an empty spellbook.')
		console.log('')
		console.log('You will want to save your template files in your spellbook by copying them there.')
		console.log('')
		console.log('Example: cp myTemplate.html ~/.spells/myTemplate.html')
		shell.mkdir('~/.spells')
	} else {
		console.log('Ah yes, you seem to already have a spellbook')
		console.log('')
		console.log('You will want to save your template files in your spellbook by copying them there.')
		console.log('')
		console.log('Example: cp myTemplate.html ~/.spells/myTemplate.html')
	}
})
