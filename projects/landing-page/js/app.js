//store all sections h2 elements
let sections = document.querySelectorAll('section div h2');
//store the list of sections
let navbar = document.querySelector('#navbar__list');
//store main to add events to scroll
let main = document.querySelector('main');

//excuted when document is scrolled
function scrolled() {
    //iterating over the sections h2 element to see if any of them in the view
    for (const section of sections) {
        if(isInView(section)) {
            //change class to make the current viewed section seem different
            section.parentElement.parentElement.className = 'your-active-class';
        }
        else {
            //change class to defaul when section is not in view
            section.parentElement.parentElement.className = '';
        }
    }
    //hide navigation bar when scrolling
    navbar.parentElement.parentElement.style.display = 'none';
    //show navigation bar when stop scrolling
    setTimeout(function () {
        navbar.parentElement.parentElement.style.display = 'block';
    }, 1000)

}

//event listener for scrolling
document.addEventListener('scroll', scrolled)

//check if element in the view of user
function isInView(element) {
    //get the position of element relative to the view
    let bounding = element.getBoundingClientRect();

    //if the element in the view
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        return true;
    }
    else
        return false;
}
//add elements to navigation each element is the Section name and link to it
for (const section of sections) {
    li = document.createElement('li');
    a = document.createElement('a');
    
    a.className = 'menu__link';
    //link the element to section
    a.href = '#' + section.parentElement.parentElement.id;
    //Make link name the same as section header
    a.textContent = section.textContent;
    
    li.appendChild(a);
    navbar.appendChild(li);
}