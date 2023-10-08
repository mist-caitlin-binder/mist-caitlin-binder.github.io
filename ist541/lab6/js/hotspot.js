// JavaScript file
$( function() {
   $("map area").click( function(){
	   $('#myModal').modal("show");

      if ($(this).attr("class") == "methyl") {
         $("#feedback").css("color","purple");
         $("#feedback").html("carbon atom bonded to 3 hydrogen atoms");
      }

      if ($(this).attr("class") == "methine") {
         $("#feedback").css("color","green");
         $("#feedback").html("carbon atom bonded to 1 hydrogen atom");
      }

      if ($(this).attr("class") == "methylene") {
         $("#feedback").css("color","red");
         $("#feedback").html("carbon atom bonded to 2 hydrogen atoms");
      }

	   if ($(this).attr("class") == "quaternary") {
         $("#feedback").css("color","blue");
         $("#feedback").html("carbon atom without any hydrogen atoms");
      }
   });
}); //end main jQuery function
// JavaScript Document