


/*----- constants -----*/
const baseUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=rihanna"

/*----- app's state (variables) -----*/
let songData, userInput;

/*----- cached element references -----*/


const $songName = $("#song-name")
const $albumTitle = $("#album-title")
const $explicitLyrics = $("#rating")
const $albumCover = $("#album-cover")
const $audio = $("#audio")
const $userInput = $("#user-input")
const $button = $("#songSpecsButton")
//console.debug($userInput)
/*----- event listeners -----*/




$button.click( function() {
	 userInput = $userInput.val()
	 $userInput.val("");
	 getSongData()

});

// help here
$button.on("keydown", "#user-input", function(e) { 
	let key = e.which;
	if (key == 13) {
			$button.click();
			return false; 
		}
	});
   
	//console.debug(userInput)
	//add event listener for key handler listen in key handler for enter key

  // Or with jQuery

  //$('.dropdown-trigger').dropdown();
        

/*----- functions -----*/
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
		//console.log(response.data)
		const matchedSong = response.data.filter(song => song.title.toLowerCase() === userInput.toLowerCase())
		//console.log(matchedSong);
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
//README add API issues 
// change html d/t greater flex with html docs
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
	function loadTrackList(albumId) {
		const trackUrl = "https://api.deezer.com/album/" + albumId + "/tracks"
		//const trackUrl = "https://api.deezer.com/album/12279688/tracks"
		 $.get(trackUrl).done(function(response) {
			//const response = {"data":[{"id":13529559,"readable":true,"title":"S&M","title_short":"S&M","title_version":"","isrc":"USUM71026591","link":"https:\/\/www.deezer.com\/track\/13529559","duration":243,"track_position":1,"disk_number":1,"rank":856355,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-b.dzcdn.net\/stream\/c-b49dd405a5c07c9265e268dbbcdf308e-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529560,"readable":true,"title":"What's My Name?","title_short":"What's My Name?","title_version":"","isrc":"USUM71025031","link":"https:\/\/www.deezer.com\/track\/13529560","duration":263,"track_position":2,"disk_number":1,"rank":799717,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-8.dzcdn.net\/stream\/c-866c7c2566195f4ecd80ef0357a105bb-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529561,"readable":true,"title":"Cheers (Drink To That)","title_short":"Cheers (Drink To That)","title_version":"","isrc":"USUM71026595","link":"https:\/\/www.deezer.com\/track\/13529561","duration":261,"track_position":3,"disk_number":1,"rank":651235,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-3.dzcdn.net\/stream\/c-32e714ee2efe6a396a668f30314d8068-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529562,"readable":true,"title":"Fading","title_short":"Fading","title_version":"","isrc":"USUM71113372","link":"https:\/\/www.deezer.com\/track\/13529562","duration":207,"track_position":4,"disk_number":1,"rank":517089,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-4.dzcdn.net\/stream\/c-4e7cbdcc30ae11de5388a94ef4a1c563-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529563,"readable":true,"title":"Only Girl (In The World)","title_short":"Only Girl (In The World)","title_version":"","isrc":"USUM71023200","link":"https:\/\/www.deezer.com\/track\/13529563","duration":235,"track_position":5,"disk_number":1,"rank":868445,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-d.dzcdn.net\/stream\/c-d20ea30267f84d42b66c6aa61c3aa43c-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529564,"readable":true,"title":"California King Bed","title_short":"California King Bed","title_version":"","isrc":"USUM71026619","link":"https:\/\/www.deezer.com\/track\/13529564","duration":251,"track_position":6,"disk_number":1,"rank":713683,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-1.dzcdn.net\/stream\/c-1bfd307e77179a66330646bc0c9f8454-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529565,"readable":true,"title":"Man Down","title_short":"Man Down","title_version":"","isrc":"USUM71026642","link":"https:\/\/www.deezer.com\/track\/13529565","duration":267,"track_position":7,"disk_number":1,"rank":890791,"explicit_lyrics":true,"explicit_content_lyrics":1,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-9.dzcdn.net\/stream\/c-96d5c75c25aa5d36ec6229026466c884-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529566,"readable":true,"title":"Raining Men (Album Version)","title_short":"Raining Men","title_version":"(Album Version)","isrc":"USUM71026641","link":"https:\/\/www.deezer.com\/track\/13529566","duration":224,"track_position":8,"disk_number":1,"rank":486401,"explicit_lyrics":true,"explicit_content_lyrics":1,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-6.dzcdn.net\/stream\/c-6413cc0c135d73e8bc805c07555df120-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529567,"readable":true,"title":"Complicated (Album Version)","title_short":"Complicated","title_version":"(Album Version)","isrc":"USUM71026639","link":"https:\/\/www.deezer.com\/track\/13529567","duration":257,"track_position":9,"disk_number":1,"rank":523888,"explicit_lyrics":true,"explicit_content_lyrics":1,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-6.dzcdn.net\/stream\/c-6dd5bd75ea9537b705c1c872920051d3-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529568,"readable":true,"title":"Skin","title_short":"Skin","title_version":"","isrc":"USUM71026640","link":"https:\/\/www.deezer.com\/track\/13529568","duration":303,"track_position":10,"disk_number":1,"rank":626277,"explicit_lyrics":false,"explicit_content_lyrics":0,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-6.dzcdn.net\/stream\/c-643fd7f2b18506e8f9978a58113fe4fd-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"},{"id":13529569,"readable":false,"title":"Love The Way You Lie (Part II)","title_short":"Love The Way You Lie (Part II)","title_version":"","isrc":"USUM71026644","link":"https:\/\/www.deezer.com\/track\/13529569","duration":296,"track_position":11,"disk_number":1,"rank":358458,"explicit_lyrics":true,"explicit_content_lyrics":1,"explicit_content_cover":1,"preview":"https:\/\/cdns-preview-c.dzcdn.net\/stream\/c-c4f68fed0d8a990a0cf84067c4e6049e-8.mp3","artist":{"id":564,"name":"Rihanna","tracklist":"https:\/\/api.deezer.com\/artist\/564\/top?limit=50","type":"artist"},"type":"track"}],"total":11}
			console.log(response)
	
			const data = response.data
	
			// check if the response has tracks
			if (data.length != 0) {
				//  build a dropdown list
				const $tracks = $("#tracklist")
				$tracks.empty()
	
				// loop through the response tracks
				for (let i=0; i < data.length; i++) {
					const $track = "<li>" + data[i].title + "</li>"
					$tracks.append($track)
					
				}
			} else {
				//tracks.text("Could not fetch track list") do I use text or append here?
			}
		 })
		}

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
