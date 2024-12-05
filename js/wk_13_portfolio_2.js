let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

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

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `<h1>${project.name}</h1>`;

    images = `${project.images}`;
    displayImage = `${project.displayimg}`;

    document.querySelector(".full-img").innerHTML += `<img class="displayed-img" src=${project.displayimg}></img>`;
    console.log(images);
    /* Looping through images */
    // for (const image of images) {
    //     const newImage = document.createElement('img');
    //     newImage.setAttribute('src', image);
    //     // newImage.setAttribute('alt', altText[image]);
    //     thumbBar.appendChild(newImage);
    //     
    //     /* referenced https://stackoverflow.com/questions/38060349/replace-image-by-javascript */
    //     newImage.addEventListener('click', () => {
    //         var imgReplace = displayedImage;
    //         imgReplace.src = image;
    //         // imgReplace.alt = altText[image];
    //     });
    // };
}