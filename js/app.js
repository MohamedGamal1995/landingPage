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
const allSections =  document.querySelectorAll('section');
const fragment = document.createDocumentFragment(); //use document fragments to append the lists to it and then append the fragment to ul element
const navBar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    allSections.forEach(function(section){
        const navName = section.getAttribute('data-nav');
        const link = section.getAttribute('id');
        const list = document.createElement('li');
        list.innerHTML = `<a href="#${link}" class="menu__link">${navName}</a>`;
        fragment.appendChild(list);
    })
    navBar.appendChild(fragment);
};


// remove 'active' class from all the sections
function removeActive(sec){
    sec.classList.remove("your-active-class");
};


// Add class 'active' to section when near top of viewport
function addActive(){
    allSections.forEach(function(section){
        const viewTop = section.getBoundingClientRect().top;
        removeActive(section);
        if(viewTop>=0 && viewTop<200){
            section.classList.add("your-active-class");
        };
    });
};

// Scroll to anchor ID using scrollTO event
const lists = document.getElementsByTagName('li'); //we use getElementsByTagName instead of queryselectorAll beacuse the getElementsByTagName give us a live HTMLCollection
function scroll(){
    const listArr = Array.from(lists)
    listArr.forEach(function(list){
        list.addEventListener('click',function(event){
            event.preventDefault();
            if(list != listArr[0])
            document.getElementById(event.target.text.toLowerCase().replace(/\s/g, "")).scrollIntoView({behavior:'smooth'});
        })
    })
}
// scrolling to top
const button = document.getElementById('btn');
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        button.style.display="block";
    }else {
        button.style.display="none";
    }
}

function toTop(){
    button.addEventListener('click',function(){
        window.scrollTo({
            top: 0,
            behavior:'smooth',
        })
        })
}
// give the navbar open class if it is clicked and remove it if it is clicked again
function openNav(){
    if(navBar.className==="navbar__class"){
        navBar.className+=" open";
    }else{
        navBar.className="navbar__class";
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav();

// Scroll to section on link click
scroll();

// Set sections as active
document.addEventListener('scroll',addActive);