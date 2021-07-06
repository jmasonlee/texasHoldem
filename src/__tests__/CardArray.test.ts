import {Card, getCardMatchingSymbol} from "../Card";
import {CardArray} from "../CardArray";

describe('The CardArray', () => {
    it('generates an array of cards from symbols', () => {
        const actualCards: Card[] = CardArray.getCardArrayFromSymbols(['KS', '6C', '2D']).cards
        const expectedCards: Card[] = [
            getCardMatchingSymbol('KS'),
            getCardMatchingSymbol('6C'),
            getCardMatchingSymbol('2D')
        ]

        expect(expectedCards).toEqual(actualCards)
    })
})
