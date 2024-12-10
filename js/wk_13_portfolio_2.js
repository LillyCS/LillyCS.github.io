// get subdomain from the url string
let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

// fetch data from the projects json file
fetch('../portfolio/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj = projects;
        findProjectInJSON(projects);
        // parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

// function to locate the project in the JSON file
function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

// function to add HTML to each respective project page
function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;
    document.getElementById("desc-section").innerHTML += "<div id='description'></div>";

    // Add project description
    for(i=0;i<project.description.length;i++){
        document.getElementById("description").innerHTML += '<p class="description">' + project.description[i] + '</p>';
    }

    // Add collaborators
    document.getElementById("project").innerHTML += '<div id="collabs"></div>';
    if(project.collaborators.length==0){ // skip if no collaborators
        skip;
    }else{
        document.getElementById("collabs").innerHTML += '<h3 class="collabs">Collaborators: &nbsp;</h3>'
    }

    /* Looping through collaborators */
    for(i=0;i<(project.collaborators.length);i++){
        if(i==(project.collaborators.length-1)){
          document.getElementById("collabs").innerHTML += '<h3 class="collabs">' + project.collaborators[i] + '</h3>';
    
        }else{
          document.getElementById("collabs").innerHTML += '<h3 class="collabs">' + project.collaborators[i] + ',&nbsp;</h3>';
        }
    }

    // Add image carousel
    images = `${project.images}`;
    // display the first image in the array as the main image
    document.querySelector(".full-img").innerHTML += `<img class="displayed-img" src=${project.displayimg} alt=${project.alts[0]}></img>`;
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    /* Looping through images */
    for (let i=0; i<(project.images.length); i++){  
        const image = project.images[i];
        const alt_text = project.alts[i];
        // create a new image element
        const newImage = document.createElement('img');
        newImage.setAttribute('src', image);
        newImage.setAttribute('alt', alt_text);
        // add to the thumbnail bar
        thumbBar.appendChild(newImage);
        
        /* referenced https://stackoverflow.com/questions/38060349/replace-image-by-javascript */
        newImage.addEventListener('click', () => {
            // if an image is clicked, display it as the main image by replacing the src and alt attributes
            displayedImage.src = image;
            displayedImage.alt = alt_text;
        });
    };
}