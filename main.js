// Header

// Links Menu
let bars = document.querySelector(".link-menu");
let links = document.querySelector(".links");
let closeButton = document.querySelector(".close");

//show Menu
bars.onclick = function() {
    links.classList.add("show");
    bars.classList.remove("show");
}

//close Menu
closeButton.onclick = function() {
    links.classList.remove("show");
    bars.classList.add("show");
}

// Close Menu When Clicking Outside
document.addEventListener("click", (e) => {
    if(!links.contains(e.target) && !bars.contains(e.target)) {
        links.classList.remove("show");
        bars.classList.add("show");
    }
});
// Close On Scroll 
document.onscroll = function() {
    links.classList.remove("show");
    bars.classList.add("show");
}

// Services

//Getting the icons
let icons = document.querySelectorAll(".services-icon")

document.addEventListener("click", function(e) {
    icons.forEach((icon) => {
        if(icon.contains(e.target)) {
            icons.forEach(icon => icon.classList.remove("active"));
            icon.classList.add("active");
        }
    })
})

// Stories

// Get Content
let projects = document.querySelectorAll(".project");

// Put active class on clicked box then
// start a fucntion to show data
document.addEventListener("click", function(e) {
    projects.forEach((project) => {
        if(project.contains(e.target)) {
            projects.forEach(project => project.classList.remove("active"));
            project.classList.add("active");
            showBox(project);
        }
    })
});

// Put the data in the show box
function showBox(project) {
    let showBox = document.querySelector(".show-box");
    showBox.innerHTML = "";
    showBox.innerHTML = project.innerHTML;
}