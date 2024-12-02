let proj;
fetch('../portfolio/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
        setupButtonListeners();
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
    document.getElementById("projects").innerHTML += `<a href="../../wa/portfolio/${data.projects[i].subdomain}.html">
    <div class="row project" id="${data.projects[i].subdomain}">
        <div class="projimg"><img src=${data.projects[i].mainimg}></div>
        <div class="description"><h3>${data.projects[i].name}</h3><p class="subtitle">${data.projects[i].subtitle}</p>
        <p class="abstract">${data.projects[i].abstract}</p></div></div></a>`;
    }
}

// for(b of document.querySelectorAll("#buttons button")){
//     b.addEventListener("click", e=>{
//         console.log(e.target.value);
//         sortProjects(e.target.value);
//     })
// }

function setupButtonListeners() {
    for (let b of document.querySelectorAll("#buttons button")) {
        b.addEventListener("click", e => {
            console.log(e.target.value); // Log the button's value for debugging
            sortProjects(e.target.value); // Call sortProjects with the button's value
        });
    }
}

function sortProjects(button){
    if(button == "clear"){
        for(let i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length;i++){
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