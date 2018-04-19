$(document).ready(function($) {
  $('.listItem').find('#toggleListExpand').click(function(){
    $(this).next().slideToggle('fast');
    $(".innerList").not($(this).next()).slideUp('fast');
  });
});
