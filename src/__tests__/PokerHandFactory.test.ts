import {PokerHand} from "../pokerHands/PokerHand";
import {Card} from "../Card";
import {PokerHandFactory} from "../pokerHands/PokerHandFactory";
import {CardArray} from "../CardArray";

function checkHand(cardSymbols: string[], expectedHandDescription: string, expectedKickers: Card[]) {
    const pokerHand: PokerHand = PokerHandFactory.createPokerHand('River', cardSymbols)

    expect(pokerHand.describeHand()).toEqual(expectedHandDescription)
    expect(pokerHand.kickers).toEqual(expectedKickers)
}

describe("PokerHand", () => {
    it('Will use the cards value name', () => {
        const expectedHandDescription = 'River High Card Queen';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols(['9D', '8C', '6D', '5D']).cards
        const cardSymbols = ['8C', '2S', '3H', '6D', '5D', '9D', 'QD'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name a pair of a lower value', () => {
        const expectedHandDescription = 'River Pair 2';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols(['9D', '8C', '7S']).cards
        const cardSymbols = ['8C', '7S', '3H', '2D', '5D', '9D', '2C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name Three of a kind', () => {
        const expectedHandDescription = 'River Three of a Kind 9';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols(['8C', '7S']).cards
        const cardSymbols = ['8C', '7S', '3H', '2D', '9S', '9D', '9C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name Four of a Kind', () => {
        const expectedHandDescription = 'River Four of a Kind 9';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols(['8D']).cards
        const cardSymbols = ['8D', '7D', '3D', '9H', '9S', '9D', '9C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name a Full House', () => {
        const expectedHandDescription = 'River Full House 8 9';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['8D', '8H', '8C', '9H', '9S', 'AD', 'TC'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name a Straight', () => {
        const expectedHandDescription = 'River Straight Ace';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['KD', 'QH', 'JC', 'TH', '9S', 'AD', 'TC'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly name a Straight where ace is low', () => {
        const expectedHandDescription = 'River Straight 5';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['KD', 'QH', '5C', '4H', '3S', 'AD', '2C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly create a Flush', () => {
        const expectedHandDescription = 'River Flush King';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['KH', 'QH', '5H', '4H', '3H', 'AD', '2C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly create a Straight Flush', () => {
        const expectedHandDescription = 'River Straight Flush King';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['KH', 'QH', 'JH', 'TH', '9H', 'AD', '2C'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })

    it('Will correctly create a Royal Flush', () => {
        const expectedHandDescription = 'River Royal Flush';
        const expectedKickers: Card[] = CardArray.getCardArrayFromSymbols([]).cards
        const cardSymbols = ['KH', 'QH', 'JH', 'TH', '9H', 'AH', '2H'];

        checkHand(cardSymbols, expectedHandDescription, expectedKickers);
    })
})
