$(function(){

    $(".eat").on("click", function(){
        var id = $(this).data("id");
        var isDevoured = {devoured: true}
       
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: isDevoured
          }).then(
            function() {
              console.log("changed devoured to", isDevoured);
              location.reload();
            }
          );
        });
    
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bname").val()
        };   
        console.log(newBurger)
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            location.reload();
          }
        );
    })

});