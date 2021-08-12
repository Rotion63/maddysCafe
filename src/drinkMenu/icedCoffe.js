function icedCoffee(){
    const icedCoffee = document.createElement('div');
    icedCoffee.classList.add('icedCoffee');

    const icedCoffeeItems = document.createElement('div');
    icedCoffeeItems.classList.add('icedCoffeeItems');

    const items = [{name:'Iced-Americano',image:'iced-americano.png',description:'Iced with americano',price:'$12.50'},
    {name:'Iced-Cappuccino',image:'iced-cappuccino.png',description:'Iced with capuccino',price:'$10.50'},
    {name:'Iced-Espresso',image:'iced-espresso.png',description:'Iced with espresso',price:'$9.50'},
    {name:'Iced-Latte',image:'iced-latte.png',description:'Iced with latte',price:'$4.50'}];

    for (let i=0; i<items.length; i++){
    const itemsList = document.createElement('div');
    itemsList.classList.add('itemsList');

        itemsList.appendChild(createImage(items[i].image));
        itemsList.appendChild(createParagraph(items[i].name,items[i].price,items[i].description));

        icedCoffeeItems.appendChild(itemsList);
    }

    icedCoffee.appendChild(icedCoffeeItems);

return icedCoffee;
}
function createImage(source){
    const image = document.createElement('img');
    image.width = 150;
    image.height = 150;
    image.classList.add('image');
    image.src = `./images/${source}`;
    image.alt = `${source} picture was here.`;

    return image;
}

function createParagraph(name,price,description) {
    const paragraph = document.createElement('div');
    paragraph.classList.add('paragraph');

    const nameAndPrice = document.createElement('div')
    nameAndPrice.classList.add('nameAndPrice');

        const itemName = document.createElement('p');
        itemName.classList.add('name');
        itemName.textContent = `${name}`;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = `${price}`; 

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('description');
    itemDescription.textContent = `${description}`

    paragraph.appendChild(nameAndPrice);
    paragraph.appendChild(itemDescription);

    nameAndPrice.appendChild(itemName);
    nameAndPrice.appendChild(itemPrice);

    return paragraph;
}

function loadIcedCoffee(){
    const mainContent = document.querySelector('.mainContent');
    mainContent.textContent = '';
    mainContent.appendChild(icedCoffee());

    return mainContent;
}

export default loadIcedCoffee;