let sections = document.querySelectorAll('section');

let navbar = document.querySelector('#navbar__list');

let main = document.querySelector('main');

//excuted when document is scrolled
function scrolled() {
    //iterating over the sections h2 element to see if any of them in the view
    for (const [i,section] of sections.entries()) {
        if(isInView(section)) {
            section.className = 'your-active-class';
            navbar.querySelectorAll('li')[i].className = 'menu__link active';
        }
        else {
            section.className = '';
            navbar.querySelectorAll('li')[i].className = 'menu__link';
        }
    }
    
    //hide navigation bar when scrolling
    navbar.parentElement.parentElement.style.display = 'none';
    //show navigation bar when stop scrolling
    setTimeout(function () {
        navbar.parentElement.parentElement.style.display = 'block';
    }, 1000)

}


document.addEventListener('scroll', scrolled)

//check if element in the view of user
function isInView(element) {
    //get the position of element relative to the view
    let bounding = element.getBoundingClientRect();

    if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight /2) {
        return true;
    }
    else
        return false;
}

//add elements to navigation each element is the Section name and link to it
for (const section of sections) {
    li = document.createElement('li');    
    li.className = 'menu__link';

    //Make link name the same as section header
    li.textContent = section.querySelector('h2').textContent;
    
    navbar.appendChild(li);
}

//scroll to section when clicked
navbar.addEventListener('click', function(e) {
   if(e.target.tagName == 'LI'){
       sections[Array.prototype.indexOf.call(e.target.parentElement.childNodes, e.target)].scrollIntoView({behavior: "smooth"});
   } 
});