#!/usr/bin/env node

const { execSync } = require('child_process')

if (process.argv.length !== 4) {
  console.error('Usage: slicewav audiofile num_parts')
  return
}

const [_node, _script, audiofile, strNumParts] = process.argv
const numParts = Number(strNumParts)

const duration = Number(execSync(
  `ffprobe -i "${audiofile}" -show_entries format=duration -v quiet -of csv="p=0"`
))

const segmentTime = duration / numParts

const log = execSync(
  `ffmpeg -i "${audiofile}" -c copy -segment_time ${segmentTime} -f segment slice%03d.wav`
  )
  .toString()

console.log(log)
