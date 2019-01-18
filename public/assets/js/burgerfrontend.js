$(function() {
	
    $("#add-btn").on('click', function(event) {
        event.preventDefault();		       
        console.log("client: inside add button")
        var newBurger = {
            name: $("#bName").val().trim(),
            devoured: false,           
        };
        $("#bName").val("");
        $.post("/api/addBurger", newBurger).then(function(result) {
            console.log(result);
            location.reload();
			console.log("back in post end")
          });         
    });
		
	
	$(".Devour").on('click', function(event) {
        event.preventDefault();		               
        //var id = $(this).data("id");        
		//console.log("client: inside delete button:id:"+id);
		console.log("client: data.id:"+ $(this).data("id"));
        $.post("/api/DevourBurger", {id: $(this).data("id")}).then(function(result) {
            console.log(result);
            location.reload();
			console.log("back in delete at client")
          });          
    });


	$(".Delete").on('click', function(event) {
        event.preventDefault();		               
        //var id = $(this).data("id");        
		//console.log("client: inside delete button:id:"+id);
		console.log("client: data.id:"+ $(this).data("id"));
        $.post("/api/DeleteBurger", {id: $(this).data("id")}).then(function(result) {
            console.log(result);
            location.reload();
			console.log("back in delete at client")
          });          
    });
	
});