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
    it('Counts the number of times a Card of a certain value repeats in the array', () => {
        const expectedValueCounts: Map<number, number> = new Map<number, number>()
        expectedValueCounts.set(2, 3)
        expectedValueCounts.set(5, 2)
        expectedValueCounts.set(13, 2)
        const cards = CardArray.getCardArrayFromSymbols(['2D', '2S', '2C', '5H', '5C', 'KS', 'KH'])

        const actualValueCounts: Map<number, number> = cards.countRepeatedValues()

        expect(actualValueCounts).toEqual(expectedValueCounts)
    })
})
