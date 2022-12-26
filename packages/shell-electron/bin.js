#!/usr/bin/env node
const electron = require('electron')
const spawn = require('cross-spawn')
const argv = process.argv.slice(2)

const result = spawn.sync(
  electron,
  [require.resolve('./app')].concat(argv),
  { stdio: 'inherit' },
)

process.exit(result.status)
