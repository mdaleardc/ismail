const inputWord = document.getElementById("input-word");
const searchBtn = document.getElementById("search-btn");
const mainContainer = document.getElementById("main-container");

const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchDictionary = () => {
    const query = inputWord.value.trim().toLowerCase();
    if (!query) {
        alert("Please input a value!");
    } else {
        const url = `${apiUrl}${query}`;

        const fetchingApi = fetch(url).then(res => {
            if (!res.ok) {
                alert(`The word is not found!`);
                throw new Error("Word not found");
            }
            return res.json();
        }).then(data => {
            displayDictionary(data);

        }).catch(err => {
            if (err.message !== "Word not found") {
                alert("There was a problem fetching data!")
            }
        });
    };
    inputWord.value = "";
};

searchBtn.addEventListener("click", () => {
    inputWord.innerHTML = "";
    searchDictionary();
});

inputWord.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        inputWord.innerHTML = "";
        event.preventDefault();
        searchDictionary();
    }
});

const displayDictionary = (data) => {
    // Clear the previous content
    mainContainer.innerHTML = '';

    // Append the word information to the main container
    mainContainer.innerHTML = `
    <div>
    <h2 class="word">${data[0].word}</h2>
    <br>
    <h5>Text: ${data[0].phonetics[1] ? data[0].phonetics[1].text: ''}</h5>
    <br>
    <p><em>Part Of Speech:</em> ${data[0].meanings[0].partOfSpeech}</p><br>
    </div>`;

    // Get up to 3 definitions
    const definitions = data[0].meanings[0].definitions.slice(0,
        4);

    // Display each definition
    definitions.forEach((definition, index) => {
        const definitionElement = document.createElement("p");
        definitionElement.innerHTML = `<strong>Definition ${index + 1}:</strong> ${definition.definition}<br><br>`;
        mainContainer.appendChild(definitionElement);
    });
};