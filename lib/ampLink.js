const ampLink = ($) => {
  if($('.amphtml').length > 0){
    $('.amphtml').remove()
  }
    return $
}
  
module.exports = ampLink