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