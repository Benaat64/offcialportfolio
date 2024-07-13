const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*=============== SHOW MENU ===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')

}
navLinks.forEach(navLink => navLink.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header= document.getElementById("header")
    if(this.scrollY >= 80 ) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")    
}
window.addEventListener('scroll', scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/
/*scroll reveal */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.skills')
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
    let scrollY = window.scrollY;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId= current.getAttribute("id")
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer= document.querySelector('.portfolio-filter-inner'),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item")
      totalPortfolioItem = portfolioItems.length;

      for(let i=0; i<totalFilterBtn; i++){
        filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove('active')
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            for( let k=0; k < totalPortfolioItem; k++ ){
                
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.add('hide');
                    portfolioItems[k].classList.remove('show');
                }
                if(filterValue === "all"){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
            }
        })
      }
/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span')
const colorPalette = document.querySelectorAll(".choose-color span");
const root = document.querySelector(":root");
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')


const openThemeModal = () =>{
    themeModal.style.display ='grid';
}
const closeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

theme.addEventListener("click",openThemeModal)
themeModal.addEventListener("click",closeModal)
/*===== FONTS =====*/
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active")
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '12px'
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px'
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
        }else if(size.classList.contains('font-size-4')){
            fontSize = '18px'
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize
    })
})
/*===== PRIMARY COLORS =====*/

//remove active class 
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })
}
colorPalette.forEach(color => { 
    color.addEventListener('click',() => { 
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252
        }else if(color.classList.contains('color-2')){
            primaryHue = 52
        }else if(color.classList.contains('color-3')){
            primaryHue = 352
        }else if(color.classList.contains('color-4')){
            primaryHue = 152
        }else if(color.classList.contains('color-5')){
            primaryHue = 202
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
})
/*===== THEME BACKGROUNDS =====*/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change bg color
const changeExpress = () => {
    const express = document.querySelector('.express');
    express.src = 'assets/img/info-expressdark.svg';
}
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)

}
bg1.addEventListener('click',() => {
    bg1.classList.add('active')
    bg2.classList.remove('active')
    bg3.classList.remove('active')

    window.location.reload()
})

bg2.addEventListener('click',() => { 
    darkColorLightness = "95%";
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    bg2.classList.add('active')
    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeExpress()
    changeBG();
})



bg3.addEventListener('click',() => { 
    darkColorLightness = "95%";
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    bg3.classList.add('active')
    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeExpress()
    changeBG();
})


// CONTACT INPUT
let inputs = document.querySelectorAll('.contact-input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.value) {
      input.classList.add('has-value');
    } else {
      input.classList.remove('has-value');
    }
  });
});

window.onload = function() {
    document.querySelector('.contact-form').reset();
}