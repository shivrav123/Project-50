let joke = document.querySelector(".joke");
let jokeBtn = document.querySelector(".btn");
let url = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", async() => {
    let jokeText = await getJoke();
    joke.innerHTML = jokeText;
})


async function getJoke() {
    try {
        let config = {headers: 
            {"Accept": "application/json"}
        };
        
        let jokes = await axios.get(url, config);
        console.log(jokes.data.joke);
        return jokes.data.joke;
    } catch(err) {
        console.log(err);
    }
}