#!/usr/bin/env node
/**
 * Fetches openapi.yaml before build.
 * Tries: 1) OPENAPI_SOURCE env (path or URL), 2) relative paths to socket-server, 3) api.vio.live
 */
const { readFileSync, writeFileSync, existsSync } = require('fs')
const { join } = require('path')

const root = join(__dirname, '..')
const dest = join(root, 'public', 'openapi.yaml')

const sources = [
  process.env.OPENAPI_SOURCE,
  join(root, '../socket-server/openapi.yaml'),
  join(root, '../Documents/GitHub/socket-server/openapi.yaml'),
  join(root, '../../socket-server/openapi.yaml'),
]

async function fetchFromUrl(url) {
  try {
    const res = await fetch(url)
    if (res.ok) return await res.text()
  } catch (_) {}
  return null
}

async function main() {
  // Try file paths first
  for (const src of sources) {
    if (!src || src.startsWith('http')) continue
    if (existsSync(src)) {
      const content = readFileSync(src, 'utf8')
      if (content.includes('openapi:')) {
        writeFileSync(dest, content)
        console.log('[fetch-openapi] Copied from', src)
        return
      }
    }
  }

  // Try URL from env or default
  const url = process.env.OPENAPI_SOURCE?.startsWith('http')
    ? process.env.OPENAPI_SOURCE
    : 'https://api.vio.live/openapi.yaml'
  const content = await fetchFromUrl(url)
  if (content && content.includes('openapi:')) {
    writeFileSync(dest, content)
    console.log('[fetch-openapi] Fetched from', url)
    return
  }

  if (existsSync(dest)) {
    console.log('[fetch-openapi] Using existing public/openapi.yaml')
  } else {
    console.warn('[fetch-openapi] No source found. Set OPENAPI_SOURCE to a path or URL.')
  }
}

main().catch((e) => {
  console.error('[fetch-openapi]', e.message)
  process.exit(1)
})
