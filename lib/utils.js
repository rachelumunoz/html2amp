const axios = require('axios')
const fs = require('fs')
const path = require('path')

const normalizeUrl = (url) => {
  if (url.startsWith('http')) {
    return url
  } else if (url.startsWith('//')) {
    return `https:${url}`
  } else {
    // relative file path or data uri
    return url
  }
}

const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getRemoteFile (url, options = {}) {
  let response = null
  let data = null
  try {
    console.log(`fetching ${url}`)
    response = await axios.get(url, options)
    return response.data
    // const file = .then(response => response.data)
    // return file
  } catch (e) {
    await timeout(5000)
    console.log(`refetching ${url}`)
    response = await axios.get(url, options)
    return response.data
  }
}

const getRelativeFile = (url, cwd) => {
  const filePath = path.join(cwd, url)
  try {
    if (fs.existsSync(filePath)) {
      return String(fs.readFileSync(filePath))
    } else {
      throw new Error()
    }
  } catch (e) {
    console.error(`Reading ${filePath} failed.`)
  }
}

module.exports = {
  normalizeUrl: normalizeUrl,
  getRemoteFile: getRemoteFile,
  getRelativeFile: getRelativeFile
}
