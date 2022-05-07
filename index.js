function countDown() {
let countDown = 0;
while (countDown < 11) {
    console.log(countDown++);
}
}


const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    for (let i = 3; i < cards.length; i++) {
        console.log(`Thank you ${cards[i]}for the wonderful birthday gift!`);
        debugger;
    }
    return cards;
}
writeCards(cards);



//  const gifts = ["teddy bear", "drone", "doll"];

//  function wrapGifts(gifts) {
//   let i = 0;
//    while (i < gifts.length) {
//      console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++;
//    }

//    return gifts;
//     }

// wrapGifts(gifts);

// const cards = ["Charlie", "Samip", "Ali"];
// function writeCards(cards) {
//     for (let i = 0; i < cards. length; i++) {
//         console.log(`Thank you, ${cards[i]} for the wonderful birthday gift!`)
//     }
//     return cards;
// }
// writeCards(cards);

// writeCards(["Charlie", "Samip", "Ali"], "birthday");

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//         chooseSeedLocation();
//         plantSeed();
//         waterSeed();
//         keepWorking = checkForMoreSeeds();
//     }
// }
// function countDown() {
// let countDown = 10;
// while (countDown < 10) {
//     console.log(countDown++);
// }
// }