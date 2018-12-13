$(function(){
  $(".kc").each(function(){

    //LOCATE FEEDBACK & HIDE
    var kcFeedback = $(this).find(".feedback");
    kcFeedback.hide();
    kcFeedback.attr('aria-hidden',true);

    // RADIO CHOICE
    $("input[name='choice'],select[name='choice']").change(function() {
      var currentForm = $(this).closest(".kc");
      var kcFeedback = currentForm.find(".feedback");
      kcFeedback.hide();
      kcFeedback.attr('aria-hidden',true);

      //MATCH INPUT VALUE WITH FEEDBACK CLASS
      var choiceSelection = $(this).val();
      var choiceFeedback = kcFeedback.filter("."+choiceSelection);

      choiceFeedback.show();
      choiceFeedback.attr('aria-hidden',false);
    });

  });
});