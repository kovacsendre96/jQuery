
 //======TASK32======


 $(document).ready(function(){
  $("#datepicker").datepicker();
});




/*
 //======TASK31======
 $(document).ready(function(){
  $("button").click(function(){
    $.post("https://orange.codeberryschool.com/content/classroom-api/jquery-assignment",
    {number: $("input").val()},
    function(data){
      console.log(data);
      alert(data["twice-your-value"]);
    });
  });
});
 //======TASK30======

  $(document).ready(function(){
    $("button").click(function(){
    $.get("https://orange.codeberryschool.com/content/classroom-api/jquery-assignment",function(data){
    
    alert("Password is : "+data.password)
    });
    });
  });





 



 //======TASK29======
  $(document).ready(function(){
    $("button").click(function(){
    $("#rocket").width("75px")
    $("#rocket").height("75px");
      });
    });
//======TASK28======

 $(document).ready(function(){
  $("button").click(function(){
  $("body").css("background-color","black")
    });
  });

//======TASK27======

$(document).ready(function(){
  $("button").click(function(){
  $("div").toggleClass("blue")
    });
  });
//======TASK26======


  $(document).ready(function(){
    $("button").click(function(){
    $(".party-face").removeClass("pretty")
      });
    });
//======TASK25======
$(document).ready(function(){
  $("button").click(function(){
  $(".party-face").addClass("pretty")
     });
  });


//======TASK24======

$(document).ready(function(){
  $("button").click(function(){
  $("div").empty()
     });
  });
//======TASK23======

$(document).ready(function(){
  $("button").click(function(){
  $(".lovebird").remove()
     });
  });
//======TASK22======
$(document).ready(function(){
  $("button").click(function(){
  $("#friend2").before("<div>Whoa, calm down, bros!</div>")
     });
  });

  //======TASK21======
  $(document).ready(function(){
    $("button").click(function(){
    $("#friend2").after("<div>Sorry guys, I'm a bit late.</div>")
      
    
    });
    });
 //======TASK20======
  
  $(document).ready(function(){
    $("a").click(function(){
    alert("You are opening "+$("a").attr("href")+".")
      
    
    });
    });
 //======TASK19======
   $(document).ready(function(){
    $("input").keyup(function(){
      $("span").text($("input").val());
    });
  });
   //======TASK18======
  $(document).ready(function(){
    $("button").click(function(){
      $("span").html("<em>even</em>");
    });
  });
    //======TASK17======
  $(document).ready(function(){
    $("div").mouseenter(function(){
      $(this).text("Thanks, it's much better now!")});
  
     $("div").mouseleave(function(){
      $(this).text("Oh nooo, the itching is back!.")});
   
  });
  //======TASK16======


$("document").ready(function(){
  $("div").click(function(){
  $(this).animate({height:"50px"}).animate({width:"50px"}).animate({height:"150px"}).animate({width:"150px"})
    
    
      });
});
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