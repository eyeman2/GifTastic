
var topics = ["Ted Cruz", "Elizabeth Warren", "Arnold Schwarzenegger", 'Donal Trump', "Vladimir Putin", "Roy Moore", "Mitch McConnel", "Hillary Clinton", "Bill Clinton", "Bernie Sanders", "Lindsey Graham"];
// console.log(topics)

function showGifs() {

    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=jLoFybnVzecovsr1cnuvh0oSmvy0h5Xq&q=politics+" + topic + "&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {

        $("#Gifs").empty();

        var results = response.data;
        console.log(results)

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");
            // add class to div that contains gif and rating
            gifDiv.addClass('gif-wrapper');

            var gif = $("<img>")
            var rating = results[i].rating;

            var rated = $("<p>").text(rating);

            
            gif.addClass("gifSource");
            rated.addClass('rated');
            
            gif.attr("src", results[i].images.fixed_height_still.url);
            
            gif.attr("data-state", "still");
            
            gif.attr("data-still", results[i].images.fixed_height_still.url);
            
            gif.attr("data-motion", results[i].images.fixed_height.url);
            
            
            
            // gif.append(rated);
            // var gifImage = $("<img>")
            console.log(rated)
            
            
            // var stillGif = results[i].images.fixed_height_still.url;
            
            // var motionGif = results[i].images.fixed_height.url;
            
            // gifImage.attr("src", results[i].images.fixed_height.url);
            
            gifDiv.append(gif);
            gifDiv.append(rated);
            
            $("#Gifs").append(gifDiv);
            // $("#Gifs").empty();

            
        }

    })
}

function showButtons() {

    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {

        var a = $("<button>");

        a.addClass("topic-btn");

        a.attr("data-name", topics[i]);

        a.text(topics[i]);

        $("#buttons").append(a);

    }

}

$("#Gifs").on("click", ".gifSource", function () {

    var state = $(this).attr("data-state");

    if (state === "still") {

        $(this).attr("src", $(this).attr("data-motion"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

$("#add").on("click", function (event) {
    event.preventDefault();

    var topic = $("#input").val().trim();

    if(topic === ""){
        return;
       }

       $("#input").val("");

    topics.push(topic);


    showButtons();

})



$(document).on("click", ".topic-btn", showGifs);


showButtons();

// $(function(){
//     $('img').each(function(motion){
//       var src = $(motion).attr('src');
//       $(motion).on("click", function(){
//         $(this).attr('src', src.replace('.gif', '_anim.gif'));
//       }, function(){
//         $(this).attr('src', src);
//       });
//     });
//   });

    // for (let i = 0; i < topics.length; i++) {
    //     // const element = array[i];
    //     var a = $("<button>");

    //     a.addClass("topic-btn");

    //     a.attr("data-name", topics[i]);

    //     a.text(topics[i]);

    //     $("#buttons").append(a);

    // }

//     var results = response.data;

//     for (let i = 0; i < topics.length; i++) {


//         // const element = array[i];

//     }
// })

// var gif1 = results[i].images.fixed_height_still.url

// var gif2 = results[i].images.fixed_height.url

// $("#Gifs").on("click", function() {

//     if(gif == gif2) {

//         $(gif).attr(gif1)
//     }

//     else{
//         $(gif).attr(gif2);
//     }

//     showButtons();
// })

