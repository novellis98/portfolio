////////////////////////
//sticky header nav when header ends
const header = document.querySelector(".header");
const navBar = document.querySelector(".header__nav");
const navBarHeight = navBar.getBoundingClientRect().height;
const fixHeader = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};
const navBarFixed = new IntersectionObserver(fixHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${navBarHeight}px`,
});
navBarFixed.observe(header);

///////////////////////////

//PROJECT CONTAINER
//request json container
const requestUrl = "./progetti.json";
const richiesta = fetch(requestUrl)
  .then((Response) => Response.json())
  .then((data) => {
    data.forEach((project) => {
      const markup = `<figure class="projects__container">
            <img
              src="${project.screenshot}"
              alt="portfolio"
              class="projects__container-image"
            />
            <a href="${project.url}" class="projects__container-link">Go to website</a>
            <figcaption class="projects__container-caption">
             ${project.nome}
            </figcaption>
          </figure>`;
      const sectionProjects = document.querySelector(".projects");
      sectionProjects.insertAdjacentHTML("beforeend", markup);
    });
    const projects = document.querySelectorAll(".projects__container");
    const links = document.querySelectorAll(".projects__container-link");
    const projectsImages = document.querySelectorAll(
      ".projects__container-image"
    );
    //hover image to show links
    projects.forEach((project, i) => {
      const link = links[i];
      const projectsImage = projectsImages[i];
      project.addEventListener("mouseenter", () => {
        link.classList.add("visible");
        projectsImage.classList.add("opacity");
      });

      project.addEventListener("mouseleave", () => {
        link.classList.remove("visible");
        projectsImage.classList.remove("opacity");
      });
    });

    /////////
    //grid column > odd item position center grid
    if (projects.length % 2 == !0) {
      projects[projects.length - 1].classList.add("odd-items");
    }
  })
  .catch((error) => {
    console.error("errore");
  });

///////////////
//REVEAL SECTION ABOUT ME when the about me's section -
//is intersecting in the viewport
const sectionAboutMe = document.querySelector(".about_me");
const revealSection = function (entries, observer) {
  sectionAboutMe.classList.add("hidden");
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    sectionAboutMe.classList.remove("hidden");
  }
};
const obsAbout = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
obsAbout.observe(sectionAboutMe);

//////////////////////////
//HEADER NAV LINKS SCROLLING TO SECTIONS
const linkHome = document.querySelector("#home");
const linkProjects = document.querySelector("#projects");
const linkAboutMe = document.querySelector("#about_me");
const linkContacts = document.querySelector("#contacts");
const sectionProjects = document.querySelector(".projects-box");
const contacts = document.querySelector(".footer__social-media");

//link home scroll
linkHome.addEventListener("click", function (e) {
  e.preventDefault();
  const headerCoords = header.getClientRects();
  window.scrollTo({
    left: headerCoords.left + window.scrollX,
    top: headerCoords.top + window.scrollY,
    behavior: "smooth",
  });
});
//link project scroll
linkProjects.addEventListener("click", function (e) {
  e.preventDefault();
  const sectionProjectsCoords = sectionProjects.getBoundingClientRect();
  window.scrollTo({
    left: sectionProjectsCoords.left + window.scrollX,
    top: sectionProjectsCoords.top + window.scrollY,
    behavior: "smooth",
  });
});
//link scroll about me

linkAboutMe.addEventListener("click", function (e) {
  e.preventDefault();
  const aboutMeCoords = sectionAboutMe.getBoundingClientRect();
  window.scrollTo({
    left: aboutMeCoords.left + window.scrollX,
    top: aboutMeCoords.top + window.scrollY,
    behavior: "smooth",
  });
});
//link scroll contacts
linkContacts.addEventListener("click", function (e) {
  e.preventDefault();
  const contactsCoords = contacts.getBoundingClientRect();
  window.scrollTo({
    left: contactsCoords.left + window.scrollX,
    top: contactsCoords.top + window.scrollY,
    behavior: "smooth",
  });
});
/////////////////////
//BUTTON SCROLL
//button to scroll to header
const btnPageUp = document.querySelector(".btn-page-up");
btnPageUp.addEventListener("click", function () {
  const headerCoords = header.getClientRects();

  window.scrollTo({
    left: headerCoords.left + window.scrollX,
    top: headerCoords.top + window.scrollY,
    behavior: "smooth",
  });
});

//////////////////
//HAMBURGER MENU
const hamburgerMenu = document.querySelector(".hamburger-menu");
const background = document.querySelector(".background");
hamburgerMenu.addEventListener("click", function () {
  navBar.classList.toggle("open");
  hamburgerMenu.classList.toggle("open");
  background.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});
/// show hamburger's icon & scroll button to header when header ends
const revealHamburgerIcon = new IntersectionObserver(
  function (entries, observe) {
    const [entry] = entries;
    if (!navBar.classList.contains("open")) {
      //do this things only when the navBar is closed
      if (!entry.isIntersecting) {
        hamburgerMenu.style.display = "flex";
        background.style.display = "block";
        btnPageUp.style.display = "block";
      } else {
        hamburgerMenu.style.display = "none";
        background.style.display = "none";
        btnPageUp.style.display = "none";
      }
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
revealHamburgerIcon.observe(header);
