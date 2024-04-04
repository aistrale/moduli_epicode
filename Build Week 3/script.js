const ENDPOINT = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const search = async () => {
    const inputValue = document.querySelector("#searchField").value;
    console.log(inputValue);
     
    try {
        const response = await fetch(ENDPOINT + inputValue);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}