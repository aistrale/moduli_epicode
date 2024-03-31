// Possiamo scrivere la stessa funzione in due modi

// 1. qui window.onload non restituisce una promessa, una parte della logica della funzione verrà eseguita indipendentemente dal risultato della fetch
window.onload = () => {
    // un oggetto che ci consente di andare a recuperare tutti i parametri nella nostra ricerca
    const searchParams = new URLSearchParams(window.location.search)
    const albumId = searchParams.get('id') // andiamo a recuperare i parametri con l'id
    // facciamo un'altra fetch dove andiamo a prendere i risultati dell'album
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)
    .then(r => r.json())
    .then(body => {
        console.log(body)
        showAlbumData(body)
    })
}

// 2. in questo caso window.onload ci restituisce una promessa. TUTTA la funzione sta aspettando che la fetch vada a buon fine. Se non va a buon fine, la funzione intera "salta per aria".
window.onload = async () => {
    const searchParams = new URLSearchParams(window.location.search)
    const albumId = searchParams.get('id')
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)
        const body = await response.json()

        showAlbumData(body)
    } catch (error) {
        console.log(error)
    }
}

function showAlbumData({ artist, cover_big, tracks }) {
    const albumHeader = document.querySelector("#album-header")
    const albumTracklist = document.querySelector("#album-tracklist")

    albumHeader.innerHTML =
        `
        <img class="img-fluid" src=${cover_big}>
        <h4 class="text-white">${artist.name}</h4>
        `
    albumTracklist.innerHTML = tracks.data.map(track =>
        `<li class="text-white">${track.title}</li>`).join("")
}