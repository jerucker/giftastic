

var letters = ["Cats", "Dogs", "Birds", "tyrone biggums"];

function renderButtons() {
  // var letters = ["Cats", "Dogs", "Birds", "tyrone biggums"];
  $("#create").empty();
      // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < letters.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        var letterBtn = $("<button>");

        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        letterBtn.addClass("letter-button letter letter-button-color");

        // 4. Then give each "letterBtn" a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);

        // 5. Then give each "letterBtns" a text equal to "letters[i]".
        letterBtn.text(letters[i]);

        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#create").append(letterBtn);

      }
}


$("#add-category").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var category = $("#category-input").val().trim();
  // The movie from the textbox is then added to our array
  letters.push(category);

  // calling renderButtons which handles the processing of our movie array
  renderButtons();
})

// var letters = ["Cats", "Dogs", "Birds", "tyrone biggums"];

//       // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
//       // =================================================================================

//       // 1. Create a for-loop to iterate through the letters array.
//       for (var i = 0; i < letters.length; i++) {

//         // Inside the loop...

//         // 2. Create a variable named "letterBtn" equal to $("<button>");
//         var letterBtn = $("<button>");

//         // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
//         letterBtn.addClass("letter-button letter letter-button-color");

//         // 4. Then give each "letterBtn" a data-attribute called "data-letter".
//         letterBtn.attr("data-letter", letters[i]);

//         // 5. Then give each "letterBtns" a text equal to "letters[i]".
//         letterBtn.text(letters[i]);

//         // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
//         $("#create").append(letterBtn);

//       }


      $(document).on("click", '.letter-button', function (event) {
      console.log(this);
        $("#output").empty();
        var gigybutton = $(this).attr("data-letter");
        console.log(gigybutton);

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gigybutton + "&api_key=AVtvdB8fhvH9A9xpL0qqMOW0sX083crX&limit=5";
    console.log(queryURL);

    //  var queryURL = "http://api.giphy.com/v1/gifs/search?q=cats&api_key=AVtvdB8fhvH9A9xpL0qqMOW0sX083crX&limit=5";
   // var queryURL = "http://api.giphy.com/v1/gifs/search?q=cats&api_key=AVtvdB8fhvH9A9xpL0qqMOW0sX083crX&limit=5";
    
       
   $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++) {
    
    var showDiv = $("<div class='col-md-4'>");

    var rating = results[i].rating;
    var defaultAnimatedSrc = results[i].images.fixed_height.url;
    var staticSrc = results[i].images.fixed_height_still.url;
    var showImage = $("<img>");
    var p = $("<p>").text("Rating: " + rating);

    showImage.attr("src", staticSrc);
    showImage.addClass("netflixGiphy");
    showImage.addClass("gif");
    showImage.attr("data-state", "still");
    showImage.attr("data-still", staticSrc);
    showImage.attr("data-animate", defaultAnimatedSrc);
    
    showDiv.append(showImage);
    showDiv.append(p);
    // showDiv.addClass("gif");
    $("#output").prepend(showDiv);


    $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });










  }
});
})


renderButtons();

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log('response:', response);
        //     console.log(response.data[0].title);
        //     console.log(response.data[0].images.original.url);
    
        //     for (var i = 0; i < response.data.length; i++) {
        //         var gifDiv = $("<div>").addClass("gif");
        //         var image = $("<img>").attr("src", response.data[i].images.original.url);
        //         var title = $("<h3>").text(response.data[i].title);
        //         gifDiv.append(image, title);
        //         $("#output").append(gifDiv);
        //     }
        



        // $(".gif").on("click", function() {
        //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        //     var state = $(this).attr("data-state");
        //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        //     // Then, set the image's data-state to animate
        //     // Else set src to the data-still value
        //     if (state === "still") {
        //       $(this).attr("src", $(this).attr("data-animate"));
        //       $(this).attr("data-state", "animate");
        //     } else {
        //       $(this).attr("src", $(this).attr("data-still"));
        //       $(this).attr("data-state", "still");
        //     }
        //   });









    // })


   