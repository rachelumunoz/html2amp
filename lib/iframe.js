const iframe = ($, options) => {
  $('iframe').each((i, element) => {
    const $iframe = $(element)
    const $amp = $('<amp-iframe />')
    const ampIframeAttributes = Object.assign({
      allowtransparency: 'false',
      layout: 'responsive',
      frameborder: '0',
      sandbox: 'allow-scripts allow-same-origin allow-popups'
    }, element.attribs
    )
    $amp.attr(ampIframeAttributes)
    $iframe.replaceWith($amp)
  })
  if ($('amp-iframe').length) {
    $('script[custom-element="amp-iframe"]').remove()
    $('head').prepend('<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>')
  }
  return $
}

module.exports = iframe
