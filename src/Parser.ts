import {PokerHand} from "./PokerHand";

export default class Parser {
    static parse(input: string) {
        const inputLines: string[] = input.trim().split("\n")

        let pokerHands = this.buildHands(inputLines);

        return pokerHands;
    }

    private static buildHands(inputLines: string[]) {

        let parsedElements: string[][] = []

        inputLines.forEach(line => {
            let elements: string[] = this.splitLinesIntoElements(line)
            parsedElements.push(elements)
        })

        let communityCards: string[] = parsedElements[0]
        let playersAndPocketCards: string[][] = parsedElements.slice(1);
        return this.createHands(playersAndPocketCards, communityCards);
    }

    private static createHands(playersAndPocketCards: string[][], communityCards: string[]) :PokerHand[]{
        let pokerHands: PokerHand[] = [];
        playersAndPocketCards.forEach(line => {
            let playerName: string = line[0]
            let playerCards = this.getPotentialPlayerCards(communityCards, line);

            let pokerHand = new PokerHand(playerName, playerCards);
            pokerHands.push(pokerHand)
        })
        return pokerHands
    }

    private static getPotentialPlayerCards(communityCards: string[], line: string[]) {
        let cards: string[] = []
        communityCards.forEach(card => cards.push(card))
        line.slice(1).forEach(card => cards.push(card))
        return cards;
    }

    private static splitLinesIntoElements(line: string) {
        return line.trim().split(/(\s+)/).filter(this.containsWhitespace);
    }

    private static containsWhitespace(token) {
        return token.match(/^ *$/) == null;
    }
}
