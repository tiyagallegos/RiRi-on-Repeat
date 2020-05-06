
           /*

const corsServer = "https://cors-anywhere.herokuapp.com/"
const baseUrl = "https://trefle.io/api/plants/{id}";
const token = "SnpPcEo0Zk92WUZLRTE4U0piY3BrUT09"
const url = corsServer + baseUrl + "?token=" + token
$.ajax({
  url: url
}).then(function(data){
  console.log(data)
});

*/
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "e757fe4fb0mshf47696722c0aac2p11e08ejsnd4888a112874"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

/*
/*----- constants -----*/
/*----- app's state (variables) -----*/
let songData, userInput;

/*----- cached element references -----*/
//using $ to tell people I'm using jquery 
//how to select elements in the dom using jquery
//STOPPP make sure you selected elements correctly
//jquery will always return object
const $releaseYearEl = $('#year');

const $albumTitle = $('#album_title');

const $year = $('#year');

const $rating = $('#rate');

const $input = $('input[type="text"]')

const $coverImg = $('#cover-img');

const $trackList = $('#trackList');
//how to access and push into html array?

const $songPrev = $('#song-prev');
//grab the input that has a type = text, CSS, JS or Jquery
//to get value from input tag

/*----- event listeners -----*/
$('form').on('submit', handleGetData)
//wrapped in $$ so we can attach and event listeener
//access an element suing jquery, then **.on= how to add event 
//listener using jquery, lisenteing for submit type of event


/*----- functions -----*/

init ();

function init() {
    $yearEl.html(new Date().getFullYear());
    //check for time embedded function
    //complaints = [];
    //initialize complaints to an empty array 
}

function handleGetData(event) {
    event.preventDefault();//prevents the default behavior of form submission
    if($input.val() === "") return; //No data don't run checking to make sure u enter text

    userInput = $input.val();
   $input.val(""); //clear the input
    //assignning userinput to input value connecting with the dom
    //will give the value user gives in input tag
    $.ajax({
        url:'https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna' + userInput
    }).then(function(data) {
        movieData = data;
        //no have global accesslet movieData is the global managemetn in the stat variable
        render();
    }, function(error) {
        console.log(error)  
    });
}

function render() {
    $title.html(movieData.Title);
    $year.html(movieData.Year);
    $rating.html(movieData.Rated);
} 
//let movieData is the global managemetn in the stat variable

//re-factoring=making it fit a certain spec
//this code will only execute when this function gets called
//usually have to change some variable names after refactioring. 


//making dynamic ajax requests
//whenever browser sees a form,the form will tell browser to refresh the page
//defeats purpose of AJAX don't need to refresh the page so turn off default 
//behavior of the form
