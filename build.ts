#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const envFilePlugin = require('esbuild-envfile-plugin')
const esbuild = require('esbuild')

const APP_BASE = 'src'
const ENTRY_FILE = 'index.tsx'
const OUTPUT_DIR = 'dist'
const OUTPUT_FILE = 'index.js'

function build(entryFile, outFile) {
  esbuild.build({
    entryPoints: [entryFile],
    plugins: [envFilePlugin],
    bundle: true,
    sourcemap: true,
    minify: true,
    outdir: 'dist',
  })
    .then(r => { 
      console.log("Build succeeded.") })
    .catch((e) => {
      console.log("Error building:", e.message)
      process.exit(1)
    })
}

build(`${APP_BASE}/${ENTRY_FILE}`, `${OUTPUT_DIR}/${OUTPUT_FILE}`)