$(document).ready(function(){

  $(".top_nav-item").on({
    mouseenter: function(){
      $( this ).children().css("color", "black");
      $(this).css("background-color", "white");
     },
     mouseleave: function(){
        $( this ).children().css("color", "white");
        $(this).css("background-color", "#4CAF50");
     },
     click: function(){
     if( !($(this).find( "i" ).hasClass("fa-bars")))
     {
     if( $(this).find( "i" ).hasClass("fa-caret-up"))
      {
          $(this).find( "i" ).removeClass("fa-caret-up").addClass("fa-caret-down");
          $(".nav-on-click").addClass("hide");
      }
      else{
      $(".top_nav-item").find( "i" ).not(".fa-bars").removeClass("fa-caret-up").addClass("fa-caret-down");
       $(this).find( "i" ).toggleClass("fa-caret-down").toggleClass("fa-caret-up");
         if($(this).attr("id") == "TUTORIALS"){
                  $(".nav-on-click").addClass("hide");
                  $("#nav_tutorials").toggleClass("hide");
                  }
                 else if($(this).attr("id") == "REFERENCES"){
                  $(".nav-on-click").addClass("hide");
                  $("#nav_references").toggleClass("hide");
                  }
                 else if($(this).attr("id") == "EXAMPLES"){
                  $(".nav-on-click").addClass("hide");
                  $("#nav_examples").toggleClass("hide");
                 }
                 else if($(this).attr("id") == "EXERCISES"){
                 $(".nav-on-click").addClass("hide");
                 $("#nav_exercises").toggleClass("hide");
                 }
                 else{$(".nav-on-click").addClass("hide");}
                 }
      }

     }

    });
    $(".certoverlay-parent").on({
    mouseenter: function(){
    $( this ).children().css("color", "#4CAF50");
    },
    mouseleave: function(){
            $( this ).children().css("color", "white");
         }
    });
    $("#getStartedbtn").on({
     mouseenter: function(){
           $( ".certoverlay" ).css("color", "white");
           },
     mouseleave: function(){
           $( ".certoverlay" ).css("color", "#4CAF50");
           }
    });
    $(".closeBtn").click(function(){$(".nav-on-click").addClass("hide");
    $(".top_nav-item").find( "i" ).not(".fa-bars").removeClass("fa-caret-up").addClass("fa-caret-down");});
});
