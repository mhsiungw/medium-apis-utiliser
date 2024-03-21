#!/usr/bin/env node
require('dotenv').config()

const yargs = require('yargs')
const fs = require('fs')
const path = require('path')
const { getReqOptions, formatReqURL } = require('./utils')

const { toBeListeds, toBeUnListeds } = JSON.parse(
	fs.readFileSync(path.join(__dirname, './urls.json'), 'utf8')
)

yargs
	.command('list', 'list medium stories', {}, async () => {
		const reqs = toBeListeds.map((url) =>
			fetch(formatReqURL(url), getReqOptions(0))
		)
		await Promise.allSettled(reqs)
	})
	.command('unlist', 'unlist medium stories', {}, async () => {
		const reqs = toBeUnListeds.map((url) =>
			fetch(formatReqURL(url), getReqOptions(1))
		)

		await Promise.allSettled(reqs)
	})
	.parse()
