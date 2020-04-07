
$(".sendMessage input").keyup(function(){
  if ($(".sendMessage input").val() != "") {
    $("#SendOrRec").html('<i class="fa fa-paper-plane" aria-hidden="true"></i>');
  }else{
    $("#SendOrRec").html('<i class="fa fa-microphone" aria-hidden="true"></i>')
  }
})
$("#SendOrRec").click(function(){
  var newMessage = $(".sendMessage input").val();
  if ($(".sendMessage input").val() != "") {
    $(".chatActive").append('<div class="containermessage userMessage"><div class="message"><p>' + newMessage + '</p></div></div>');
    $("#SendOrRec").html('<i class="fa fa-microphone" aria-hidden="true"></i>')
    newMessage = "";
    $(".sendMessage input").val("");

  }

})
$(".sendMessage input").keypress(function(x){
  var newMessage = $(".sendMessage input").val();
  if ($(".sendMessage input").val() != "" && x.which == 13) {
    $(".chatActive").append('<div class="containermessage userMessage"><div class="message"><p>' + newMessage + '</p></div></div>');
    newMessage = "";
    $(".sendMessage input").val("");
  };
})
