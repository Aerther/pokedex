const button = document.getElementById("button");
const typesUl = document.getElementById("types");
const pokemonDiv = document.getElementById("pokemon");
var jsonData;

document.addEventListener("DOMContentLoaded", () => {button.click()});

button.addEventListener("click", getData);

async function getData() {
    typesUl.textContent = "";

    pokemonIndex = Math.floor(Math.random() * 1025)+1;

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonIndex);
        jsonData = await response.json();
    } catch (error) {
        console.log(error)
    }

    showData();
}

function showData() {
    document.getElementById("name").textContent = jsonData.name.toUpperCase();
    document.getElementById("image").setAttribute("src", jsonData.sprites.front_default);

    types = jsonData.types;

    types.forEach(e => {
        typeLi = document.createElement("li");
        typeLi.textContent = e.type.name;

        typesUl.appendChild(typeLi);
    });

    pokemonDiv.style.setProperty("--bg-url", `url(backgrounds/${types[0].type.name}.png)`);
}