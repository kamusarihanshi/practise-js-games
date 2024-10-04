const cardArray = [

    {  
          name: 'fries',
         image: '/practise-js-games/BoardGame/images/fries (1).png'
         },
         {
             name: 'burger',
             image: '/practise-js-games/BoardGame/images/cheeseburger.png'

         },
         {

             name: 'hotdog',
             image: '/practise-js-games/BoardGame/images/hotdog.png'
         },
         {
             name: 'pizza',
             image: '/practise-js-games/BoardGame/images/pizza.png'
         },
         {


             name: 'ice cream',
             image: '/practise-js-games/BoardGame/images/ice-cream.png'
         },
         {
            name:'milkshake',
            image: '/practise-js-games/BoardGame/images/milkshake.png'
         }, {  
            name: 'fries',
           image: '/practise-js-games/BoardGame/images/fries (1).png'
           },
           {
               name: 'burger',
               image: '/practise-js-games/BoardGame/images/cheeseburger.png'
  
           },
           {
  
               name: 'hotdog',
               image: '/practise-js-games/BoardGame/images/hotdog.png'
           },
           {
               name: 'pizza',
               image: '/practise-js-games/BoardGame/images/pizza.png'
           },
           {
  
  
               name: 'ice cream',
               image: '/practise-js-games/BoardGame/images/ice-cream.png'
           },
           {
              name:'milkshake',
              image: '/practise-js-games/BoardGame/images/milkshake.png'
           }
         
];

cardArray.sort(() => 0.5 - Math.random());
const grid =document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenId=[];
const cardsWon = [];

function createBoard() {
    for (let i=0; i<cardArray.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', '/practise-js-games/BoardGame/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);

    }


}

createBoard();

function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].image);
    // this lets u interact with the element being clicked  //
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }

   
   
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      cards[optionTwoId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      cards[optionTwoId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      cards[optionTwoId].setAttribute('src', '/practise-js-games/BoardGame/images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }