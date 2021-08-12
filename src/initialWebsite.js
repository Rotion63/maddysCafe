import loadSpecialItem from "./specialItem";
import loadDrinkMenu from "./drinkMenu";

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    header.appendChild(createNav());
    header.appendChild(createMain());

    return header;
}
function createNav(){
const nav = document.createElement('div');
nav.classList.add('nav');

const navList = document.createElement('div');
navList.classList.add('navList');

const navHeader = document.createElement('button');
navHeader.classList.add('navHeader');
navHeader.textContent = 'Maddys Cafe'

const navItems = document.createElement('div');
navItems.classList.add('navItems');

const drinkMenu = document.createElement('button');
drinkMenu.classList.add('navList');
drinkMenu.textContent = 'Drink Menu';

    drinkMenu.addEventListener('click',(e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(drinkMenu);
        loadDrinkMenu();
    })

const aboutUs = document.createElement('button');
aboutUs.classList.add('navList');
aboutUs.textContent = 'About Us';

    // aboutUs.addEventListener('click',(e)=>{
    //     if(e.target.classList.contains('active')) return;
    //     setActiveButton(aboutUs);
    //     loadAboutUs();
    // })

const specialItem = document.createElement('button');
specialItem.classList.add('navList');
specialItem.textContent = 'Special Items';

    specialItem.addEventListener('click',(e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(specialItem);
        loadSpecialItem();
    })

const contact = document.createElement('button');
contact.classList.add('navList');
contact.textContent = 'Contact';

    // contact.addEventListener('click',(e)=>{
    //     if(e.target.classList.contains('active')) return;
    //     setActiveButton(contact);
    //     loadContact();
    // })

nav.appendChild(navList);

navList.appendChild(navHeader)
navList.appendChild(navItems);

navItems.appendChild(drinkMenu);
navItems.appendChild(aboutUs);
navItems.appendChild(specialItem);
navItems.appendChild(contact);

return nav;
}
function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');

return main;
}

function setActiveButton(button){
    const navList = document.querySelectorAll('.navList');
  
    navList.forEach(button => {
      if(button !== this){
        button.classList.remove('active');
      }
    });
    button.classList.add('active');
  }

function createFooter(){
const footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = 'This is footer.';

return footer;
}
function createImage(){

}
function setActive(button){
    
}

function loadInitialWebsite(){
    const content = document.querySelector('.content');
    content.classList.add('content');

    content.appendChild(createHeader());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.navList'));
    loadDrinkMenu();
}
export default loadInitialWebsite; 