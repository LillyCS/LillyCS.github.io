const btn = document.querySelector('button');

// Returns a random integer from min (inclusive) to max (exclusive):
    // referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

document.getElementById("button1").addEventListener("click", async function(e){
    console.log("button was clicked");

    try {
        // generate a comic id
        let random_num = getRandomInt(1,3001);

        let uri = `https://corsproxy.io/?https://xkcd.com/${random_num}/info.0.json`;
        
        const res = await fetch(uri);

        if(!res.ok){
            console.log(res);
            throw new Error(`Response status: ${res.status}`); // error.message
        }
        else {
            // get json data
            const json = await res.json(); // get the json object

            // gather comic image
            const comic_img = json.img;
            document.getElementById("image").src = comic_img;

            // gather comic title
            const title = json.title;
            document.getElementById("title").innerHTML = title;

            // gather variables to concatentate publish date of comic
            const month = json.month;
            const day = json.day;
            const year = json.year;
            const date = month+"/"+day+"/"+year;

            document.getElementById("date").innerHTML = date;
             
    }
    } catch (error){
        console.error(error.message);
        alert("There was a problem with the fetch operation.");
    }

})