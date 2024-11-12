const btn = document.querySelector('button');

const getJoke = async () => {
    console.log("button was clicked");
    // check status of response
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');

        // check the status of the response
        if(!res.ok){
            console.log(res);
            throw new Error(`Response status: ${res.status}`); // error.message
        }
        else {
            // get json data
            const json = await res.json(); // get the json object
            console.log(json.value);
            displayRes(json);
        }
    } catch (error){
        console.error(error.message);
        alert("There was a problem with the fetch operation.");
    }
}

const displayRes = j => {
    document.getElementById("joke").innerHTML = j.value;
}

getJoke();

btn.addEventListener("click", getJoke);