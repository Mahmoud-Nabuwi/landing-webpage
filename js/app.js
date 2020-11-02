/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBar = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// build the nav
function createNav(){
  const newFrag = document.createDocumentFragment();
  allSections.forEach((section) => {

        const createLi = document.createElement("li");
        const createa = document.createElement("a");
        createa.innerText = section.getAttribute("data-nav");
        createa.setAttribute("class", "links");

        // Scroll to anchor ID using scrollTO event

        createa.addEventListener("click", () => {
            section.scrollIntoView({behavior: "smooth"});
            });
            createLi.appendChild(createa);
            newFrag.appendChild(createLi);
          });

            navBar.appendChild(newFrag);
           };
           /**
            * End Main Functions
            * Begin Events
            *
           */

           // Add class 'active' to section when near top of viewport
           function getActiveSectionIndex() {
            let part = window.innerHeight;
            activeSectionIndex = -1;

            allSections.forEach((section, index) => {
            let bounded = section.getBoundingClientRect();
            if(Math.abs(bounded.top) < part){
            part = Math.abs(bounded.top);
            activeSectionIndex = index;
             }
            });
          return activeSectionIndex;
          }

          function setActiveSection(){
          activeSectionIndex = getActiveSectionIndex();

          if(activeSectionIndex != -1){
          let allAnchors = document.querySelectorAll(".links");

         for (let i = 0; i < allSections.length; i++) {
             if (i == activeSectionIndex){
                 allSections[i].classList.add('your-active-class');
                 allAnchors[i].classList.add('your-active-class');
             }
             else{
                 allSections[i].classList.remove('your-active-class');
                 allAnchors[i].classList.remove('your-active-class');
             }
            };
          };
         }
// Build menu
 createNav();
 // Set sections as active

 document.addEventListener('scroll', setActiveSection);
