$(document).ready(function($) {
  $('.listItem').find('#toggleListExpand').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $(".innerList").not($(this).next()).slideUp('fast');

  });
});
