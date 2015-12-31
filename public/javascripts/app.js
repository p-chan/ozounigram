$(function(){
  $('.ozounis').infinitescroll({
    navSelector  : ".navigation",
    nextSelector : ".navigation a",
    itemSelector : ".ozouni",
    animate: false,
    extraScrollPx: 150,
    bufferPx: 100,
    errorCallback: function() {
      console.log('[ERR]');
    }
  }, function(newElements) {
    $(newElements).hide().delay(100).fadeIn(600);
  });
});