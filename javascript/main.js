
$(document).ready(function(){
  // Funzioni per mandare un messaggio su click o su keypress
  $(".sendMessage input").keyup(function(){
    if ($(".sendMessage input").val() != "") {
      $("#SendOrRec").html('<i class="fa fa-paper-plane" aria-hidden="true"></i>');
    }else{
      $("#SendOrRec").html('<i class="fa fa-microphone" aria-hidden="true"></i>')
    }
  })
  $("#SendOrRec").click(function(){
    var time = new Date();
    var minuti = time.getMinutes();
    if (minuti < 10) {
      minuti = "0" + minuti
    }
    var messageTime = time.getHours() + ":" + minuti
    var newMessage = $(".sendMessage input").val();
    if ($(".sendMessage input").val() != "") {
      $(".chatActive").append('<div class="containermessage userMessage"><div class="message"><p>' + newMessage + '</p><p>'+ messageTime + '</p></div></div>');
      setTimeout(function(){          //aggiunta reazione automatica
        $(".chatActive").append('<div class="containermessage friendMessage"><div class="message"><p> ok </p><p>'+ messageTime + '</p></div></div>');
      },1000);
      $("#SendOrRec").html('<i class="fa fa-microphone" aria-hidden="true"></i>')
      newMessage = "";
      $(".sendMessage input").val("");
    }
  })
  $(".sendMessage input").keypress(function(x){
    var time = new Date();
    var minuti = time.getMinutes();
    if (minuti < 10) {
      minuti = "0" + minuti
    }
    var messageTime = time.getHours() + ":" + minuti
    var newMessage = $(".sendMessage input").val();
    if ($(".sendMessage input").val() != "" && x.which == 13) {
      $(".chatActive").append('<div class="containermessage userMessage"><div class="message"><p>' + newMessage + '</p><p>'+ messageTime + '</p></div></div>');
      setTimeout(function(){          //aggiunta reazione automatica
        $(".chatActive").append('<div class="containermessage friendMessage"><div class="message"><p> ok </p><p>'+ messageTime + '</p></div></div>');
      },1000);
      newMessage = "";
      $(".sendMessage input").val("");
    };
  })
  //fine funzioni sendmessage
  //funzione search
  $(".searchbar input").keyup(function(){
    var digimon = $(this).val().toLowerCase();
    var nomiFriendoni = $(".chat .textSide h2");
    nomiFriendoni.each(function(){
      if ($(this).text().toLowerCase().includes(digimon)) {
        $(this).parent().parent().addClass("serchOn");
        $(this).parent().parent().removeClass("searchOf");
      }else{
        $(this).parent().parent().addClass("searchOf");
        $(this).parent().parent().removeClass("searchOn");
      }
    })
  })
  //fine funzione search

})
