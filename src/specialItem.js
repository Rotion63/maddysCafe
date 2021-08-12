function specialItem(){
    const specialItem = document.createElement('div');
    specialItem.classList.add('specialItem');

    const specialList = document.createElement('div');
    specialList.classList.add('specialList');

    const items = [
    {name:'Special One',image:'special-01.jpg',description:'Very tasty special items',price:'$12.50'},
    {name:'Special Two',image:'special-02.jpg',description:'Very tasty special items',price:'$10.50'},
    {name:'Special Three',image:'special-03.jpg',description:'Very tasty special items',price:'$9.50'},
    {name:'Special Four',image:'special-04.jpg',description:'Very tasty special items',price:'$4.50'},
    {name:'Special Five',image:'special-05.jpg',description:'Very tasty special items',price:'$4.50'},
    {name:'Special Six',image:'special-06.jpg',description:'Very tasty special items',price:'$4.50'},
];

for (let i=0; i<items.length; i++){
    const itemsList = document.createElement('div');
    itemsList.classList.add('itemsList');

        itemsList.appendChild(createImage(items[i].image));
        itemsList.appendChild(createParagraph(items[i].name,items[i].description));

        specialList.appendChild(itemsList);
    }

    specialItem.appendChild(specialList);
    return specialItem;
}

function createImage(source){
    const image = document.createElement('img');
    image.width = 400;
    image.height = 150;
    image.classList.add('specialImage');
    image.src = `./images/${source}`;
    image.alt = `${source} picture was here.`;

    return image;
}

function createParagraph(name,description) {
    const paragraph = document.createElement('div');
    paragraph.classList.add('paragraph');

    const itemName = document.createElement('p');
    itemName.classList.add('name');
    itemName.textContent = `${name}`;

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('description');
    itemDescription.textContent = `${description}`

    paragraph.appendChild(itemName);
    paragraph.appendChild(itemDescription);


    return paragraph;
}
function loadSpecialItem(){
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(specialItem());
}
export default loadSpecialItem;