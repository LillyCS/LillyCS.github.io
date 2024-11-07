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
    /* element.addEventListener(event, function, useCapture); */

    /* referenced https://stackoverflow.com/questions/38060349/replace-image-by-javascript */
    newImage.addEventListener('click', () => {
        var imgReplace = displayedImage;
        imgReplace.src = image;
        imgReplace.alt = altText[image];
    });
};


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function (e) {
    /* referenced https://www.geeksforgeeks.org/how-to-darken-an-image-using-css/ */
    const text = btn.textContent;
    if (text === "Darken"){
        btn.textContent = "Lighten"; 
        displayedImage.style.filter = "brightness(50%)";
    }
    else {
         btn.textContent = "Darken"; 
         displayedImage.style.filter = "brightness(100%)";
    }
  
});