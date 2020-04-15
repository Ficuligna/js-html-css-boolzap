
$(document).ready(function(){
  // Funzioni per mandare un messaggio su click o su keypress
  $(".sendMessage input").keyup(function(){
    if ($(".sendMessage input").val() != "") {
      $("#SendOrRec").html('<i class="fa fa-paper-plane" aria-hidden="true"></i>');
    }else{
      $("#SendOrRec").html('<i class="fa fa-microphone" aria-hidden="true"></i>');
    }
  })
  $("#SendOrRec").click(function(){
    var time = new Date();
    var minuti = time.getMinutes();
    if (minuti < 10) {
      minuti = "0" + minuti
    }
    var miseccaricopiare = '<div class="drop"><i class="fa fa-sort-desc" aria-hidden="true"></i></div>';
    var miseccaricopiare2 = '<div class="mutendina"><ul><li>info message</li><li>delete message</li></ul></div>';
    var messageTime = time.getHours() + ":" + minuti
    var newMessage = $(".sendMessage input").val();
    //attenzione non ci credo funziona
    var source = $("giacomino-template").html();
    var template = Handlebars.compile(source);
    var modifica = {
     "altra": userMessage,
     "newMessage": newMessage,
     "messageTime": messageTime,
     "miseccaricopiare":miseccaricopiare,
     "miseccaricopiare2": miseccaricopiare2
    }
    var modifica2 = {
     "altra": friendMessage,
     "newMessage": newMessage,
     "messageTime": messageTime,
     "miseccaricopiare":miseccaricopiare,
     "miseccaricopiare2": miseccaricopiare2
    }
    var html = template(modifica);
    var html2 = template(modifica2);
    if ($(".sendMessage input").val() != "") {
      $(".right-chat.chatactive").append(html);
      setTimeout(function(){          //aggiunta reazione automatica

        $(".right-chat.chatactive").append(html2);
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
    var miseccaricopiare = '<div class="drop"><i class="fa fa-sort-desc" aria-hidden="true"></i></div>';
    var miseccaricopiare2 = '<div class="mutendina"><ul><li>info message</li><li>delete message</li></ul></div>';
    var messageTime = time.getHours() + ":" + minuti;
    var newMessage = $(".sendMessage input").val();
    if ($(".sendMessage input").val() != "" && x.which == 13) {
      $(".right-chat.chatactive").append('<div class="containermessage userMessage"><div class="message"><p>' + newMessage + '</p><p>'+ messageTime + '</p>'+ miseccaricopiare + miseccaricopiare2 +'</div></div>');
      $(".friendAccount p:nth-child(2)").text("Sta scrivendo...")
      $(".friendAccount p:nth-child(3)").text("");
      setTimeout(function(){          //aggiunta reazione automatica
        $(".right-chat.chatactive").append('<div class="containermessage friendMessage"><div class="message"><p> ok </p><p>'+ messageTime + '</p>'+ miseccaricopiare + miseccaricopiare2 +'</div></div>');
        $(".friendAccount p:nth-child(3)").text(messageTime);
        $(".friendAccount p:nth-child(2)").text("Ultimo accesso alle ore")
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
  // funzione mutendina + funzione delete

  $(".right-chat").on("click", ".drop", function(event){
    $(this).siblings(".mutendina").show();
    event.stopPropagation()
  });
  $(document).click(function(){
    $(".mutendina").hide()
  })
  $(".right-chat").on("click", "li:nth-child(2)", function(event){
    $(this).parent().parent().parent().parent().remove();
  });
  //fine funzione mutendina e delete
  //switch chat
  $(".chat").click(function(){
    var chatList = $(".chat");
    var thischatlist = $(this);
    var rightchatlist = $(".right-chat");
    chatList.removeClass("active");
    $(this).addClass("active");
    var mainChatName = $(this).find("h2").text();
    var mainChatImage = $(this).find("img").attr("src");
    $(".friendAccount img").attr("src", mainChatImage);
    $(".friendAccount h3").text(mainChatName);
    rightchatlist.removeClass("chatactive")
    rightchatlist.each(function(){
      if (thischatlist.data("numerocell") == $(this).data("numerocell")) {
        $(this).addClass("chatactive");
      };
    });
  });
  //fine switch
  //Ora e attività chat dinamica






});
