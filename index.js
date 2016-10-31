#!/usr/bin/env node
import shell from 'shelljs'

const command = process.argv[2]
const arg1 = process.argv[3]
const arg2 = process.argv[4]

function deepCompare(src, target) {
  const tArray = target.split('')
  if (src.length !== target.length) {
    return false
  }
  const filtered = tArray.filter((l, i) => {
    if (src[i] === l) {
      return l
    } else if (src[i] === l.toUpperCase()) {
      return l
    } 
  }) 
  if (filtered.length === src.length) {
    return true
  }
}

if (deepCompare(command, 'help')) {
  console.log('YOU NEED HELP like this', command)
}


// shell.cp(`~/.spells/${templateName}`, `${process.env.PWD}/${newFile}`)
