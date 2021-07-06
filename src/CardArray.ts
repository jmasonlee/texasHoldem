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

    private static getCardsFromSymbols(symbols: string[]):Card[] {
        const cards = symbols.map(c => getCardMatchingSymbol(c))
        return cards;
    }
}
