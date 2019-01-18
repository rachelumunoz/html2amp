const placeholderImg = ($, options) => {
  const $placeholderImg = $('<amp-img />')
  const placeholderImgAttr = {
    placeholder: 'true',
    src: 'http://placekitten.com/g/200/300',
    layout: 'fill'
  }

  $placeholderImg.attr(placeholderImgAttr)

  return $placeholderImg
}

module.exports = placeholderImg
