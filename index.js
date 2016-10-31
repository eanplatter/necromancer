#!/usr/bin/env node
import shell from 'shelljs'

const templateName = process.argv[2]
const word = process.argv[3]
const newFile = process.argv[4]
console.log('template name', templateName)
console.log('the word', word)
console.log('the newFile', newFile)
console.log(process.env.PWD)

shell.cp(`~/.spells/${templateName}`, `${process.env.PWD}/${newFile}`)


