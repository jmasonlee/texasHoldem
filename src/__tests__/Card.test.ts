import {Card, compareCards, getCardMatchingSymbol} from "../Card"

describe("A Card", () => {
    it('assigns the correct relative value on creation', () => {
        const unorderedCardSymbols: string[] = ['KD', '5D', '2D', 'AD', 'QD', '6D', '7D', '4D', '3D', '8D', 'JD', 'TD', '9D']
        const expectedOutputOrder: Card[] =
            ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'].map(c => getCardMatchingSymbol(c))

        const actualCardOrder = unorderedCardSymbols
            .map(c => getCardMatchingSymbol(c)).sort(compareCards).reverse()

        expect(actualCardOrder).toEqual(expectedOutputOrder)
    })

    it('assigns the correct value name for royal cards', () => {
        const cardSymbols: string[] = ['KD', 'AD', 'QD', 'JD', 'TD']
        const cards: Card[] = cardSymbols.map(c => getCardMatchingSymbol(c))
        const expectedValueNames = ['King', 'Ace', 'Queen', 'Jack', '10']
        const actualValueNames:string[] = cards.map(c => c.valueName)

        expect(actualValueNames).toEqual(expectedValueNames)
    })

    it( 'throws an exception for a card symbol longer than 2 characters', () => {
        expect( () => getCardMatchingSymbol('ABC')).toThrow('Oops! ABC is not a valid card.')
    })

    it( 'throws an exception for a card symbol without a valid suit', () => {
        expect( () => getCardMatchingSymbol('A7')).toThrow('Oops! A7 is not a valid card.')
    })

    it( 'throws an exception for a card symbol without a valid value', () => {
        expect( () => getCardMatchingSymbol('GH')).toThrow('Oops! GH is not a valid card.')
    })


})
