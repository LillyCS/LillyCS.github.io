const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
images = ['images/vietnamese_food.jpg','images/burrata.jpg','images/burger_fries.jpg','images/dessert.jpg','images/hotpot.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'images/vietnamese_food.jpg':'bowl of vietnamese noodles',
    'images/burrata.jpg':'plate of burrata with argula and pesto', 
    'images/burger_fries.jpg':'plate with cheeseburger and fries',
    'images/dessert.jpg':'mochi and ice cream sundae', 
    'images/hotpot.jpg':'spicy ramen hotpot'
};

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
}


/* Wiring up the Darken/Lighten button */
