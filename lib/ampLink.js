const ampLink = ($) => {
  if($('link').attr('rel', 'amphtml').length){
    $('link').attr('rel', 'amphtml').remove()
  }
  
    
    return $
  }
  
  module.exports = ampLink