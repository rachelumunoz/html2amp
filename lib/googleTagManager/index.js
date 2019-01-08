const googleTagManager = ($, options) => {
  const gtmContainerId = options.gtmContainerId
    if (gtmContainerId) {
    const $script = $('<!-- AMP Analytics --><script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>')
    const $config = $(`<!-- Google Tag Manager -->
    <amp-analytics config="https://www.googletagmanager.com/amp.json?id=${gtmContainerId}" data-credentials="include"></amp-analytics>`)
    $('body').prepend($config)
    $('head').prepend($script)
  }
  return $
}

module.exports = googleTagManager
