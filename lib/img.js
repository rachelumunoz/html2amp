const utils = require('./utils')
const sizeOf = require('image-size')
const path = require('path')
const uriToBuffer = require('data-uri-to-buffer')

const img = async ($, options = {}) => {
  const imageElements = $('img')
  const promises = imageElements
    .map(async (i, node) => {
      const element = $(node)
      const src = element.attr('src')
      const alt = element.attr('alt') || ''
      const layout = element.attr('layout') || 'responsive'
      const url = utils.normalizeUrl(src)
      let size = null
      let img = null
      let ampImage = ''
      try {
        if (url.startsWith('http') || url.startsWith('https')) {
          const remoteOptions = { responseType: 'arraybuffer', headers: { 'Content-Type': 'image/png' } }
            img = await utils.getRemoteFile(url, remoteOptions)
            size = sizeOf(img)
        } else if (url.startsWith('data:')) {
          const buffer = uriToBuffer(url)
          size = sizeOf(buffer)
        } else {
          utils.getRelativeFile(url, options.cwd)
          size = sizeOf(path.join(options.cwd, url))
        }
        const width = element.attr('width') || size.width
        const height = element.attr('height') || size.height
        ampImage = `<amp-img src="${url}" alt="${alt}" width="${width}" height="${height}" layout="${layout}" />`
      } catch (e) {
        console.log(e)
      } finally {
        element.replaceWith(ampImage)
      }
    }).get()
    await Promise.all(promises)
    return $
}

module.exports = img
