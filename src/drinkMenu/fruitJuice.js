function fruitJuice(){
    const fruitJuice = document.createElement('div');
    fruitJuice.classList.add('fruitJuice');

    const fruitJuiceItems = document.createElement('div');
    fruitJuiceItems.classList.add('fruitJuiceItems');

    const items = [{name:'Strawberry Smoothie',image:'smoothie-1.png',description:'Very tasty strawberry smoothie.',price:'$12.50'},
    {name:'Redberry Smoothie',image:'smoothie-2.png',description:'Very tasty redberry smoothie',price:'$10.50'},
    {name:'Pinapple Smoothie',image:'smoothie-3.png',description:'Smoothie with pinapple flavour',price:'$9.50'},
    {name:'Spinach Smoothie',image:'smoothie-4.png',description:'Very healthy spinach juice.',price:'$4.50'}];

    for (let i=0; i<items.length; i++){
    const itemsList = document.createElement('div');
    itemsList.classList.add('itemsList');

        itemsList.appendChild(createImage(items[i].image));
        itemsList.appendChild(createParagraph(items[i].name,items[i].price,items[i].description));

        fruitJuiceItems.appendChild(itemsList);
    }

    fruitJuice.appendChild(fruitJuiceItems);

return fruitJuice;
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

function loadFruitJuice(){
    const mainContent = document.querySelector('.mainContent');
    mainContent.textContent = '';
    mainContent.appendChild(fruitJuice());

    return mainContent;
}

export default loadFruitJuice;