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

    it('pulls the longest sequence of Cards from its Card[]', () => {
        const cards: CardArray = CardArray.getCardArrayFromSymbols(['KH', '6H', '5H', '4H', '3H', '2C'])
        const expectedSequence: Card[] = [
            getCardMatchingSymbol('6H'),
            getCardMatchingSymbol('5H'),
            getCardMatchingSymbol('4H'),
            getCardMatchingSymbol('3H'),
            getCardMatchingSymbol('2C'),
        ]

        const actualSequence = cards.getCardsInSequence().cards

        expect(expectedSequence).toEqual(actualSequence)
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
    it('Filters by duplicate values', () => {
        const cards = CardArray.getCardArrayFromSymbols(['2D', '2S', '2C', '5H', '5C', 'KS', 'KH'])
        const expectedFilteredArray: CardArray = CardArray.getCardArrayFromSymbols(['2D', '5H', 'KS'])
        const actualFilteredArray: CardArray = cards.filterDuplicateValues()

        expect(expectedFilteredArray).toEqual(actualFilteredArray)
    })

})
