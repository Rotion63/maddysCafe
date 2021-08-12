function hotCoffee(){
    const hotCoffee = document.createElement('div');
    hotCoffee.classList.add('hotCoffee');

    const hotCoffeeItems = document.createElement('div');
    hotCoffeeItems.classList.add('hotCoffeeItems');

    const items = [{name:'Hot-Americano',image:'hot-americano.png',description:'Hot with americano',price:'$12.50'},
    {name:'Hot-Cappuccino',image:'hot-cappuccino.png',description:'Hot with capuccino',price:'$10.50'},
    {name:'Hot-Espresso',image:'hot-espresso.png',description:'Hot with espresso',price:'$9.50'},
    {name:'Hot-Latte',image:'hot-latte.png',description:'Hot with latte',price:'$4.50'}];

    for (let i=0; i<items.length; i++){
    const itemsList = document.createElement('div');
    itemsList.classList.add('itemsList');

        itemsList.appendChild(createImage(items[i].image));
        itemsList.appendChild(createParagraph(items[i].name,items[i].price,items[i].description));

        hotCoffeeItems.appendChild(itemsList);
    }

    hotCoffee.appendChild(hotCoffeeItems);

return hotCoffee;
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

function loadHotCoffee(){
    const mainContent = document.querySelector('.mainContent');
    mainContent.textContent = '';
    mainContent.appendChild(hotCoffee());

    return mainContent;
}

export default loadHotCoffee;