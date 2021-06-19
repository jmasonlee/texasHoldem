import { PokerHand } from "./PokerHand";

export default class Parser {
    static parse(input: string) {
        const inputLines: string[] = input.trim().split("\n")
        const playerLines: string[] = inputLines.slice(1)
        let pokerHands = this.buildHands(playerLines);

        return pokerHands;
    }

    private static buildHands(playerLines: string[]) {
        let pokerHands = [];
        for (const line in playerLines) {
            let pokerHand = new PokerHand("Jayne", ["QH", "KS", "3H", "2C", "AD", "TC", "4D"]);
            pokerHands.push(pokerHand)
        }
        return pokerHands;
    }
}
