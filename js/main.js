/*Start TopMenu
*******************************************************/
let topMenu = document.querySelector('header');

window.addEventListener('scroll' ,() => {
  "use strict";
    if (window.pageYOffset >= 50 && window.innerWidth >= 1199.99 ){
      topMenu.style.cssText = "transition:background-color 1s ease;z-index: 2;background-color:rgba(255, 255, 255, .8);width:100vw;position:fixed;top:0;left:0;box-shadow:10px 0 20px";
    }else {
      topMenu.style.cssText = "transition:background-color 1s ease;";
    }
});

//responsive menu icons
let menu  = document.querySelector('header .top-menu');
let div   = document.querySelector('header div');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');

div.addEventListener('click',() => {
    icon1.classList.toggle('open');
    icon2.classList.toggle('open');
    icon3.classList.toggle('hidden');
    menu.classList.toggle('slide-left');
});
/*Start banners
*******************************************************/
let banner1 = document.querySelector('.banner1');
let banner2 = document.querySelector('.banner2');

let movingSpace = window.innerWidth;

function switchBannersLeft () {
  "use strict";
  banner1.style.transform = "translate(" + -movingSpace + "px ,0px)";
  banner2.style.transform = "translate(" + -movingSpace + "px ,0px)";
  banner1.style.transition = "transform 1s linear";
  banner2.style.transition = "transform 1s linear";
}

function switchBannersRight () {
  "use strict";
  banner1.style.transform = "translate(0px ,0px)";
  banner2.style.transform = "translate(0px ,0px)";
  banner1.style.transition = "transform 1s linear";
  banner2.style.transition = "transform 1s linear";
}

setInterval(switchBannersLeft,5000);
setInterval(switchBannersRight,10000);

/*Start Scroll-Top
*******************************************************/
let scrollTopIcon = document.querySelector('.scroll-top');
window.addEventListener('load',() =>{
  "use strict";
  if(window.pageYOffset <= 445){
    scrollTopIcon.style.cssText ="opacity:0;";
  }
});
window.addEventListener('scroll' ,() => {
  "use strict";
  if(window.pageYOffset >= 445){
    scrollTopIcon.style.cssText ="opacity:1;";
    scrollTopIcon.addEventListener('click',() => {
      window.scrollTo(0,0);
    });
  }else{
    scrollTopIcon.style.cssText ="opacity:0;";
  }
});
