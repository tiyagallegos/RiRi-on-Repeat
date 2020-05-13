
const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna"

let songData, userInput;

const $songName = $("#song-name")
const $albumTitle = $("#album-title")
const $explicitLyrics = $("#rating")
const $albumCover = $("#album-cover")
const $audio = $("#audio")
const $userInput = $("#user-input")
const $button = $("#songSpecsButton")

$button.click( function() {
	 userInput = $userInput.val()
	 $userInput.val("");
	 getSongData()

});

$button.on("keydown", "#user-input", function(e) { 
	let key = e.which;
	if (key == 13) {
			$button.click();
			return false; 
		}
	});
        
function settings(url) {
	return {
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
function getSongData() {

	$.ajax(settings(baseUrl)).done(function(response) {

		const matchedSong = response.data.filter(song => song.title.toLowerCase() === userInput.toLowerCase())
		
		if (matchedSong.length != 0) {
			
	
			const song = matchedSong[0]
	
			$songName.html(userInput)
			$albumTitle.html(song.album.title)
	
			const rating = song.explicit_lyrics ? "Yes" : "No"
			$explicitLyrics.html(rating)
	
			$albumCover.css("backgroundImage", 'url(' + song.album.cover_big +')')
	
			$("#music").attr("src", song.preview)
			$audio[0].load()
			console.debug(song.album)
				loadTrackList(song.album.id)
		} else {
			$songName.html("Unknown song: " + userInput)
			$albumTitle.html("cannot fetch")
			$explicitLyrics.html("cannot fetch")
			tracks.html 
		}
	});
}

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
	function loadTrackList(albumId) {
		const trackUrl = "https://api.deezer.com/album/" + albumId + "/tracks"
		
		 $.get(trackUrl).done(function(response) {
			console.log(response)
	
			const data = response.data
	
			if (data.length != 0) {
				
				const $tracks = $("#tracklist")
				$tracks.empty()

				for (let i=0; i < data.length; i++) {
					const $track = "<li>" + data[i].title + "</li>"
					$tracks.append($track)
					
				}
			} else {
				
			}
		 })
		}

		//Removed all of my console.logs/debugging and titles of sections is that how you clean up the code? or do I leave the pieces labeing sections in? Im not sure. Also am I supposed to take out
		//my notes at the bottom too(see below) I know you can now go back and view my process through commits but feels like I got the answer to a math problem without showing my work... please advise.
	 //*** things to finish MONDAY
	 //1. Where to add .toUperCase()
	//2.Is there a closest match jQuery function
	//3. Search closest match 
//4. Pull song not recognized into the console by song name
//5. Add a keylistner to init when enter is hit too find code on google
//6. line 114 ask to use init or append to get to show in browser?? through the code text vs append....? 



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
