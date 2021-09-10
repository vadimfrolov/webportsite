import "./styles.css"
import laptop from '../public/laptop.png';

const mainNavLinks = document.querySelectorAll("nav a");
// const mainSections = document.querySelectorAll("main section");

// let lastId;
// let cur = [];
// eslint-disable-next-line
window.addEventListener("scroll", event => {
  const fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    const section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

function component() {
  const element = document.createElement('img');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('laptop-img');

 // Add the image to our existing div.
 const myIcon = new Image();
 myIcon.src = laptop;

 element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());