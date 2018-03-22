const URL ='https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=c0f28b68508cdd4730846664d863a28b&format=json';

function getArtist(){
	return fetch(URL)
		.then(response => response.json())
		.then(data => data.topartists.artist)
		.then(artists => artists.map(artist =>({
			name : artist.name,
			image: artist.image[3]['#text'],
			likes:200,
			comments:140
		})))
}

export { getArtist }