const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize'); // button
const story = document.querySelector('.story'); // to copy story

var storyText = "One day, Bob decided to take a trip to :store: to pick up some much needed essentials. As soon as they walked in, they were captivated by a display of :holiday: decorations. They couldn't resist grabbing a :snack: and browsing the :section: section, where they found a :item: on sale. Feeling optimistic, Bob added it to their cart and made their way to checkout. But on the way, they accidentally knocked over the display of :display:, causing everyone to point and laugh at them. They hurried to the register, hoping the cashier wouldn't notice the mess they had left behind."
;
var store = ["Target", "Walmart", "Home Depot"];
var holiday = ["Christmas", "Halloween", "Easter"];
var snack = ["latte", "Snickers", "hotdog", "bag of chips"];
var section = ["beauty", "hardware", "cleaning", "food", "toys"];
var thing = ["lipstick", "pet toy", "phone case", "bread loaf", "broom", "screwdriver"]
var display = ["soda cans", "candy bars", "hammers", "pillows", "coffee mugs"];

// takes in an array and returns one of the items stored inside the array at random
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// add a click event listener so when button is clicked, result() is run
randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(store);
    var yItem = randomValueFromArray(holiday);
    var zItem = randomValueFromArray(snack);
    var aItem = randomValueFromArray(section);
    var bItem = randomValueFromArray(display);
    var cItem = randomValueFromArray(thing);

    newStory = newStory.replaceAll(':store:', xItem).replaceAll(':holiday:', yItem).replaceAll(':snack:', zItem).replaceAll(':section:', aItem).replaceAll(':display:', bItem).replaceAll(':item:', cItem);

    if(customName.value !== '') {

        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name)

    }

    if(document.getElementById("she/her").checked) {
        const upper_pronoun = "She";
        const lower_pronoun = "she";
        newStory = newStory.replaceAll('They',upper_pronoun);
        newStory = newStory.replaceAll('they',lower_pronoun);
    }

    if(document.getElementById("he/him").checked) {
        const upper_pronoun = "He";
        const lower_pronoun = "he";
        newStory = newStory.replaceAll('They',upper_pronoun);
        newStory = newStory.replaceAll('they',lower_pronoun);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}