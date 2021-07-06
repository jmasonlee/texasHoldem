import {Card, compareCards, getCardMatchingSymbol} from './Card'

export class CardArray {
    private readonly _cards: Card[];

    constructor(cards: Card[]) {
        this._cards = cards
    }

    get cards(): Card[] {
        return this._cards;
    }

    static getCardArrayFromSymbols(symbols: string[]): CardArray {
        let cards:Card[] = CardArray.getCardsFromSymbols([...symbols])
        return new CardArray(cards)
    }
    public countRepeatedValues() {
        let cardValues: number[] = this._cards.map(c => c.value)
        return CardArray.countDuplicatesInArray(cardValues) as Map<number, number>
    }

    private static getCardsFromSymbols(symbols: string[]):Card[] {
        const cards = symbols.map(c => getCardMatchingSymbol(c))
        return cards;
    }
    private static countDuplicatesInArray(entries: any[]): Map<any, number> {
        let entryCount: Map<any, number> = new Map<any, number>()
        entries.forEach(property => {
            let currentCount = entryCount.get(property)
            currentCount = currentCount ? currentCount + 1 : 1
            entryCount.set(property, currentCount)
        })
        return entryCount;
    }

    public filterDuplicateValues() {
        let cardsWithuniqueValues: Card[] = []
        const uniqueValues: number[] = [...new Set(this._cards.map(c => c.value))]
        uniqueValues.forEach(value => {
            cardsWithuniqueValues.push(this._cards.find(card => card.value === value))
        })
        return new CardArray(cardsWithuniqueValues);
    }
}
