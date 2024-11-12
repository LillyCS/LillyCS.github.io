// let ourObject = {
//     "name": "lilly",
//     "profession": "student",
//     "age": 21,
//     "family": [{"name":"kim", "relation":"mom","age":52},{"name":"kiet", "relation":"data","age":55},{"name":"khai", "relation":"brother","age":27}]
// }

// console.log(ourObject);
const btn = document.querySelector('button');

let getJoke = fetch(
    "https://api.chucknorris.io/jokes/random");
        
// getJoke is the promise to resolve
// it by using.then() method
getJoke.then((res) =>{
    if(!res.ok) throw new Error(res.status);
    else return res.json();
})
.then(d => {
        document.getElementById("joke").innerHTML = d.value;
        console.log("Button was clicked!");
        
})
.catch(error => {
    // Handle errors
    console.log(res);
    console.error('There was a problem with the fetch operation:', error);
    alert("There was a problem with the fetch operation");
});

btn.addEventListener("click", getJoke);