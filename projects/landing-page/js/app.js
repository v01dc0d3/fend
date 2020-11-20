let sections = document.querySelectorAll('section div h2');
let navbar = document.querySelector('#navbar__list');
let main = document.querySelector('main');

function activeClass(e){
    if(e.target.tagName == 'SECTION')
        e.target.className = 'your-active-class';
}

function noClass(e){
    if(e.target.tagName == 'SECTION' )
        e.target.className = '';
}

function scrolled() {
    for (const section of sections) {
        if(isInView(section)) {
            section.parentElement.parentElement.className = 'your-active-class';
        }
        else {
            section.parentElement.parentElement.className = '';
        }
    }
    navbar.parentElement.parentElement.style.display = 'none';
    setTimeout(function () {
        navbar.parentElement.parentElement.style.display = 'block';
    }, 1000)

}

document.addEventListener('scroll', scrolled)
// main.addEventListener('mouseover', activeClass);
// main.addEventListener('mouseout', noClass);

function isInView(element) {
    let bounding = element.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        return true;
    }
    else
        return false;
}

for (const section of sections) {
    li = document.createElement('li');
    a = document.createElement('a');
    
    a.className = 'menu__link';
    a.href = '#' + section.parentElement.parentElement.id;
    a.textContent = section.textContent;
    
    li.appendChild(a);
    navbar.appendChild(li);
    
    
    
}