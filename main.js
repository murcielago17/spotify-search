// wait for DOM to load before running JS
$(function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  
  // your code here
	$('#search').on('submit', function (event) {
    
    event.preventDefault();
    console.log('form submitted!');

    	var searchedArtist = $('#artist').val();
    		console.log(searchedArtist);

    	$.get('https://api.spotify.com/v1/search?q=' + searchedArtist + '&type=artist', function (data) {
      
      		console.log(data);
    var artistResults = data.artists.items;

      
      artistResults.forEach(function (artist) {
        console.log(artist.name);

        
        $('#results').append('<p>' + artist.name + '</p>');


});

