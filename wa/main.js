const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize'); // button
const story = document.querySelector('.story'); // to copy story

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// takes in an array and returns one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// add a click event listener so when button is clicked, result() is run
randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem).replace(':insertx:', xItem);

    if(customName.value !== '') {

        const name = customName.value;
        newStory = newStory.replace('Bob', name)

    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300*0.0714286) + ' stone';
        const temperature =  Math.round((94-32) / (9/5)) + ' centigrade';

        // console.log(weight);
        newStory = newStory.replace('94 fahrenheit',temperature).replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}