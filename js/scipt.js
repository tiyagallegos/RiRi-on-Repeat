

/*
/*----- constants -----*/
const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna"

/*----- app's state (variables) -----*/
let songData, userInput;

/*----- cached element references -----*/



/*----- event listeners -----*/

$controls.on('click', "form", handleGetData);

/*----- functions -----*/
function settings(url) {
	return{
	"async": true,
	"crossDomain": true,
	"url": url,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "e757fe4fb0mshf47696722c0aac2p11e08ejsnd4888a112874"
	}
}
	}

	$.ajax(settings(baseUrl)).done(function(response) {
		const matchedSong = response.data.filter(song => song.title === userInput)
	
		if (matchedSong.length != 0) {
			console.log(matchedSong)
	
			const song = matchedSong[0]
	
			$("#song-name").text(userInput)
			$("#album-title").text(song.album.title)
	
			const rating = song.explicit_lyrics ? "Yes" : "No"
			$("#rating").text(rating)
	
			$("#album-cover").css("backgroundImage", 'url(' + song.album.cover +')')
	
			$("#preview").attr("src", song.preview)
			$("#audio")[0].load()
	
			loadTrackList(song.album.id)
		} else {
			console.log("Unknown song: " + userInput)
		}
	});



     


// step 1 filter through response data and make sure user input matches song title. 
// 2. set new var = the matchedSong [0]
//3. use elemnts to add in text in HTML  with the . stuff jquery to reduce errors
///4. .css for styling for the cover
//5 .attr for song preview
//6. use audio to init loading
//TRACKLIST ISSUE
//7 tracklist issue: CORS need to send another API requst through proxy server to access playlist object
//once accessed playlist filter to list traks into an empty array and make it a list
//append data 
//else if cannot fetch list, return cannot fetch tracklist *make track list hidden w/hover .onmousehover

//6.1 else log an error unknkown song
//*current issue: fetching tracklist
