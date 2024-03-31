const ARTIST_ENDPOINT_URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
const searchParams = new URLSearchParams(location.search)
const artistId = searchParams.get('id')

console.table({ artistId })

window.onload = async () => {
    const url = ARTIST_ENDPOINT_URL + String(artistId) // castiamo l'id, nel caso abbia uno 0 davanti e che quindi faccia la somma, invece di venire aggiunto all'url
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    // possiamo mostrare nel nostro documento i dati presenti nella risposta, utilizzando DOM manipulation
    showArtistData(data)
}

function showArtistData(data) {
    const artistName = document.querySelector("#artist-name")
    artistName.innerHTML = data.name
}