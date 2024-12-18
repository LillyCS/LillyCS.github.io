let proj;
// fetch data from the projects json file
fetch('../portfolio/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
        setupButtonListeners();
    }).catch(err =>{
        // error handling
        console.log(`error ${err}`);
    })

// function to populate project cards onto the webpage
function parseData(data){
    /* Looping through each project in the JSON file */
    for(let i=0; i<data.projects.length; i++){
        // each project card is a link to the respective project page
        document.getElementById("projects").innerHTML += `<a href="../../wa/portfolio/${data.projects[i].subdomain}.html">
        <div class="row project" id="${data.projects[i].subdomain}">
            <div class="projimg"><img src=${data.projects[i].mainimg}></div>
            <div class="description"><h3>${data.projects[i].name}</h3><p class="subtitle">${data.projects[i].subtitle}</p>
            <p class="abstract">${data.projects[i].abstract}</p></div></div></a>`;
    }
}

// function to set up event listeners to all the buttons
function setupButtonListeners() {
    // loop through all the buttons
    for (b of document.querySelectorAll("#buttons button")) {
        b.addEventListener("click", e => {
            // value is the name of the sorting category
            console.log(e.target.value);
            sortProjects(e.target.value);
        });
    }
}

// function to sort the projects based on the button click
function sortProjects(button){
    if(button == "clear"){
        // display all projects
        for(let i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length;i++){
            // check if the project category includes the button value
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }else{
        console.log("error, button value is undefined");
    }

}