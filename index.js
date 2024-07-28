require("./index.css");
var $kvJsw$swchelperscjs_sliced_to_arraycjs = require("@swc/helpers/cjs/_sliced_to_array.cjs");



var $a658117dd78c2dc3$var$header = document.querySelector(".header");
var $a658117dd78c2dc3$var$navBar = document.querySelector(".header__nav");
var $a658117dd78c2dc3$var$navBarLinks = document.querySelectorAll(".header__menu-links");
var $a658117dd78c2dc3$var$navBarHeight = $a658117dd78c2dc3$var$navBar.getBoundingClientRect().height;
var $a658117dd78c2dc3$var$linkHome = document.querySelector("#home");
var $a658117dd78c2dc3$var$linkProjects = document.querySelector("#projects");
var $a658117dd78c2dc3$var$linkAboutMe = document.querySelector("#about_me");
var $a658117dd78c2dc3$var$linkContacts = document.querySelector("#contacts");
var $a658117dd78c2dc3$var$sectionProjects = document.querySelector(".projects-box");
var $a658117dd78c2dc3$var$contacts = document.querySelector(".footer__social-media");
var $a658117dd78c2dc3$var$sectionAboutMe = document.querySelector(".about_me");
var $a658117dd78c2dc3$var$btnPageUp = document.querySelector(".btn-page-up");
var $a658117dd78c2dc3$var$hamburgerMenu = document.querySelector(".hamburger-menu");
//sticky header nav when header ends
var $a658117dd78c2dc3$var$fixHeader = function fixHeader(entries, observer) {
    var _entries = (0, $kvJsw$swchelperscjs_sliced_to_arraycjs._)(entries, 1), entry = _entries[0];
    if (!entry.isIntersecting) $a658117dd78c2dc3$var$navBar.classList.add("sticky");
    else $a658117dd78c2dc3$var$navBar.classList.remove("sticky");
};
var $a658117dd78c2dc3$var$navBarFixed = new IntersectionObserver($a658117dd78c2dc3$var$fixHeader, {
    root: null,
    threshold: 0
});
$a658117dd78c2dc3$var$navBarFixed.observe($a658117dd78c2dc3$var$header);
///////////////////////////
//PROJECT CONTAINER
//request json container
var $a658117dd78c2dc3$var$richiesta = fetch("https://db-portfolio-rj6m.onrender.com/projects").then(function(response) {
    return response.json();
}).then(function(project) {
    project.forEach(function(item) {
        var markup = '<figure class="projects__container">\n            <img\n              src="'.concat(item.screenshot, '"\n              alt="portfolio"\n              class="projects__container-image"\n            />\n            <a href="').concat(item.url, '" class="projects__container-link">Go to website</a>\n            <figcaption class="projects__container-caption">\n             ').concat(item.nome, "\n            </figcaption>\n          </figure>");
        var sectionProjects = document.querySelector(".projects");
        sectionProjects.insertAdjacentHTML("beforeend", markup);
    });
    var projects = document.querySelectorAll(".projects__container");
    var links = document.querySelectorAll(".projects__container-link");
    var projectsImages = document.querySelectorAll(".projects__container-image");
    //hover image to show links
    projects.forEach(function(project, i) {
        var link = links[i];
        var projectsImage = projectsImages[i];
        project.addEventListener("mouseenter", function() {
            link.classList.add("visible");
            projectsImage.classList.add("opacity");
        });
        project.addEventListener("mouseleave", function() {
            link.classList.remove("visible");
            projectsImage.classList.remove("opacity");
        });
    });
    /////////
    //grid column > odd item position center grid
    if (projects.length % 2 == !0) projects[projects.length - 1].classList.add("odd-items");
}).catch(function(error) {
    console.error("errore");
});
///////////////
//REVEAL SECTION ABOUT ME when the about me's section -
//is intersecting in the viewport
var $a658117dd78c2dc3$var$revealSection = function revealSection(entries, observer) {
    $a658117dd78c2dc3$var$sectionAboutMe.classList.add("hidden");
    var _entries = (0, $kvJsw$swchelperscjs_sliced_to_arraycjs._)(entries, 1), entry = _entries[0];
    if (!entry.isIntersecting) return;
    if (entry.isIntersecting) $a658117dd78c2dc3$var$sectionAboutMe.classList.remove("hidden");
};
var $a658117dd78c2dc3$var$obsAbout = new IntersectionObserver($a658117dd78c2dc3$var$revealSection, {
    root: null,
    threshold: 0.1
});
$a658117dd78c2dc3$var$obsAbout.observe($a658117dd78c2dc3$var$sectionAboutMe);
//////////////////////////
//HEADER NAV LINKS SCROLLING TO SECTIONS
//link home scroll
$a658117dd78c2dc3$var$linkHome.addEventListener("click", function(e) {
    e.preventDefault();
    var headerCoords = $a658117dd78c2dc3$var$header.getClientRects();
    window.scrollTo({
        left: headerCoords.left + window.scrollX,
        top: headerCoords.top + window.scrollY,
        behavior: "smooth"
    });
});
//link project scroll
$a658117dd78c2dc3$var$linkProjects.addEventListener("click", function(e) {
    e.preventDefault();
    var sectionProjectsCoords = $a658117dd78c2dc3$var$sectionProjects.getBoundingClientRect();
    window.scrollTo({
        left: sectionProjectsCoords.left + window.scrollX,
        top: sectionProjectsCoords.top + window.scrollY,
        behavior: "smooth"
    });
});
//link scroll about me
$a658117dd78c2dc3$var$linkAboutMe.addEventListener("click", function(e) {
    e.preventDefault();
    var aboutMeCoords = $a658117dd78c2dc3$var$sectionAboutMe.getBoundingClientRect();
    window.scrollTo({
        left: aboutMeCoords.left + window.scrollX,
        top: aboutMeCoords.top + window.scrollY,
        behavior: "smooth"
    });
});
//link scroll contacts
$a658117dd78c2dc3$var$linkContacts.addEventListener("click", function(e) {
    e.preventDefault();
    var contactsCoords = $a658117dd78c2dc3$var$contacts.getBoundingClientRect();
    window.scrollTo({
        left: contactsCoords.left + window.scrollX,
        top: contactsCoords.top + window.scrollY,
        behavior: "smooth"
    });
});
/////////////////////
//BUTTON SCROLL
//button to scroll to header
$a658117dd78c2dc3$var$btnPageUp.addEventListener("click", function() {
    var headerCoords = $a658117dd78c2dc3$var$header.getClientRects();
    window.scrollTo({
        left: headerCoords.left + window.scrollX,
        top: headerCoords.top + window.scrollY,
        behavior: "smooth"
    });
});
//////////////////
/// show scroll button to header when header ends
var $a658117dd78c2dc3$var$revealBtnPageUp = new IntersectionObserver(function(entries, observe) {
    var _entries = (0, $kvJsw$swchelperscjs_sliced_to_arraycjs._)(entries, 1), entry = _entries[0];
    if (!$a658117dd78c2dc3$var$navBar.classList.contains("open")) {
        //do this things only when the navBar is closed
        if (!entry.isIntersecting) $a658117dd78c2dc3$var$btnPageUp.style.display = "block";
        else $a658117dd78c2dc3$var$btnPageUp.style.display = "none";
    }
}, {
    root: null,
    threshold: 0
});
$a658117dd78c2dc3$var$revealBtnPageUp.observe($a658117dd78c2dc3$var$header);
///////////////////////
//TOGGLE MENU HAMBURGER
//
var $a658117dd78c2dc3$var$toggleMenu = function toggleMenu() {
    $a658117dd78c2dc3$var$hamburgerMenu.classList.toggle("open");
    $a658117dd78c2dc3$var$navBar.classList.toggle("open");
};
//link click, open menu, set no scroll
$a658117dd78c2dc3$var$navBarLinks.forEach(function(link) {
    return link.addEventListener("click", function() {
        $a658117dd78c2dc3$var$toggleMenu(), document.body.classList.remove("no-scroll");
    });
});
// no scroll, open menu
$a658117dd78c2dc3$var$hamburgerMenu.addEventListener("click", function() {
    $a658117dd78c2dc3$var$toggleMenu(), document.body.classList.toggle("no-scroll");
});




//# sourceMappingURL=index.js.map
