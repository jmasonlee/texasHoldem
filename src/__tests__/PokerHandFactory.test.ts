import {PokerHand} from "../pokerHands/PokerHand";
import {PokerHandFactory} from "../pokerHands/PokerHandFactory";

function checkHand(cardSymbols: string[], expectedHandDescription: string) {
    const pokerHand: PokerHand = PokerHandFactory.createPokerHand('River', cardSymbols)
    expect(pokerHand.describeHand()).toEqual(expectedHandDescription)
}

describe("PokerHand", () => {
    it('Will use the cards value name', () => {
        const expectedHandDescription = 'River High Card Queen';
        const cardSymbols = ['8C', '2S', '3H', '6D', '5D', '9D', 'QD'];

        checkHand(cardSymbols, expectedHandDescription);
    })

    it('Will correctly name a pair of a lower value', () => {
        const expectedHandDescription = 'River Pair 2';
        const cardSymbols = ['8C', '7S', '3H', '2D', '5D', '9D', '2C'];

        checkHand(cardSymbols, expectedHandDescription);
    })

    it('Will correctly name Three of a kind', () => {
        const expectedHandDescription = 'River Three of a Kind 9';
        const cardSymbols = ['8C', '7S', '3H', '2D', '9S', '9D', '9C'];

        checkHand(cardSymbols, expectedHandDescription);
    })

    it('Will correctly name Four of a Kind', () => {
        const expectedHandDescription = 'River Four of a Kind 9';
        const cardSymbols = ['8D', '7D', '3D', '9H', '9S', '9D', '9C'];

        checkHand(cardSymbols, expectedHandDescription);
    })

    it('Will correctly name a Full House', () => {
        const expectedHandDescription = 'River Full House 8 9';
        const cardSymbols = ['8D', '8H', '8C', '9H', '9S', 'AD', 'TC'];

        checkHand(cardSymbols, expectedHandDescription);
    })

    it('Will correctly name a Straight', () => {
        const expectedHandDescription = 'River Straight Ace';
        const cardSymbols = ['KD', 'QH', 'JC', 'TH', '9S', 'AD', 'TC'];

        checkHand(cardSymbols, expectedHandDescription)
    })

    it('Will correctly name a Straight where ace is low', () => {
        const expectedHandDescription = 'River Straight 5';
        const cardSymbols = ['KD', 'QH', '5C', '4H', '3S', 'AD', '2C'];

        checkHand(cardSymbols, expectedHandDescription);
    })
})
