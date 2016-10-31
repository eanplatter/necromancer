#!/usr/bin/env node
import shell from 'shelljs'
import argumentValidator from './argument-validator'

const command = process.argv[2]
const arg1 = process.argv[3]
const arg2 = process.argv[4]

if (argumentValidator(command, 'help')) {
  console.log('YOU NEED HELP like this', command)
}


// shell.cp(`~/.spells/${templateName}`, `${process.env.PWD}/${newFile}`)
