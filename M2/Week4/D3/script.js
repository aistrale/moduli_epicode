function searchJob(title, location) {
    title = title.toLowerCase();
    location = location.toLowerCase();

    const result = [];
    jobs.forEach(job => {
        const jobTitle = job.title.toLowerCase();
        const jobLocation = job.location.toLowerCase();
        if (jobTitle.includes(title) && jobLocation.includes(location)) {
            result.push(job)
        }
    });
    return {
        count: result.length,
        result
    }
}

// searchJob()
// console.log(searchJob("marketing", "berli"))

function search() {
    const title = document.getElementById("searchJob").value;
    const location = document.getElementById("searchPlace").value;

    const searchResult = searchJob(title, location)
    console.log(searchResult)
    return searchResult
}

const form = document.getElementById("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // search()
    showResults(search())
})


function showResults(searchResults){
    const resultsContainer = document.createElement("div");
    const resultsList = document.createElement("ul");
    searchResults.result.forEach(searchItem => {
        const itemList = document.createElement("li");
        itemList.innerHTML = `title ${searchItem.title}, location ${searchItem.location}`;
        resultsList.append(itemList);
    }
    )
    resultsContainer.append(resultsList);
    document.body.append(resultsContainer);
}



// {
//     "count": 1,
//     "result": [
//       {
//         "title": "Hands-On QA Leader",
//         "location": "IL, Tel Aviv, Israel"
//       }
//     ]
//   }