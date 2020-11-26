//======TASK16======


$("document").ready(function(){
  $("div").click(function(){
  $(this).animate({height:"50px"}).animate({width:"50px"}).animate({height:"150px"}).animate({width:"150px"})
    
    
      });
}); 

  
  /*
//======TASK15======


  $("document").ready(function(){
    $("button").click(function(){
    $(this).fadeOut("slow",function(){
    alert("Mission completed!.");

    });
  }); 
}); 

//======TASK14======
$("document").ready(function(){
  $("button").click(function(){
  $("#red").animate({left:"300px"});
    
  });
  });
  //======TASK13======
$("document").ready(function(){
  $("button").click(function(){
  $(".bunny").toggle("linear");
    
  });
  });
  //======TASK12======
  
  $("document").ready(function(){
    $("button").click(  function(){
      $(".bunny").toggle(2000)
     
     });
     });
  
  //======TASK11======


$("document").ready(function(){
  $("button").click(function(){
  $("div").toggle();
});
  });


// ======TASK10======

$(document).ready(function(){
  
  $("button").click(function(){
    $("li:last").after("<li>To do do do dooo</li>");
    $("li").on( "click", function( event ) {

      $(this).hide();});
  });
});


// ======TASK9======

$(document).ready(function(){
  $("input").keyup(function(){
    $("span").text($("input").val());
  });
});

// ======TASK8======

$(document).ready(function(){
  $("div").hover(function(){
    $(this).animate({left: "500px"}),
     $(this).animate({left: "0px"})
    
  });
});


// ======TASK7======
$(document).ready(function(){
  $("div").click(function(){
    $(this).css("background-color", "yellow")();
  });
});
// ======TASK6======

$(document).ready(function(){
  $("button").click(function(){
    $("span").hide();
  });
});

// ======TASK5======

$(document).ready(function(){
  $("button").click(function(){
    $(".introvert").hide();
  });
});


});
// ======TASK4======
$(document).ready(function(){
  $("button").click(function(){
    $("#invisible").hide();
  });
});


// ======TASK3======


$(document).ready(function(){

  $("#criminal").click(function(){
    $(this).hide();
  });
  */ 