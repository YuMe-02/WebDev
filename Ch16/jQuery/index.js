// if you want to apply and link the js and jQuery in head section
// turns the h1 red

// $(document).ready(function() {
        
//     $("h1").css("color", "red");

// });

// applies new class to h1

$("h1").addClass("big-title margin-50");

// change text 
$("button").text("don't click me");
    
// change inner html method
$("button").html("<em> OOF <\em>");

// sees value of the img
console.log($("img").attr("src"));

// use attr method to get val of href attribute
$("a").attr("href", "http://www.yahoo.com")

// add event listener to h1
$("h1").click(function() {
    $("h1").css("color", "purple")
});

// pressing button to change h1 to purple
// for (var i = 0; i<5; i++) {
//     document.querySelector("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple"
//     });
// }

// same jquery code
$("button").click(function(){
    $("h1").css("color", "purple");
});


// key press logger
$("input").keypress(function(event) {
    console.log(event.key);
})

// text changer
$("input").keypress(function(event) {
    $("h1").text(event.key);
})

// more flexible way to take input e.g any event possible
$("h1").on("mouseover", function() {
    $("h1").css("color", "green");
})

// create new elements e.g buttons using jS

// before -- the opening tag of the mentioned elemente
$("h1").before("<button>NEW Be</button>");

// after -- the opening tag of the mentioned elemente
$("h1").after("<button>NEW Af</button>");

// prepend -- adds content just before the specified content inside the the targer
$("h1").prepend("<button>NEW 1 </button>");

// append -- adds content just after the specified content inside the the targer
$("h1").append("<button>NEW 1 </button>");