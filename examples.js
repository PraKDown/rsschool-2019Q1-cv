function cards(value_cards) {
    const cards = [];
    for(let suit of ['♠', '♥', '♣', '♦'])
        for(let value=1; value<=13; value++)
            cards.push({suit, value});

    new_cards = cards.filter(c => c.value === value_cards);

    for(let card of new_cards)
        console.log(card.suit + " " + card.value);
}


function check_year() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(year + ' не высокосный.')
    else if(year % 100 != 0) console.log(year + ' высокосный.') 
    else if(year % 400 != 0) console.log( year + ' не высокосный. ' ) 
    else console.log(year + ' высокосный ');
}

function findNeedle(haystack) {
    if(haystack.length === 0) return "Ищем иголку!"; 
    if(haystack.shift() === 'иголка') return console.log("Нашли!")
    return findNeedle (haystack) ;
}

cards(5);
check_year();
findNeedle(['сено', 'сено', 'сено', 'сено', 'иголка', 'сено', 'сено']);