import {PokerHand} from "./pokerHands/PokerHand";
import {PokerHandFactory} from "./pokerHands/PokerHandFactory";

export default class Parser {
    static parse(input: string): PokerHand[] {
        let parsedElements = this.parseInputIntoElements(input);

        let communityCards: string[] = parsedElements[0]

        let playersAndHoleCards: string[][] = parsedElements.slice(1);

        return this.createHands(playersAndHoleCards, communityCards);
    }

    private static parseInputIntoElements(input: string) {
        let inputLines: string[] = input.trim().split("\n")
        let parsedElements: string[][] = []

        inputLines.forEach(line => {
            let elements: string[] = this.splitLinesIntoElements(line)
            parsedElements.push(elements)
        })

        return parsedElements;
    }

    private static createHands(playersAndPocketCards: string[][], communityCards: string[]) :PokerHand[]{
        let pokerHands: PokerHand[] = [];

        playersAndPocketCards.forEach(line => {
            let playerName: string = line[0]
            let holeCards: string[] = line.slice(1)
            let playerCards: string[] = [...communityCards, ...holeCards]

            let pokerHand = PokerHandFactory.createPokerHand(playerName, playerCards)
            pokerHands.push(pokerHand)
        })

        return pokerHands
    }

    private static splitLinesIntoElements(line: string) {
        return line.trim().split(/(\s+)/).filter(this.containsWhitespace);
    }

    private static containsWhitespace(token) {
        return token.match(/^ *$/) == null;
    }
}
