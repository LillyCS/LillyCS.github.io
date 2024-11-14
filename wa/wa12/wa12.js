const btn = document.querySelector('button');

// Returns a random integer from min (inclusive) to max (exclusive):
    // referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

document.getElementById("button1").addEventListener("click", function(e){
    console.log("button was clicked");

    try {
        // generate a comic id
        let random_num = getRandomInt(1,3001);

        let uri = `https://corsproxy.io/?https://xkcd.com/${random_num}/info.0.json`;
        
    } catch (error){
        console.error(error.message);
        alert("There was a problem with the fetch operation.");
    }
    // change attributes of element
    // document.getElementById("image").src = "../../class_notes/images/unicorns/unicorn (3).png"
})