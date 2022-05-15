#!/usr/bin/env node

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { build } = require('esbuild')

const APP_BASE = 'src'
const ENTRY_FILE = 'index.tsx'
const OUTPUT_DIR = 'dist'
const OUTPUT_FILE = 'index.js'

build({
  entryPoints: [`${APP_BASE}/${ENTRY_FILE}`],
  define: {
    'process.env.COOKIE': JSON.stringify(process.env.COOKIE),
  },
  bundle: true,
  sourcemap: true,
  minify: true,
  outfile: `${OUTPUT_DIR}/${OUTPUT_FILE}`,
})
  .then(() => { 
    console.log('Build succeeded.') })
  .catch((e) => {
    console.error('Error building:', e.message)
    process.exit(1)
  })
