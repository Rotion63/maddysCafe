import loadIcedCoffee from "./drinkMenu/icedCoffe";
import loadHotCoffee from "./drinkMenu/hotCoffe";
import loadFruitJuice from "./drinkMenu/fruitJuice";

function drinkMenu(){
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('drinkMenu');


    const mainNav = document.createElement('div');
    mainNav.classList.add('mainNav');

    const icedCoffee = document.createElement('button');
    icedCoffee.classList.add('mainNavList');
    icedCoffee.textContent = 'Iced Coffee'

        icedCoffee.addEventListener('click',(e)=>{
            if(e.target.classList.contains('.mainNavList')) return;
            setActiveButton(icedCoffee);
            loadIcedCoffee();
        })

    const hotCoffee = document.createElement('button');
    hotCoffee.classList.add('mainNavList');
    hotCoffee.textContent = 'Hot Coffee';

        hotCoffee.addEventListener('click',(e)=>{
            if(e.target.classList.contains('.mainNavList')) return;
            setActiveButton(hotCoffee);
            loadHotCoffee();
        })

    const fruitJuice = document.createElement('button')
    fruitJuice.classList.add('mainNavList');
    fruitJuice.textContent = 'Fruit Juice';
    
        fruitJuice.addEventListener('click',(e)=>{
            if(e.target.classList.contains('.mainNavList')) return;
            setActiveButton(fruitJuice);
            loadFruitJuice();
        })

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    drinkMenu.appendChild(mainNav);
    drinkMenu.appendChild(mainContent);

    mainNav.appendChild(icedCoffee);
    mainNav.appendChild(hotCoffee);
    mainNav.appendChild(fruitJuice);

    return drinkMenu;
}

function setActiveButton(button){
    const navList = document.querySelectorAll('.mainNavList');
  
    navList.forEach(button => {
      if(button !== this){
        button.classList.remove('active');
      }
    });
    button.classList.add('active');
  }

function loadDrinkMenu(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(drinkMenu());

    setActiveButton(document.querySelector('.mainNavList'));
    loadIcedCoffee();
}
export default loadDrinkMenu;