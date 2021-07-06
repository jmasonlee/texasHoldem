export interface Card {
    value: (number | undefined)
    suit: (string | undefined)
    valueName: (string | undefined)
}
export function makeLowAce(highAce: Card){
    return {
        value: 1,
        valueName: 'Ace',
        suit: highAce.suit
    }
}

export function compareCards(c1: Card, c2: Card) {
    if (c1.value < c2.value) {
        return 1
    }
    if (c2.value < c1.value) {
        return -1
    } else {
        return 0
    }
}

export function getCardMatchingSymbol(cardSymbol: string): Card {
    const card:Card = {value: undefined, valueName: undefined, suit: cardSymbol[1]}
    switch (cardSymbol[0]) {
        case 'T':
            card.value = 10
            card.valueName = '10'
            break
        case 'J':
            card.value = 11
            card.valueName = 'Jack'
            break
        case 'Q':
            card.value = 12
            card.valueName = 'Queen'
            break
        case 'K':
            card.value = 13
            card.valueName = 'King'
            break
        case 'A':
            card.value = 14
            card.valueName = 'Ace'
            break
        default:
            card.value = +cardSymbol[0]
            card.valueName = cardSymbol[0]
    }
    return card
}
